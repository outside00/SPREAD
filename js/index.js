// $("#main-left").click(function() {
//     $(".title-music-flexbox").animate({left:"-936px"}, 500, function() {
//         $(".title-music-flexbox").append($(".title-music-flexbox.active")).css({left:0});
//     }, 2000);
// });

// $("#main-left").click(function() {
//     $(".title-music-flexbox").append($(".title-music-flexbox.active")).css({left:"-936px"}).animate({left:0}, 500);
// });
// $("#prev").click(function() {
//     $(".ai-flex-box").animate({left:"-168"}, 500, function() {
//         $(".ai-flex-box").append($(".ai-playlist_1:first-child")).css({left:0});
//     });
// });

// $('#main-prev').click(function() {
//     var currentSlide = $('.title-music-flexbox.active');
//     var nextSlide = currentSlide.next();

//     currentSlide.fadeOut(300).removeClass('active');
//     nextSlide.fadeIn(300).addClass('active');

//     if(nextSlide.length == 0) {
//         $(".title-music-flexbox").first().fadeIn(300).addClass('active');
//     }
// });

$(function() {
    // 메인 슬라이드
    $("#left").click(function() {
        $(".main-slide-flexbox").prepend($(".title-music-flexbox:last")).css({left:"-936px"}).animate({left:0}, 500);
    });

    $("#right").click(function() {
        $(".main-slide-flexbox").append($(".title-music-flexbox:first")).css({left:"-936px"}).animate({left:0}, 500);
    })

    setInterval(function() {
        $(".main-slide-flexbox").append($(".title-music-flexbox:first")).animate({left:0}, 500);
    }, 3000);

    $("#ai-prev").click(function() {
        $(".ai-flex-box").prepend($(".ai-playlist_1:last")).css({left:"-168px"}).css({left:0}, 500);
    });

    $("#ai-next").click(function() {
        $(".ai-flex-box").append($(".ai-playlist_1:first")).css({left:"-168px"}).css({left:0}, 500);
    });
})