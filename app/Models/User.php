<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Illuminate\Support\Carbon;
use Crypt;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'username', 'password', 'role_id', 'entrance_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        
    ];

    public function setPasswordAttribute($value){
        $this->attributes['password'] = bcrypt($value);
    }

    public function getRoleAttribute(){
        return $this->role()->first();
    }

    // relationships
    public function role(){
        return $this->belongsTo('App\Models\Role');
    }

    public function entrance(){
        return $this->belongsTo('App\Models\Entrance');
    }

    // appends
    protected $appends = ['code', 'user_role', 'location'];
    
    public function getCodeAttribute(){
        return Crypt::encryptString($this->attributes['id']);
    }

    public function getUserRoleAttribute(){
        return $this->role()->first();
    }

    public function getLocationAttribute(){
        return $this->entrance()->first();
    }
    
    // scopes
    public function scopeFilter($query, $input){
        if(isset($input['keywords']) && strlen($input['keywords']) > 0){
            $query->where('name','like','%'.$input['keywords'].'%')
                ->orWhere('username','like','%'.$input['keywords'].'%');
        }
    }
}
