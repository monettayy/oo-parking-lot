@extends('layouts.master-verification')

@section('page-content')
    @auth
        <landing-page :_auth="{{ Auth::check() }}"></landing-page>
    @else
        <landing-page></landing-page>
    @endauth
@endsection