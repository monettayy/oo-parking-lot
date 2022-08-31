@extends('layouts.master-verification')

@section('page-content')
<div class="main-content bg-theme row align-items-center justify-content-center">
@if(Session::has('flash_message'))
<div class="row">
    <div class="col-lg-12">
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <span class="alert-icon"><i class="fa fa-exclamation-circle"></i></span>
        <span class="alert-text"><strong>Warning!</strong> {{ Session::get('flash_message') }}</span>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    </div>
</div>
@endif
    <verify-otp :_user="{{ $user->toJson() }}"></verify-otp>
</div>
@endsection