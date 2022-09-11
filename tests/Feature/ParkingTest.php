<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ParkingTest extends TestCase
{
    public function testPark()
    {
        $response = $this->post('/park', [
            'username'=>'admin',
            'password'=>'secret123'
        ]);

        
        // 'status'=>'OK',
        // 'message'=>'Parking saved!',
        // 'vehicle'=> $vehicle,
        // 'parking'=> $parking,
        // 'slot_type'=> $slot_type
        
        $response->assertJson([
            'status'=>'OK',
        ]);
    }
}
