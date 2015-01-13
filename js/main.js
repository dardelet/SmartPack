var screen_height = $(window).height();
$('section').css('min-height', screen_height + 'px');
$(window).on('resize', function() {
    var win = $(this); //this = window
    $('section').css('min-height', win.height + 'px');
});
var language = 'fr-FR';
// setting up the data picker
$('#departure_date').datepicker({
    format: 'dd/mm/yyyy',
    startDate: '+1d',
    clearBtn: true,
    forceParse: true,
    autoclose: true,
    language: language
});

//Init the search box
function initialize_search_box() {

    var input = document.getElementById('destination');
    var searchBox = new google.maps.places.SearchBox(input);
}
google.maps.event.addDomListener(window, 'load', initialize_search_box);
