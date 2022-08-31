@auth
<div class="app-landing">
    <app-header 
        :_auth="{{ \Auth::user()->toJson() }}" 
        :_sidebar_items="{{ collect(config('sidebar.items'))->toJson() }}">
    </app-header>
</div>
@endauth