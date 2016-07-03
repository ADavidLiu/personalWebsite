$(document).ready(function () {
    new WOW().init();

    var date = new Date();
    var year = date.getFullYear();

    $("span.year").text(year);

    $("img.arrow").click(function () {
        $("section.tagline").ScrollTo();
    });
    
    var footer = $("footer");
    var heart = $("footer span.heart");
    
    footer.hover(function () {
        heart.css("color", "#c0392b");
    }, function () {
        heart.css("color", "inherit");
    });

    var linksLive = ["http://www.andresliu.xyz/portfolio/websites/comicastic", "http://www.andresliu.xyz/portfolio/websites/cars", "http://www.andresliu.xyz/portfolio/websites/safari", "http://www.andresliu.xyz/portfolio/websites/community",
    "http://www.andresliu.xyz/portfolio/websites/wedding",
    "http://www.andresliu.xyz/portfolio/websites/coffee",
    "http://www.andresliu.xyz/portfolio/websites/green"];
    var linksCode = ["https://github.com/ADavidLiu/Comicastic", "https://github.com/ADavidLiu/Car-design", "https://github.com/ADavidLiu/Safari", "https://github.com/ADavidLiu/Community-united", "https://github.com/ADavidLiu/Wedding", "https://github.com/ADavidLiu/Gourmet-coffee", "https://github.com/ADavidLiu/Green-georgie"];
    var images = ["images/portfolio/websites/1-Comicastic.jpg", "images/portfolio/websites/2-Car-Design.jpg",
    "images/portfolio/websites/3-Safari-Reviver.jpg",
    "images/portfolio/websites/4-Community-United.jpg",
    "images/portfolio/websites/5%20Wedding.jpg",
    "images/portfolio/websites/6-Gourmet-Coffee.jpg",
    "images/portfolio/websites/7-GreenGeorgie.jpg"];
    var slider;
    var currentNumber = 1;

    function changeLinks(index) {
        $("#linkLive").attr("href", linksLive[index]);
        $("#linkCode").attr("href", linksCode[index]);
    }

    function changeImage() {
        $("img.current + img").fadeIn("fast").addClass("current");
        $(".image-wrapper").children(".current").first().removeClass("current");
    }

    function loopSlider() {
        $(".image-wrapper img.current").removeClass("current");
        $(".image-wrapper img:first-child").addClass("current").fadeIn("fast");
    }

    function loopIndicators() {
        $(".indicators .indicators-bullet.bullet-active").removeClass("bullet-active");
        $(".indicators .indicators-bullet").first().addClass("bullet-active");
    }

    function changeIndicators() {
        $(".indicators .indicators-bullet.bullet-active").parent().next().children().addClass("bullet-active");
        $(".indicators .indicators-bullet.bullet-active").first().removeClass("bullet-active");
    }

    function resetSlider() {
        loopSlider();
        changeLinks(0);
        loopIndicators();
        currentNumber = 1;
    }

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

                    changeImage();
                    changeLinks(currentNumber);
                    changeIndicators();

                    if (currentNumber < 7) {
                        currentNumber++;
                    } else {
                        currentNumber = 6;
                    }


                } else {
                    resetSlider();
                }
            });
        }, 3000);

        // Change image on indicator click
        $(".indicators li").click(function () {
            clearInterval(slider);
            var numItem = $(this).parent().children().index(this);
            $(".indicators .indicators-bullet.bullet-active").removeClass("bullet-active");
            $(this).children().addClass("bullet-active");
            $("img.current").fadeOut("fast").removeClass("current");
            $(".image-wrapper img:nth-child(" + (numItem + 1) + ")").fadeIn("fast").addClass("current");
            changeLinks(numItem);
            currentNumber = numItem;
        });

    });

    $(".portfolio-btn-close").click(function () {
        $(".portfolio-preview").removeClass("portfolio-preview-active");
        setTimeout(function () {
            $(".portfolio").removeClass("portfolio-active");
        }, 100);
        setTimeout(function () {
            clearInterval(slider);
            resetSlider();
        }, 200);
    });
});