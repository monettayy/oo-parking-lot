<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', 'PageController@loginPage');
Route::post('/login', 'AuthController@login');
Route::post('/logout', 'AuthController@logout');

Route::group(['middleware' => 'authorized'], function($route){
    $route->get('/dashboard', 'PageController@dashboardPage')->middleware('auth.allowed:1|2');

    $route->get('/dashboard-stats', 'ParkingController@dashboardStats');
    $route->post('/park', 'ParkingController@park');
    $route->post('/unpark', 'ParkingController@unpark');

    $route->get('/users', 'UserController@listPage')->middleware('auth.allowed:1');
    $route->get('/users/create', 'UserController@formPage')->middleware('auth.allowed:1');
    $route->get('/users/edit/{id}', 'UserController@formEditPage')->middleware('auth.allowed:1');
    $route->get('/users/list', 'UserController@getList');
    $route->post('/user', 'UserController@saveItem');
    $route->patch('/user/{id}', 'UserController@updateItem');
    $route->delete('/user/{id}', 'UserController@deleteItem');
    
    $route->get('/slots', 'SlotController@listPage')->middleware('auth.allowed:1');
    $route->get('/slots/create', 'SlotController@formPage')->middleware('auth.allowed:1');
    $route->get('/slots/edit/{id}', 'SlotController@formEditPage')->middleware('auth.allowed:1');
    $route->get('/slots/list', 'SlotController@getList');
    $route->post('/slot', 'SlotController@saveItem');
    $route->patch('/slot/{id}', 'SlotController@updateItem');
    $route->delete('/slot/{id}', 'SlotController@deleteItem');
    
    $route->get('/entrances', 'EntranceController@listPage')->middleware('auth.allowed:1');
    $route->get('/entrances/create', 'EntranceController@formPage')->middleware('auth.allowed:1');
    $route->get('/entrances/edit/{id}', 'EntranceController@formEditPage')->middleware('auth.allowed:1');
    $route->get('/entrances/list', 'EntranceController@getList');
    $route->post('/entrance', 'EntranceController@saveItem');
    $route->patch('/entrance/{id}', 'EntranceController@updateItem');
    $route->delete('/entrance/{id}', 'EntranceController@deleteItem');
    
    $route->get('/slot-types', 'SlotTypeController@listPage')->middleware('auth.allowed:1');
    $route->get('/slot-types/create', 'SlotTypeController@formPage')->middleware('auth.allowed:1');
    $route->get('/slot-types/edit/{id}', 'SlotTypeController@formEditPage')->middleware('auth.allowed:1');
    $route->get('/slot-types/list', 'SlotTypeController@getList');
    $route->post('/slot-type', 'SlotTypeController@saveItem');
    $route->patch('/slot-type/{id}', 'SlotTypeController@updateItem');
    $route->delete('/slot-type/{id}', 'SlotTypeController@deleteItem');
    
    $route->get('/vehicle-types', 'VehicleTypeController@listPage')->middleware('auth.allowed:1');
    $route->get('/vehicle-types/create', 'VehicleTypeController@formPage')->middleware('auth.allowed:1');
    $route->get('/vehicle-types/edit/{id}', 'VehicleTypeController@formEditPage')->middleware('auth.allowed:1');
    $route->get('/vehicle-types/list', 'VehicleTypeController@getList');
    $route->post('/vehicle-type', 'VehicleTypeController@saveItem');
    $route->patch('/vehicle-type/{id}', 'VehicleTypeController@updateItem');
    $route->delete('/vehicle-type/{id}', 'VehicleTypeController@deleteItem');
});