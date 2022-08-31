@extends('layouts.page')
@section('page_title', 'Slot Type Page')

@section('content')
    <slot_types-page 
        :_auth="{{ Auth::user()->toJson() }}"
        >
    </slot_types-page>
@endsection