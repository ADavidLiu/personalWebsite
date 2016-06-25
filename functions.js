$(document).ready(function () {
    new WOW().init();
    
    var date = new Date();
    var year = date.getFullYear();
    
    $("span.year").text(year);
    
    $("img.arrow").click(function () {
        $("section.tagline").ScrollTo();
    });
    
    $(".article-btn-more img").click(function () {
        $(".portfolio").addClass("portfolio-active");
    });
    
    $(".portfolio-btn-close").click(function () {
        $(".portfolio").removeClass("portfolio-active");
    });
});