$(document).ready(function () {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
            $("#baic1").addClass("moveInLeft");
            $("#baic2").addClass("moveUp");
            $("#baic3").addClass("moveInRight");
        } else {
            $("#baic1").removeClass("moveInLeft");
            $("#baic2").removeClass("moveUp");
            $("#baic3").removeClass("moveInRight");
        }

        if ($(document).scrollTop() > 800) {
            $(".box-what-item-child").addClass("moveUp");
        } else {
            $(".box-what-item-child").removeClass("moveUp");
        }

        if ($(document).scrollTop() > 1500) {
            $(".box-work-part-top-child").addClass("moveInRight");
            $(".box-work-part-bottom-child").addClass("moveInLeft");
        } else {
            $(".box-work-part-top-child").removeClass("moveInRight");
            $(".box-work-part-bottom-child").removeClass("moveInLeft");
        }

        if ($(document).scrollTop() > 3000) {
            $(".box-photo-image-main").addClass("moveZoom");
            $("#bpic1").addClass("moveTopBotLeft");
            $("#bpic2").addClass("moveTopBotRight");
            $("#bpic3").addClass("moveBotTopLeft");
            $("#bpic4").addClass("moveBotTopRight");
        } else {
            $(".box-photo-image-main").removeClass("moveZoom");
            $("#bpic1").removeClass("moveTopBotLeft");
            $("#bpic2").removeClass("moveTopBotRight");
            $("#bpic3").removeClass("moveBotTopLeft");
            $("#bpic4").removeClass("moveBotTopRight");
        }
    })
});

