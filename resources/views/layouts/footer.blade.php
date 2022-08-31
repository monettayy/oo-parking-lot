@auth
<sidebar :_sidebar_items="{{ collect(config('sidebar.items'))->toJson() }}" :_auth="{{ Auth::user()->toJson() }}"></sidebar>
<app-footer></app-footer>
@endauth