@extends('layouts.page')
@section('page_title', 'Vehicle Type Page')

@section('content')
    <vehicle_types-page 
        :_auth="{{ Auth::user()->toJson() }}"
        >
    </vehicle_types-page>
@endsection