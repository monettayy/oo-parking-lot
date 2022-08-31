<div class="header bg-white px-4">
    <div class="container-fluid">
        <div class="header-body">
            @if(Session::has('alert_message'))
            <div class="row">
                <div class="col-lg-12">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <span class="alert-icon"><i class="fa fa-exclamation-circle"></i></span>
                    <span class="alert-text"><strong>Warning!</strong> {{ Session::get('alert_message') }}</span>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                </div>
            </div>
            @endif
        </div>
    </div>
</div>