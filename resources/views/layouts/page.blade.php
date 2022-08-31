@extends('layouts.master')

@section('page-content')
    @include('layouts.nav')
    @include('layouts.header')
    <div class="app-main-panel">
        <div class="app-landing" style="min-height: 79vh;">
            <div class="container-fluid">
                @yield('content')
            </div>
        </div>
    </div>
    @include('layouts.footer')
@endsection