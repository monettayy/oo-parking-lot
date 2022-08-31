<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Validator;
use Auth;
use Crypt;

use App\Models\VehicleType;
use App\Models\SlotType;

class VehicleTypeController extends Controller
{
    public function listPage(){
        return view('pages.vehicle_types');
    }
    
    public function formPage(){
        $slot_types = [];
        array_push($slot_types, [
            'id'=> '1,2,3',
            'name'=> 'SP, MP, LP',
        ]);
        array_push($slot_types, [
            'id'=> '2,3',
            'name'=> 'MP, LP',
        ]);
        array_push($slot_types, [
            'id'=> '3',
            'name'=> 'LP',
        ]);

        return view('pages.vehicle_types-form', compact('slot_types'));
    }
    
    public function formEditPage($id){
        $slot_types = [];
        array_push($slot_types, [
            'id'=> '1,2,3',
            'name'=> 'SP, MP, LP',
        ]);
        array_push($slot_types, [
            'id'=> '2,3',
            'name'=> 'MP, LP',
        ]);
        array_push($slot_types, [
            'id'=> '3',
            'name'=> 'LP',
        ]);
        $vehicle_type = VehicleType::findOrFail(Crypt::decryptString($id));

        return view('pages.vehicle_types-form',compact('id', 'vehicle_type', 'slot_types'));
    }

    public function getList(Request $request)
    {
        $input = $request->all();
        $vehicle_types = VehicleType::filter($input)
                            ->orderBy('created_at','DESC')
                            ->paginate('25');

        return response()->json([
            'status' => 'OK',
            'message' => 'Success',
            'data' => $vehicle_types
        ]);
    }

    public function saveItem(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'name'=>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>'Error',
                'message'=>'Incomplete form details',
                'errors'=>$validator->messages()
            ],200);
        }

        $user = VehicleType::create($input);

        return response()->json([
            'status' => 'OK',
            'message' => 'Success'
        ]);
    }

    public function updateItem(Request $request, $id)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'name'=>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>'Error',
                'message'=>'Incomplete form details',
                'errors'=>$validator->messages()
            ],200);
        }

        $item = VehicleType::findOrFail($id);
        $item->update($input);

        return response()->json([
            'status' => 'OK',
            'message' => 'Success'
        ]);
    }

    public function deleteItem(Request $request, $id)
    {
        $item = VehicleType::findOrFail($id);
        $item->delete();

        return response()->json([
            'status' => 'OK',
            'message' => 'Success'
        ]);
    }
}
