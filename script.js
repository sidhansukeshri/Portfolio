$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        $("html").css("scrollBehavior", "auto");
    });

    $(".navbar .menu li a").click(function () {
        $("html").css("scrollBehavior", "smooth");
    });

    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: [
            "Intrapreneur",
            "Fullstack Developer",
            "Software Developer",
            "Python Developer",
            "Business Developer",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed = new Typed(".typing-2", {
        strings: [
            "Intrapreneur",
            "Fullstack Developer",
            "Software Developer",
            "Python Developer",
            "Business Developer",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    });

    $("#contactForm").submit(function (event) {
        event.preventDefault();

        const name = $("#name").val();
        const email = $("#email").val();
        const subject = $("#subject").val();
        const message = $("#message").val();

        const formData = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };

        $.ajax({
            url: "send_email.php", // Replace with your server-side script
            type: "POST",
            data: formData,
            success: function (response) {
                $("#statusMessage").html(response);
            },
            error: function (error) {
                console.error("Error sending the message: " + error);
            },
        });
    });

    document.cookie = "myCookie=myValue; SameSite=None; Secure";
});
