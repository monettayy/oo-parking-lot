@extends('layouts.page')
@section('page_title', 'Users Page')

@section('content')
    <users-page 
        :_auth="{{ Auth::user()->toJson() }}"
        >
    </users-page>
@endsection