<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Validator;
use Auth;
use Crypt;

use App\Models\Entrance;

class EntranceController extends Controller
{
    public function listPage(){
        return view('pages.entrances');
    }
    
    public function formPage(){
        return view('pages.entrances-form');
    }
    
    public function formEditPage($id){
        $entrance = Entrance::findOrFail(Crypt::decryptString($id));

        return view('pages.entrances-form',compact('id', 'entrance'));
    }

    public function getList(Request $request)
    {
        $input = $request->all();
        $entrances = Entrance::filter($input)
                            ->orderBy('created_at','DESC')
                            ->paginate('25');

        return response()->json([
            'status' => 'OK',
            'message' => 'Success',
            'data' => $entrances
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

        $user = Entrance::create($input);

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

        $item = Entrance::findOrFail($id);
        $item->update($input);

        return response()->json([
            'status' => 'OK',
            'message' => 'Success'
        ]);
    }

    public function deleteItem(Request $request, $id)
    {
        $item = Entrance::findOrFail($id);
        $item->delete();

        return response()->json([
            'status' => 'OK',
            'message' => 'Success'
        ]);
    }
}
