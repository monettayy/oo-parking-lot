<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class AllowUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $roles)
    {
        $roles = explode('|',$roles);
        
        if(Auth::check() && in_array( Auth::user()->role_id, $roles))
            return $next($request);
        else if(Auth::check()){
            return redirect('/not-allowed')->with('flash_message', url('/dashboard'));
        }
        
        return redirect('/login')->with('flash_message','Unauthorized');
    }
}
