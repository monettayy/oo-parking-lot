@extends('layouts.page')
@section('page_title', 'Entrances Page')

@section('content')
    <entrances-page 
        :_auth="{{ Auth::user()->toJson() }}"
        >
    </entrances-page>
@endsection