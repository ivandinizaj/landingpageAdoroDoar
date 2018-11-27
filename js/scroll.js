"use strict";
$(document).ready(function(){
    $("nav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').stop().animate({
                scrollTop: $(hash).offset().top - 50
            }, 1000, function(){
            });
            return false;
        }
    });
});