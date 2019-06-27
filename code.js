$(document).ready(function () {

    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

});


ScrollReveal().reveal('.headline');



$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000, 'linear');
});