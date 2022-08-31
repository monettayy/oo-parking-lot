<?php

use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->insert([
            'name' => 'base_charge_rate',
            'description' => 'Rate for the first 3 hours',
            'value' => '40',
        ]);
        DB::table('settings')->insert([
            'name' => 'day_rate',
            'description' => 'Rate for parking that exceeds 24hrs',
            'value' => '5000',
        ]);

        DB::table('slot_types')->insert([
            'name' => 'SP',
            'description' => 'Small Parking Space',
            'charge_per_hour' => 20,
        ]);
        DB::table('slot_types')->insert([
            'name' => 'MP',
            'description' => 'Medium Parking Space',
            'charge_per_hour' => 60,
        ]);
        DB::table('slot_types')->insert([
            'name' => 'LP',
            'description' => 'Large Parking Space',
            'charge_per_hour' => 100,
        ]);

        DB::table('vehicle_types')->insert([
            'name' => 'S',
            'description' => 'Small Vehicle. Can Park in SP, MP, LP Parking Spaces',
            'slot_types' => '1,2,3',
        ]);
        DB::table('vehicle_types')->insert([
            'name' => 'M',
            'description' => 'Medium Vehicle. Can Park in MP and LP Parking Spaces',
            'slot_types' => '2,3',
        ]);
        DB::table('vehicle_types')->insert([
            'name' => 'L',
            'description' => 'Large Vehicle. Can Park in LP Parking Spaces only',
            'slot_types' => '3',
        ]);

        // Parking Spaces
        // for every entrance, it has a x (random) no of parking slot types (SP, MP, LP)
        // for every SP | MP | LP, it will  generate a random  no of Parking Spaces
        // the distance between the entrance and the Parking Space will be the counter (to make it unique for every entrance)
        for ($entrance_id = 1; $entrance_id <= 3; $entrance_id++) {
            $total_parking_spaces = rand(10,50);
            for ($y = 1; $y <= $total_parking_spaces; $y++) {
                DB::table('slots')->insert([
                    'slot_type_id' => rand(1, 3), // randomly pick from slot_types
                    'entrance_id' => $entrance_id,
                    'distance' => $y,
                ]);
            }
        }
    }
}
