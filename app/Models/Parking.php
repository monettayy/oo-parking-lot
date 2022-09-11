<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Carbon\Carbon;

use App\Models\Setting;

class Parking extends Model
{
    protected $fillable = [
        'vehicle_id', 'slot_id', 'entry', 'exit',
        'total_days', 'total_hours', 'total_minutes', 'charge_rate', 'computed_amount', 
        'status',
    ];

    protected $appends = [
        'status_lbl',
        'sub_total',
        'slot_lbl',
        'entrance_lbl',
    ];

    public function getStatusLblAttribute(){
        switch($this->status)
        {
            case 1:
                return 'Parked';
            case 2:
                return 'Unparked';
            default:
                return 'Pending';
        }
    }
    
    public function getSubTotalAttribute(){
        $charge_rate = $this->charge_rate;
        $dt_now = Carbon::now();
        $entry = Carbon::parse($this->entry);

        $total_days = $entry->diffInDays($dt_now);
        $total_hours = $entry->diffInHours($dt_now);
        $total_minutes = $entry->diffInMinutes($dt_now);
        $minutes = 0;
        $hours = 0;

        $base_charge_rate = Setting::where('name', 'base_charge_rate')->first();
        $day_rate = Setting::where('name', 'day_rate')->first();

        // base pay
        $computed_amount = $base_charge_rate->value;
        if(floor($total_days) > 0){ // exceeds 24 hours
            $days = floor($total_days);
            $computed_amount = ($days * $day_rate->value);

            $hours = ceil($total_hours);
            $hours -= ($days * 24);

            $minutes = ($total_minutes / 60);
            $minutes = round($minutes - floor($minutes), 2);
            $hrmin = $hours + $minutes;
            // reset
            $minutes = round($total_minutes % 60, 2);

            $computed_amount += (ceil($hrmin) * $charge_rate);
        }else if(ceil($total_hours) > 3){ // exceeds 3 hours
            $hours = ceil($total_hours);

            $minutes = ($total_minutes / 60);
            $minutes = round($minutes - floor($minutes), 2);
            $hrmin = $hours + $minutes;
            // reset
            $minutes = round($total_minutes % 60, 2);

            // flat rate
            $hr = ceil($hrmin) - 3;

            $computed_amount += ($hr * $charge_rate);
        }else{ // less than 3
            $hours = ceil($total_hours);
            
            $minutes = round($total_minutes % 60, 2);
        }
        
        return [
            'as_of' => $dt_now,
            'total_days' => $total_days,
            'total_hours' => $total_hours,
            'total_minutes' => $total_minutes,
            'hours' => $hours,
            'minutes' => $minutes,
            'computed_amount' => $computed_amount
        ];
    }

    public function getSlotLblAttribute(){
        $slot = $this->slot()->first();
        return $slot->slot_lbl;
    }

    public function getEntranceLblAttribute(){
        $slot = $this->slot()->with(['entrance'])->first();
        return $slot->entrance->name;
    }

    public function vehicle(){
        return $this->belongsTo('App\Models\Vehicle');
    }
    
    public function slot(){
        return $this->belongsTo('App\Models\Slot');
    }

    public function scopeFilter($query, $filter){
        if(isset($filter['entry'])){
            $query->whereDate('entry', $filter['entry']);
        }
        
        if(isset($filter['status'])){
            if($filter['status'] === -1){
                $query->where('status', '!=', 1);
            }else{
                $query->where('status', $filter['status']);
            }
        }
        
        if(isset($filter['slot_id'])){
            $query->where('slot_id', $filter['slot_id']);
        }
        
        if(isset($filter['entrance_id'])){
            $query->whereHas('slot', function($q)use($filter){
                $q->where('entrance_id', $filter['entrance_id']);
            });
        }
        

        return $query;
    }
}
