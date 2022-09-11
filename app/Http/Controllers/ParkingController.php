<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Validator;
use Carbon\Carbon;

use App\Models\Vehicle;
use App\Models\Parking;
use App\Models\Slot;
use App\Models\SlotType;

class ParkingController extends Controller
{
    public function dashboardStats(Request $request)
    {
        $input = $request->all();
        $stats = [
            'currently_parked' => 0,
            'total_today' => 0,
            'available_slots' => 0,
        ];

        $slot_types = SlotType::get();
        $slots = Slot::filter($input)->with(['slot_type', 'entrance'])->get();
        $input['entry'] = strftime('%F');
        $parkings_today = Parking::filter($input)->get();
        $input['status'] = 1;
        $parkings_parked = Parking::filter($input)->get();
                    
        $stats['currently_parked'] = count($parkings_parked);
        $stats['total_today'] = count($parkings_today);
        $stats['available_slots'] = count($slots) - count($parkings_parked);

        $data = [
            'slots' => $slots,
            'parkings_today' => $parkings_today,
            'parkings_parked' => $parkings_parked,
            'slot_types' => $slot_types,
        ];

        return response()->json([
            'status' => 'OK',
            'message' => 'Success',
            'data' => $data,
            'stats' => $stats,
        ]);
    }

    public function park(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'plate_no'=>'required',
            'customer_name'=>'required',
            'vehicle_type_id'=>'required',
        ],[
            'plate_no.required' => 'Plate No is required',
            'customer_name.required' => "Customer's Name is required",
            'vehicle_type_id.required' => 'Vehicle Type is required',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>'Error',
                'message'=>'Incomplete form details',
                'errors'=>$validator->messages()
            ], 200);
        }

        // check for returning vehicles
        // return RETURNED
        // else
        // return OK

        $dt_now = Carbon::now();
        $vehicle = Vehicle::where(function($q)use($input){
                                $q->where('plate_no', $input['plate_no']);
                                // ->orWhere('customer_name', $input['customer_name']);
                            })
                            ->where(function($q)use($dt_now){
                                $q->where('last_parked_at', '<=', $dt_now->format('Y-m-d H:i:s'))
                                ->where('last_parked_at', '>=', $dt_now->subHours(1)->format('Y-m-d H:i:s'));
                            })
                            ->first();
                  
        if($vehicle){
            $dt_now = Carbon::parse($vehicle->last_parked_at)->format('Y-m-d');
            \DB::enableQueryLog();
            $parking = Parking::where('vehicle_id', $vehicle->id)
                            ->whereDate('entry', $dt_now)
                            ->latest()
                            ->first();
            $vehicle->last_parked_at = now();
            $vehicle->save();
            $slot = Slot::find($parking->slot_id);
            $slot_type = SlotType::find($slot->slot_type_id);

            return response()->json([
                'status'=>'RETURNED',
                'message'=>'Parking will resume',
                'vehicle'=>$vehicle,
                'parking'=> $parking,
                'slot_type'=> $slot_type
            ]);
        }

        // save to vehicles
        $vehicle = Vehicle::create($input);
        $vehicle = Vehicle::where('id', $vehicle->id)->with(['vehicle_type'])->first();

        // search for parking space
        // search for available slot_type
        $slot_types = $vehicle->vehicle_type->slot_type_arr;
        // foreach ($slot_types as $slot_type) {
            $slots = Slot::where('entrance_id', $input['entrance_id'])
                        ->whereIn('slot_type_id', $vehicle->vehicle_type->slot_type_arr)
                        ->with(['slot_type'])
                        ->orderBy('distance', 'ASC')
                        ->get();
    
            $available_slot = null;
            foreach ($slots as $slot) {
                // if($slot->availability && $slot->availability['status'] == 1){
                //     $available_slot = $slot;
                //     break;
                // }
                if($slot->availability && $slot->availability['status'] == 1){
                    $available_slot = $slot;
                    break;
                }
            }
            // if ($available_slot) {
            //     break;
            // }
        // }

        if($available_slot){
            // save to parkings
            $parking = Parking::create([
                'vehicle_id' => $vehicle->id,
                'slot_id' => $available_slot->id,
                'entry' => now(),
                'charge_rate' => $available_slot->slot_type->charge_per_hour,
                'status' => 1
            ]);
            $vehicle->last_parked_at = now();
            $vehicle->save();
            $slot = Slot::find($parking->slot_id);
            $slot_type = SlotType::find($slot->slot_type_id);
            
            return response()->json([
                'status'=>'OK',
                'message'=>'Parking saved!',
                'vehicle'=> $vehicle,
                'parking'=> $parking,
                'slot_type'=> $slot_type
            ]);
        }else{
            return response()->json([
                'status'=>'NO AVAILABLE',
                'message'=>'No available Parking Space!',
                'vehicle'=> $vehicle
            ]);
        }
    }

    public function unpark(Request $request)
    {
        $input = $request->all();
        $parking = Parking::with(['vehicle', 'slot'])->findOrFail($input['id']);
        
        // save calculation fees
        $sub_total = $parking->sub_total;
        $parking->exit = $sub_total['as_of'];
        $parking->total_days = $sub_total['total_days'];
        $parking->total_hours = $sub_total['total_hours'];
        $parking->total_minutes = $sub_total['total_minutes'];
        $parking->computed_amount = $sub_total['computed_amount'];
        $parking->status = 2;
        $parking->save();
        
        $vehicle = Vehicle::where('id', $parking->vehicle_id)->with(['vehicle_type'])->first();

        $slot = Slot::find($parking->slot_id);
        $slot_type = SlotType::find($slot->slot_type_id);

        return response()->json([
            'status'=>'OK',
            'message'=>'Saved',
            'vehicle'=> $vehicle,
            'parking'=> $parking,
            'slot_type'=> $slot_type
        ]);
    }
}
