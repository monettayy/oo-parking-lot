import * as $ from 'jquery';

export function openSidebar(){
    $("body").removeClass("g-sidenav-hidden");

    $("body").addClass("nav-open");
    $("body").addClass("g-sidenav-show");
    $("body").addClass("g-sidenav-pinned");
    var div = '<div class="bodyClick"></div>'
    $(div).appendTo("body").on('click',function(){
        hideSidebar();
    });
}

function hideSidebar(){
    $("body").removeClass("nav-open");
    $("body").removeClass("g-sidenav-show");
    $("body").removeClass("g-sidenav-pinned");

    $("body").addClass("g-sidenav-hidden");
    $(".bodyClick").remove();
}