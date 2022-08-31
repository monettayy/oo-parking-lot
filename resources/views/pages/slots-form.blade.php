@extends('layouts.page')
@section('page_title', 'Slots Form')

@section('content')
    @if(isset($slot))
        <slots-form 
            :_auth="{{ Auth::user()->toJson() }}"
            :_slot_types="{{ $slot_types->toJson() }}"
            :_entrances="{{ $entrances->toJson() }}"
            :_slot="{{ $slot->toJson() }}"
            >
        </slots-form>
    @else
        <slots-form 
            :_auth="{{ Auth::user()->toJson() }}"
            :_slot_types="{{ $slot_types->toJson() }}"
            :_entrances="{{ $entrances->toJson() }}"
            >
        </slots-form>
    @endif
@endsection