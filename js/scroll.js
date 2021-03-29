$(document).ready(function () {
    // Add smooth scrolling to all links
    $(".box-menu-list a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $(".box-menu-list-mobile a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$(document).ready(function () {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $("#icon-mobile").addClass("menu-fixed");
        } else {
            $("#icon-mobile").removeClass("menu-fixed");
        }
    })
});

$(document).ready(function () {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $(".box-header-top").addClass("menu-desktop-fixed");
            $("#box-header-icon").css({"display": "none"});
            $("#box-header-phone").css({"display": "none"});
            $("#myLinks").css({"display": "block", "float": "left", "margin-left": "19%"});
        } else {
            $(".box-header-top").removeClass("menu-desktop-fixed");
            $("#box-header-icon").css({"display": "block"});
            $("#box-header-phone").css({"display": "block"});
            $("#myLinks").css({"display": "none"});
        }
    })
});