<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Validator;
use Auth;
use Crypt;

use App\Models\User;
use App\Models\Role;
use App\Models\Entrance;

class UserController extends Controller
{
    public function listPage(){
        return view('pages.users');
    }
    
    public function formPage(){
        $roles = Role::get();
        $entrances = Entrance::get();

        return view('pages.users-form',compact('roles', 'entrances'));
    }
    
    public function formEditPage($id){
        $roles = Role::get();
        $entrances = Entrance::get();
        $user = User::findOrFail(Crypt::decryptString($id));

        return view('pages.users-form',compact('id', 'roles', 'entrances', 'user'));
    }

    public function getList(Request $request)
    {
        $input = $request->all();
        $users = User::filter($input)->with(['role', 'entrance'])
                    ->orderBy('created_at','DESC')
                    ->paginate('25');

        return response()->json([
            'status' => 'OK',
            'message' => 'Success',
            'data' => $users
        ]);
    }

    public function saveItem(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'name'=>'required',
            'username'=>'required|unique:users',
            'role_id'=>'required',
            'password' => 'required|min:6',
            'confirm_password' => 'required|same:password',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>'Error',
                'message'=>'Incomplete form details',
                'errors'=>$validator->messages()
            ],200);
        }

        $user = User::create($input);

        return response()->json([
            'status' => 'OK',
            'message' => 'Success'
        ]);
    }

    public function updateItem(Request $request, $id)
    {
        $input = $request->all();
        if(isset($input['password']) && ($input['password'] && strlen($input['password']) > 0)){
            $validator = Validator::make($input,[
                'name'=>'required',
                'username'=>'required|unique:users',
                'role_id'=>'required',
                'password' => 'required|min:6',
                'confirm_password' => 'required|same:password',
            ]);
        }else{
            unset($input['password']);
            $validator = Validator::make($input,[
                'name'=>'required',
                'role_id'=>'required',
            ]);
        }

        if($validator->fails()){
            return response()->json([
                'status'=>'Error',
                'message'=>'Incomplete form details',
                'errors'=>$validator->messages()
            ],200);
        }

        $user = User::findOrFail($id);

        if($user->username != $input['username']){
            $validator = Validator::make($input,[
                'username'=>'required|unique:users',
            ]);

            if($validator->fails()){
                return response()->json([
                        'status'=>'Error',
                        'message'=>'Incomplete form details',
                        'errors'=>$validator->messages()
                ],200);
            }
        }
        
        // admin reset password
        if(isset($input['change_password'])){
            $change_password = $input['change_password'];
            if(isset($change_password['new_password']) && strlen($change_password['new_password'])>0){
                $validator = Validator::make($change_password,[
                    'new_password' => 'required|min:6',
                    'confirm_password' => 'required|same:new_password'
                ]);
                if($validator->fails()){
                    return response()->json([
                            'status'=>'Error',
                            'message'=>'Incomplete form details',
                            'errors'=>$validator->messages()
                    ],200);
                }
                $input['password'] = $change_password['new_password'];
                unset($input['change_password']);
            }else{
                unset($input['password']);
            }
        }else{
            unset($input['password']);
        }

        $user->update($input);

        return response()->json([
            'status' => 'OK',
            'message' => 'Success'
        ]);
    }

    public function deleteItem(Request $request, $id)
    {
        $item = User::findOrFail($id);
        $item->delete();

        return response()->json([
            'status' => 'OK',
            'message' => 'Success'
        ]);
    }
}
