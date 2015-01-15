var screen_height = $(window).height();

$('section').css('min-height', screen_height + 'px');
var message_newHeight=(parseInt($('#row1').css('height'),10) -15)+"px";
$('#message2').css('min-height',message_newHeight);

$(window).on('resize', function() {
    var win = $(this); //this = window
    $('section').css('min-height', win.height + 'px');
    var message_newHeight=(parseInt($('#row1').css('height'),10) -15)+"px";
    $('#message2').css('min-height',message_newHeight);
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