@extends('layouts.page')
@section('page_title', 'Vehicle Type Form')

@section('content')
    @if(isset($vehicle_type))
        <vehicle_types-form 
            :_auth="{{ Auth::user()->toJson() }}"
            :_vehicle_type="{{ $vehicle_type->toJson() }}"
            :_slot_types="{{ $slot_types->toJson() }}"
            >
        </vehicle_types-form>
    @else
        <vehicle_types-form 
            :_auth="{{ Auth::user()->toJson() }}"
            :_slot_types="{{ $slot_types->toJson() }}"
            >
        </vehicle_types-form>
    @endif
@endsection