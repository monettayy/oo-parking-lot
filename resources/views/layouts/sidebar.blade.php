<!-- Sidenav -->
@auth
    <sidebar 
        :_auth="{{ Auth::user()->toJson() }}" 
        :_sidebar_items="{{ collect(config('sidebar.items'))->toJson() }}">
    </sidebar>
@endauth