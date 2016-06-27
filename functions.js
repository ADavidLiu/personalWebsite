$(document).ready(function () {
    new WOW().init();

    var date = new Date();
    var year = date.getFullYear();

    $("span.year").text(year);

    $("img.arrow").click(function () {
        $("section.tagline").ScrollTo();
    });

    var linksLive = ["http://www.andresliu.xyz/portfolio/websites/comicastic", "http://www.andresliu.xyz/portfolio/websites/cars", "http://www.andresliu.xyz/portfolio/websites/safari", "http://www.andresliu.xyz/portfolio/websites/community",
    "http://www.andresliu.xyz/portfolio/websites/wedding", 
    "http://www.andresliu.xyz/portfolio/websites/coffee",
    "http://www.andresliu.xyz/portfolio/websites/green"];
    var linksCode = ["#", "#", "#", "#", "#", "#", "#"];
    var images = ["images/portfolio/websites/1-Comicastic.jpg", "images/portfolio/websites/2-Car-Design.jpg",
    "images/portfolio/websites/3-Safari-Reviver.jpg",
    "images/portfolio/websites/4-Community-United.jpg",
    "images/portfolio/websites/5%20Wedding.jpg",
    "images/portfolio/websites/6-Gourmet-Coffee.jpg",
    "images/portfolio/websites/7-GreenGeorgie.jpg"];
    var slider;
    var currentNumber = 1;

    // For the portfolio modal
    $(".article-btn-more img:not('#btn-illustrations')").click(function () {
        $(".portfolio").addClass("portfolio-active");
        setTimeout(function () {
            $(".portfolio-preview").addClass("portfolio-preview-active");
        }, 200);
        // Change images
        slider = setInterval(function () {
            $("img.current").fadeOut("fast", function () {
                if ($("img.current").next().size() > 0) {
                    $("img.current + img").fadeIn("fast").addClass("current");
                    $(".image-wrapper").children(".current").first().removeClass("current");
                    
                    // Change the links
                    $("#linkLive").attr("href", linksLive[currentNumber]);
                    currentNumber++;
                    
                } else {
                    $(".image-wrapper img.current").removeClass("current");
                    $(".image-wrapper img:first-child").addClass("current").fadeIn("fast");
                    
                    // Change the links
                    $("#linkLive").attr("href", linksLive[0]);
                    currentNumber = 1;
                }
            });
        }, 3000);
    });

    $(".portfolio-btn-close").click(function () {
        $(".portfolio-preview").removeClass("portfolio-preview-active");
        setTimeout(function () {
            $(".portfolio").removeClass("portfolio-active");
        }, 100);
        clearInterval(slider);
    });
});