<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Crypt;

use App\Models\SlotType;

class VehicleType extends Model
{
    protected $fillable = ['name', 'description', 'slot_types'];

    protected $appends = [
        'code',
        'slot_type_arr', 'slot_type_obj'
    ];

    public function getCodeAttribute(){
        return Crypt::encryptString($this->attributes['id']);
    }
    
    public function getSlotTypeArrAttribute(){
        $array = explode(',', $this->slot_types);

        return $array;
    }
    
    public function getSlotTypeObjAttribute(){
        $array = explode(',', $this->slot_types);
        $value = [];
        foreach ($array as $id) {
            $type = SlotType::find($id);
            array_push($value, $type);
        }
        
        return $value;
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
