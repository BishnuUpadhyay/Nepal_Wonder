$(window).scroll(function () {
    if ($(this).scrollTop() > 630) {
        $("nav").addClass("sticky-top");
        $("nav").addClass("nav-background");
        
    }
    else {
        
        $("nav").removeClass("nav-background");
        $("nav").removeClass("sticky-top");
    }
})