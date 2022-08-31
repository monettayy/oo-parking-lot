import * as $ from 'jquery';

export function show(){
    $("body").addClass('show-loader');
}

export function hide(){
    $("body").removeClass('show-loader');
}