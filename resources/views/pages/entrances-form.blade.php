@extends('layouts.page')
@section('page_title', 'Entrances Form')

@section('content')
    @if(isset($entrance))
        <entrances-form 
            :_auth="{{ Auth::user()->toJson() }}"
            :_entrance="{{ $entrance->toJson() }}"
            >
        </entrances-form>
    @else
        <entrances-form 
            :_auth="{{ Auth::user()->toJson() }}"
            >
        </entrances-form>
    @endif
@endsection