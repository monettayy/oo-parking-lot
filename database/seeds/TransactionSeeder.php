<?php

use Illuminate\Database\Seeder;

use App\Models\Slot;
use App\Models\Vehicle;
use App\Models\Parking;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('vehicles')->truncate();
        DB::table('parkings')->truncate();

        $this->seedByEntrance(1);
        $this->seedByEntrance(2);
        $this->seedByEntrance(3);
    }

    private function seedByEntrance($entrance_id){
        // SP
        $slots = Slot::where('entrance_id', $entrance_id)
                    ->where('slot_type_id', 1)
                    ->with(['slot_type'])
                    ->get();
        $this->seedBySlotType($slots, rand(0, count($slots)-1), [1, 1]);
        
        // MP
        $slots = Slot::where('entrance_id', $entrance_id)
                    ->where('slot_type_id', 2)
                    ->with(['slot_type'])
                    ->get();
        $this->seedBySlotType($slots, rand(0, count($slots)-3), [1, 2]);
        
        // LP
        $slots = Slot::where('entrance_id', $entrance_id)
                    ->where('slot_type_id', 3)
                    ->with(['slot_type'])
                    ->get();
        $this->seedBySlotType($slots, rand(0, count($slots)-5), [1, 3]);
    }

    private function seedBySlotType($slots, $no, $vehicle_type){
        $random_index = 0;
        for ($x = 0; $x < $no; $x++) {
            $vehicle_type_id = rand($vehicle_type[0], $vehicle_type[1]);
            $vehicle = Vehicle::create([
                'vehicle_type_id' => $vehicle_type_id,
                'plate_no' => 'TEST-'.$vehicle_type_id.'-'.($x+1),
                'customer_name' => 'CUSTOMER-'.($x+1),
                'description' => 'TEST'.$no.'| slots:'.count($slots),
                'last_parked_at' => now(),
            ]);
            $random_slot = $slots[0];
            $slots->splice(0, 1);
            
            Parking::create([
                'vehicle_id' => $vehicle['id'],
                'slot_id' => $random_slot['id'],
                'entry' => now(),
                'charge_rate' => $random_slot['slot_type']['charge_per_hour'],
                'status' => 1
            ]);
        }
    }
}
