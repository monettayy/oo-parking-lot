<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    protected $fillable = ['vehicle_type_id', 'plate_no', 'customer_name', 'description', 'last_parked_at'];

    public function vehicle_type(){
        return $this->belongsTo('App\Models\VehicleType', 'vehicle_type_id');
    }

    protected $appends = [
        'vehicle_type_lbl', 'vehicle_type_desc',
        'icon', 'icon_md', 'icon_lg', 
    ];
    
    public function getVehicleTypeLblAttribute(){
        $vehicle_type = $this->vehicle_type()->first();
        return $vehicle_type->name;
    }
    
    public function getVehicleTypeDescAttribute(){
        $vehicle_type = $this->vehicle_type()->first();
        return $vehicle_type->description;
    }

    public function getIconAttribute(){
        switch($this->vehicle_type_id)
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
        switch($this->vehicle_type_id)
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
        switch($this->vehicle_type_id)
        {
            case 2:
                return '/icons/cars/suv.png';
            case 3:
                return '/icons/cars/truck.png';
            default:
                return '/icons/cars/car.png';
        }
    }
}
