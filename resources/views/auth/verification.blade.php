@extends('layouts.master-verification')
@section('page_title','Register')

@section('page-content')
@if(isset($input['forgot_password']))
    <verification-form :_user="{{ $user->toJson() }}" v-bind="{ _forgotPassword:{{ $input['forgot_password'] }} }"></verification-form>
@else
    <verification-form 
            :_user="{{ $user->toJson() }}"
        ></verification-form>
@endif
    <app-footer></app-footer>
@endsection