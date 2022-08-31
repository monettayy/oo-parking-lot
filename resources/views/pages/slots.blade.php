@extends('layouts.page')
@section('page_title', 'Slots Page')

@section('content')
    <slots-page 
        :_auth="{{ Auth::user()->toJson() }}"
        >
    </slots-page>
@endsection