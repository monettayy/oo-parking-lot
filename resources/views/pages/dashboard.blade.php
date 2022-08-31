@extends('layouts.page')
@section('page_title', 'Dashboard')

@section('content')
    <dashboard-page 
        :_auth="{{ Auth::user()->toJson() }}"
        :_entrances="{{ $entrances->toJson() }}"
        :_vehicle_types="{{ $vehicle_types->toJson() }}"
        >
    </dashboard-page>
@endsection