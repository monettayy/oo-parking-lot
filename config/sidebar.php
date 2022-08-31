<?php
return [
    'items' =>  [
        [
            'name' => 'Dashboard',
            'icon' => 'fa fa-tv',
            'link' => '/dashboard',
            'permission' => [1, 2],
            'isMaintenance' => false
        ],
        [
            'name' => 'Settings',
            'icon' => 'fa fa-cog',
            'link' => '/settings',
            'permission' => [1],
            'isMaintenance' => false,
            'items' => [
                [
                    'name' => 'Users',
                    'icon' => 'fa fa-users',
                    'link' => '/users',
                    'permission' => [1],
                    'isMaintenance' => false
                ],
                [
                    'name' => 'Entrances',
                    'icon' => 'fa fa-door-open',
                    'link' => '/entrances',
                    'permission' => [1],
                    'isMaintenance' => false
                ],
                [
                    'name' => 'Slot Types',
                    'icon' => 'fa fa-list',
                    'link' => '/slot-types',
                    'permission' => [1],
                    'isMaintenance' => false
                ],
                [
                    'name' => 'Vehicle Types',
                    'icon' => 'fa fa-car',
                    'link' => '/vehicle-types',
                    'permission' => [1],
                    'isMaintenance' => false
                ],
                [
                    'name' => 'Parking Slots',
                    'icon' => 'fa fa-table',
                    'link' => '/slots',
                    'permission' => [1],
                    'isMaintenance' => false
                ],
            ]
        ],
    ]
];