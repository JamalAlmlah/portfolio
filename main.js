$(function() {
    var btn = $('#back-to-top-button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 150) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '150');
    });

    $(".nav-item").on('click', function() {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    })

    $(window).scroll(function() {

        let scroll = $(window).scrollTop();

        let header = $("header")[0].getBoundingClientRect();
        let navbarSection = $("#navbar")[0].getBoundingClientRect();
        let aboutSection = $("#about")[0].getBoundingClientRect();
        let fillerSection = $("#filler-section")[0].getBoundingClientRect();
        let portfolioSection = $("#portfolio")[0].getBoundingClientRect();
        let contactSection = $("#contact")[0].getBoundingClientRect();

        if (scroll < header.bottom) {
            $("#navbar").removeClass("fixed-top");
        }
        if (scroll >= navbarSection.bottom) {
            $("#navbar").addClass("fixed-top");
        }
        if (scroll >= aboutSection.top + 100) {
            $(".nav-item").removeClass("active");
            $("#navbar > ul > li:nth-child(1)").addClass("active");
        }
        if (scroll >= fillerSection.top + 100) {
            $(".nav-item").removeClass("active");
            $("#navbar > ul > li:nth-child(2)").addClass("active");
        }
        if (scroll >= portfolioSection.top + 100) {
            $(".nav-item").removeClass("active");
            $("#navbar > ul > li:nth-child(3)").addClass("active");
        }
        if (scroll >= contactSection.bottom) {
            $(".nav-item").removeClass("active");
            $("#navbar > ul > li:nth-child(4)").addClass("active");
        }
    });

    $("#send-message").click(function() {
        let name = $("#contact-name").val();
        let email = $("#contact-email").val();
        let message = $("#contact-message").val();

        if (name != "" && email != "" && message != "") {
            Swal.fire(
                'Success',
                'Your message has been sent.',
                'success'
            )

            $("#contact-name").val(" ");
            $("#contact-email").val(" ");
            $("#contact-message").val(" ");
        }
    });

    AOS.init();
});