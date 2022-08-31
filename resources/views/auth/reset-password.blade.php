@extends('layouts.master-verification')

@section('page-content')
    <reset-password :_user="{{ $user->toJson() }}"></reset-password>
    <app-footer></app-footer>
@endsection