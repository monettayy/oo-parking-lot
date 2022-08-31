<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Crypt;

use App\Models\Parking;

class Slot extends Model
{
    protected $fillable = ['entrance_id', 'slot_type_id', 'distance'];
    
    public function entrance(){
        return $this->belongsTo('App\Models\Entrance');
    }

    public function slot_type(){
        return $this->belongsTo('App\Models\SlotType', 'slot_type_id');
    }

    protected $appends = [
        'code',
        'slot_lbl', 'availability'
    ];

    public function getCodeAttribute(){
        return Crypt::encryptString($this->attributes['id']);
    }

    public function getSlotLblAttribute(){
        $entrance = $this->entrance()->first();
        $slot_type = $this->slot_type()->first();
        return $slot_type->name . $this->distance;
    }
    
    public function getAvailabilityAttribute(){
        $filter = [
            'slot_id' => $this->id,
            // 'entry' => strftime('%F'),
            'status' => 1,
        ];
        $parking = Parking::filter($filter)
                            ->with(['vehicle'])
                            ->first();
        $status = 1;
        $status_lbl = 'AVAILABLE';

        if($parking){
            $status = 0;
            $status_lbl = 'NOT AVAILABLE';
        }

        $availability = [
            'parked' => $parking,
            'status' => $status,
            'status_lbl' => $status_lbl
        ];

        return $availability;
    }

    public function scopeFilter($query, $filter){
        if(isset($filter['keywords'])){
            $query->where(function($q)use($filter){
                $q->where('distance','like','%'.$filter['keywords'].'%')
                    ->orWhereHas('entrance', function($qq)use($filter){
                        $qq->where('name','like','%'.$filter['keywords'].'%');
                    })
                    ->orWhereHas('slot_type', function($qq)use($filter){
                        $qq->where('name','like','%'.$filter['keywords'].'%');
                    });
            });
        }

        if(isset($filter['entrance_id'])){
            $query->where('entrance_id', $filter['entrance_id']);
        }

        if(isset($filter['order_by'])){
            $query->orderByRaw($filter['order_by']);
        }else{
            $query->orderByRaw('entrance_id ASC, distance ASC');
        }

        return $query;
    }
}
