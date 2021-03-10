$(window).scroll(function(){
    var scrolledY = $(window).scrollTop();
    $('header').css('background-position', 'center ' + ((scrolledY)) + 'px');
})

$(window).scroll(function(){
    var scrolledY = $(window).scrollTop();
    $('header').css('background-position', 'center ' + ((scrolledY)) + 'px');
})


// //carousel
// $('.cards').owlCarousel({
//     loop: true,
//     autoplay:true
// });