<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Crypt;

class Entrance extends Model
{
    protected $fillable = ['name', 'description'];

    protected $appends = ['code'];
    
    public function getCodeAttribute(){
        return Crypt::encryptString($this->attributes['id']);
    }
    
    public function scopeFilter($query, $filter){
        if(isset($filter['keywords'])){
            $query->where(function($q)use($filter){
                $q->where('name','like','%'.$filter['keywords'].'%')
                ->orWhere('description','like','%'.$filter['keywords'].'%');
            });
        }
        
        return $query;
    }
}
