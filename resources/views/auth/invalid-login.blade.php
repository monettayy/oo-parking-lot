@extends('layouts.master-verification')
@section('page_title','Invalid Login Attempt')

@section('page-content')
<div id="app">
  <div class="app-landing">
    <app-navbar :hide_buttons="true"></app-navbar>
  </div>

  <div class="bg-app d-flex align-items-center justify-content-center p-2"  style="min-height:85vh;border-radius:0 !important;">
      <!-- Page content -->
      <div class="container-fluid py-4 text-center col-lg-6 col-md-6">
        <div class="card">
          <div class="card-header pb-2">
            <h1 class="text-danger"> Invalid Login Attempt!</h1>
          </div>
          <div class="card-body pt-2">
            <h2 class="text-dark">
              Your account has no access to login. Please contact your laboratory admin regarding this message.
            </h2>
            <a href="/login" class="btn btn-primary mt-4 btn-lg">
              Back to Login
            </a>
          </div>
        </div>
      </div>
  </div>

  <app-footer></app-footer>
</div>
@endsection