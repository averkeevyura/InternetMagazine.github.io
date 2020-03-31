$(document).ready(function(){
    $('.box-slider').slick({
        arrows:false,
        dots:true,
        slidesToShow: 1
    });
    
    $('.slider-products').slick({
        arrows:true,
        dots:false,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});