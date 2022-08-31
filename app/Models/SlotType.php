<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Crypt;

class SlotType extends Model
{
    protected $fillable = ['name', 'description', 'charge_per_hour'];
    
    protected $appends = [
        'code',
        'icon', 'icon_md', 'icon_lg'
    ];
    
    public function getCodeAttribute(){
        return Crypt::encryptString($this->attributes['id']);
    }
    

    public function getIconAttribute(){
        switch($this->id)
        {
            case 2:
                return '/icons/cars/suv-48.png';
            case 3:
                return '/icons/cars/truck-48.png';
            default:
                return '/icons/cars/car-48.png';
        }
    }
    
    public function getIconMdAttribute(){
        switch($this->id)
        {
            case 2:
                return '/icons/cars/suv-128.png';
            case 3:
                return '/icons/cars/truck-128.png';
            default:
                return '/icons/cars/car-128.png';
        }
    }
    
    public function getIconLgAttribute(){
        switch($this->id)
        {
            case 2:
                return '/icons/cars/suv.png';
            case 3:
                return '/icons/cars/truck.png';
            default:
                return '/icons/cars/car.png';
        }
    }
    
    public function scopeFilter($query, $filter){
        if(isset($filter['keywords'])){
            $query->where(function($q)use($filter){
                $q->where('name','like','%'.$filter['keywords'].'%')
                ->orWhere('description','like','%'.$filter['keywords'].'%')
                ->orWhere('charge_per_hour','like','%'.$filter['keywords'].'%');
            });
        }
        
        return $query;
    }
}
