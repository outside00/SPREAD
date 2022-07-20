// main-background //
setInterval(function() {
    $(".p-cir, .p-cross, .wh-cir2, .wh-cir4, .wh-cross2, .wh-line2").animate({marginLeft:"30px"}, 1500);
    $(".p-cir, .p-cross, .wh-cir2, .wh-cir4, .wh-cross2, .wh-line2").animate({marginLeft:0}, 1500);
}, 3000);
setInterval(function() {
    $(".p-cir2, .p-line, .wh-cir, .wh-cir3, .wh-cross, .wh-line,").animate({marginTop:"30px"}, 1500);
    $(".p-cir2, .p-line, .wh-cir, .wh-cir3,.wh-cross, .wh-line,").animate({marginTop:0}, 1500);
}, 3000);
 

// scroller-wrap //
setInterval(function() {
    $(".scroll").animate({left:"-240px"}, 2000, function() {
    $(".scroll").append($(".scroll li:first-child")).css({"left":"0"});
    });
}, 1000);


// phone-album // 
setInterval(function() {
    $(".left-album img").animate({
        marginBottom: '0px',
        width: '550px',
        opacity: 1 
    }, 2000)
    .animate({
        marginBottom: '0px',
        width: "450px",
        opacity: 0.2
    }, 2000)
}, 2000);

setInterval(function() {
    $(".right-album img").animate ({
        marginBottom: '0px',
        width: '550px',
        opacity: 1 
    }, 2000)
    .animate({
        marginBottom: '0px',
        width: '450px',
        opacity: 0.2
    }, 2000)
}, 2000);


// phone-icon //
setInterval(function() {
    $(".left-icon").animate({marginTop:"10px"}, 1000);
    $(".left-icon").animate({marginTop:0}, 1000);
}, 200);

setInterval(function() {
    $(".right-icon").animate({marginTop:0}, 1000);
    $(".right-icon").animate({marginTop:"20px"}, 1000);
}, 2000);
