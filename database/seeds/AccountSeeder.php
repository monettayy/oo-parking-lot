<?php

use Illuminate\Database\Seeder;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'name' => 'Admin',
        ]);
        DB::table('roles')->insert([
            'name' => 'Park Attendant',
        ]);

        DB::table('entrances')->insert([
            'name' => 'Main Entrance',
            'description' => 'Entrance 1',
        ]);
        DB::table('entrances')->insert([
            'name' => 'Entrance Left',
            'description' => 'Entrance 2',
        ]);
        DB::table('entrances')->insert([
            'name' => 'Entrance Right',
            'description' => 'Entrance 3',
        ]);

        DB::table('users')->insert([
            'name' => 'Administrator',
            'username' => 'admin',
            'password' => bcrypt('secret123'),
            'role_id' => 1,
        ]);
        DB::table('users')->insert([
            'name' => 'User Anna',
            'username' => 'anna',
            'password' => bcrypt('secret'),
            'role_id' => 2,
            'entrance_id' => 1,
        ]);
        DB::table('users')->insert([
            'name' => 'User John',
            'username' => 'john',
            'password' => bcrypt('secret'),
            'role_id' => 2,
            'entrance_id' => 2,
        ]);
        DB::table('users')->insert([
            'name' => 'User Peter',
            'username' => 'peter',
            'password' => bcrypt('secret'),
            'role_id' => 2,
            'entrance_id' => 3,
        ]);
    }
}
