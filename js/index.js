// IMPORTANT ON ALL PAGES <!-- load bootstrap, navbar and footer -->
$.get('head_links.html', function(response) {
    $('head').append(response);
});
$(function() {
    $("#nav-bar").load("navbar.html").hide();
    $("#custom-footer").load("footer.html").hide();
});

// on document ready
$(document).ready(function() {
    $("#nav-bar").fadeIn()
    $("#custom-footer").fadeIn();
    $(".header_font").slideDown("slow").fadeIn();

    // scroll down to sectio1, button animation
    $("#scroll-down-btn").click(function() {
        $("html, body").animate({ scrollTop: $("#section1").offset().top - 50 },
            "slow"
        );
    });
});

// show animation until page is not loaded
$(window).on('load', function() {
    $(".loader").fadeOut();
});