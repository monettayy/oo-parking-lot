@extends('layouts.master-verification')
@section('page_title','Login')

@section('page-content')
<div id="app">
  <div class="app-landing">
    <app-navbar :hide_buttons="true"></app-navbar>
  </div>

  <div class="bg-app d-flex align-items-center justify-content-center p-2"  style="min-height:70vh;border-radius:0 !important;">
      <!-- Page content -->
      <div class="container-fluid py-4">
        <div class="row justify-content-center">
          <div class="col-xl-4 col-lg-5 col-md-7">
            <div class="card bg-primary border-0 mb-0 login-container bg-white">
              <span class="login-logo text-center p-2 mt-0">
                <img src="/icons/ico-dark.png" width="250">
              </span>
              <div class="card-body bg-white py-lg-4 px-lg-5">
                <h3 class="text-center mb-2 font-weight-bold">
                Log in your account
                </h3>
                @if(Session::has('flash_message'))
                <h6 class="text-danger text-center mb-2 mt-2">{{ Session::get('flash_message') }}</h6>
                @endif
                <form role="form" role="form" method="POST" action="{{ url('/login') }}" class="px-3">
                  @csrf
                  <div class="form-group mb-3 ">
                    <div class="input-group input-group-merge input-group-alternative">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="ni ni-single-02"></i></span>
                      </div>
                      <input class="form-control" placeholder="Username" type="text" name="username">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group input-group-merge input-group-alternative">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                      </div>
                      <input class="form-control" placeholder="Password" type="password" name="password">
                    </div>
                  </div>
                  <div class="row mx-0 justify-content-end">
                    <button type="submit" class="btn btn-primary btn-lg my-4 col-md-5 col-sm-12">Log In</button>
                  </div>


                </form>
                <!-- <div  class="px-3">
                  <div class="row mt-3">
                    <div class="col-12 text-center">
                      <h4 style="font-weight: normal;"><a href="/forgot-password" class="text-primary">Forgot password?</a></h4>
                    </div>
                  </div>
                  <hr>
                  <div class="row mt-3">
                    <div class="col-12 text-center">
                      <h4 style="font-weight: normal;">Not yet registered?</h4>
                    </div>
                  </div>
                  <div class="row mx-0 justify-content-end">
                    <button class="btn btn-outline-primary btn-lg my-4 col-md-5 col-sm-12"><a href="/register" class="text-primary">Register</a></button>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

  <app-footer></app-footer>
</div>
@endsection