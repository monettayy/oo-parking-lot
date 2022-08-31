<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Collection;
use Illuminate\Support\Carbon;

use Validator;
use Auth;
use Crypt;

use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('username','password');

        if($auth = Auth::attempt($credentials))
        {
            $user = Auth::user();
            
            return redirect('/dashboard');
        }

        return back()->with('flash_message','This credentials do not match our records.');
    }

    public function logout()
    {
        if(Auth::check())
            Auth::logout();

        return response()->json([
            'status' => 'OK',
            'message' => 'Success',
            'url' => url('/login')
        ]);
    }
}
