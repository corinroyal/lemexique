var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function scrollHeader() {
    // Has scrolled class on header
    var zvalue = $(document).scrollTop();
    if ( zvalue > 75 )
        $("#header").addClass("scrolled");
    else
        $("#header").removeClass("scrolled");
}

jQuery(document).ready(function($){

    // ON SCROLL EVENTS
    if (!isTouch){
        $(document).scroll(function() {
            scrollHeader();
        });
    };

    // TOUCH SCROLL
    $(document).on({
        'touchmove': function(e) {
            scrollHeader(); // Replace this with your code.
        }
    });

    //Smooth scroll to top
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
    // Responsive Menu

});

jQuery(function($) {

$('.slider').sss({
slideShow : false, // Set to false to prevent SSS from automatically animating.
startOn : 0, // Slide to display first. Uses array notation (0 = first slide).
transition : 400, // Length (in milliseconds) of the fade transition.
speed : 3500, // Slideshow speed in milliseconds.
showNav : true // Set to false to hide navigation arrows.
});
});
