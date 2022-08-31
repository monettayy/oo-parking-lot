<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Validator;
use Auth;
use Crypt;

use App\Models\Slot;
use App\Models\SlotType;
use App\Models\Entrance;

class SlotController extends Controller
{
    public function listPage(){
        return view('pages.slots');
    }
    
    public function formPage(){
        $slot_types = SlotType::get();
        $entrances = Entrance::get();

        return view('pages.slots-form',compact('slot_types', 'entrances'));
    }
    
    public function formEditPage($id){
        $slot_types = SlotType::get();
        $entrances = Entrance::get();
        $slot = Slot::findOrFail(Crypt::decryptString($id));

        return view('pages.slots-form',compact('id', 'slot_types', 'entrances', 'slot'));
    }

    public function getList(Request $request)
    {
        $input = $request->all();
        $input['order_by'] = 'created_at DESC';
        $slots = Slot::filter($input)->with(['slot_type', 'entrance'])
                    ->paginate('25');

        return response()->json([
            'status' => 'OK',
            'message' => 'Success',
            'data' => $slots,
            'input' => $input
        ]);
    }

    public function saveItem(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'entrance_id'=>'required',
            'slot_type_id'=>'required',
            'distance'=>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>'Error',
                'message'=>'Incomplete form details',
                'errors'=>$validator->messages()
            ],200);
        }

        $user = Slot::create($input);

        return response()->json([
            'status' => 'OK',
            'message' => 'Success'
        ]);
    }

    public function updateItem(Request $request, $id)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'entrance_id'=>'required',
            'slot_type_id'=>'required',
            'distance'=>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>'Error',
                'message'=>'Incomplete form details',
                'errors'=>$validator->messages()
            ],200);
        }

        $item = Slot::findOrFail($id);
        $item->update($input);

        return response()->json([
            'status' => 'OK',
            'message' => 'Success'
        ]);
    }

    public function deleteItem(Request $request, $id)
    {
        $item = Slot::findOrFail($id);
        $item->delete();

        return response()->json([
            'status' => 'OK',
            'message' => 'Success'
        ]);
    }
}
