// IMPORTANT ON ALL PAGES <!-- load bootstrap, navbar and footer -->
$.get('head_links.html', function(response) {
    $('head').append(response);
});
$(function() {
    $("#nav-bar").load("navbar.html").hide();
    $("#custom-footer").load("footer.html").hide();
});

$(document).ready(function() {
    $("#nav-bar").fadeIn()
    $("#custom-footer").fadeIn()
});