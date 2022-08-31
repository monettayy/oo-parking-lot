<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Contracts\Encryption\DecryptException;
use Session;
use Crypt;

use App\Models\User;
use App\Models\Entrance;
use App\Models\Parking;
use App\Models\Slot;
use App\Models\SlotType;
use App\Models\VehicleType;

class PageController extends Controller
{
    public function loginPage(){
        return view('auth.login');
    }

    public function dashboardPage(){
        $entrances = Entrance::get();
        $vehicle_types = VehicleType::get();

        return view('pages.dashboard', compact('entrances', 'vehicle_types'));
    }
}
