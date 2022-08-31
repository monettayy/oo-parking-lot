@extends('layouts.page')
@section('page_title', 'Slot Type Form')

@section('content')
    @if(isset($slot_type))
        <slot_types-form 
            :_auth="{{ Auth::user()->toJson() }}"
            :_slot_type="{{ $slot_type->toJson() }}"
            >
        </slot_types-form>
    @else
        <slot_types-form 
            :_auth="{{ Auth::user()->toJson() }}"
            >
        </slot_types-form>
    @endif
@endsection