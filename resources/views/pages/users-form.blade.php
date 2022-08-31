@extends('layouts.page')
@section('page_title', 'Users Form')

@section('content')
    @if(isset($user))
        <users-form 
            :_auth="{{ Auth::user()->toJson() }}"
            :_roles="{{ $roles->toJson() }}"
            :_entrances="{{ $entrances->toJson() }}"
            :_user="{{ $user->toJson() }}"
            >
        </users-form>
    @else
        <users-form 
            :_auth="{{ Auth::user()->toJson() }}"
            :_roles="{{ $roles->toJson() }}"
            :_entrances="{{ $entrances->toJson() }}"
            >
        </users-form>
    @endif
@endsection