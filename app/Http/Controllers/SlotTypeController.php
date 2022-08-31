<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Validator;
use Auth;
use Crypt;

use App\Models\SlotType;

class SlotTypeController extends Controller
{
    public function listPage(){
        return view('pages.slot_types');
    }
    
    public function formPage(){
        return view('pages.slot_types-form');
    }
    
    public function formEditPage($id){
        $slot_type = SlotType::findOrFail(Crypt::decryptString($id));

        return view('pages.slot_types-form',compact('id', 'slot_type'));
    }

    public function getList(Request $request)
    {
        $input = $request->all();
        $slot_types = SlotType::filter($input)
                            ->orderBy('created_at','DESC')
                            ->paginate('25');

        return response()->json([
            'status' => 'OK',
            'message' => 'Success',
            'data' => $slot_types
        ]);
    }

    public function saveItem(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'name'=>'required',
            'charge_per_hour'=>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>'Error',
                'message'=>'Incomplete form details',
                'errors'=>$validator->messages()
            ],200);
        }

        $user = SlotType::create($input);

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
            'charge_per_hour'=>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>'Error',
                'message'=>'Incomplete form details',
                'errors'=>$validator->messages()
            ],200);
        }

        $item = SlotType::findOrFail($id);
        $item->update($input);

        return response()->json([
            'status' => 'OK',
            'message' => 'Success'
        ]);
    }

    public function deleteItem(Request $request, $id)
    {
        $item = SlotType::findOrFail($id);
        $item->delete();

        return response()->json([
            'status' => 'OK',
            'message' => 'Success'
        ]);
    }
}
