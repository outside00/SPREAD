$(function() {
    $("#benefits-2").hide();
    $(".season-ticket1").click(function() { 
        var target = $("#benefits-1").attr("href"); 
        $("html").animate({scrollTop:$(target).offset().top}, 1000, function() {
            $("#benefits-2").hide();
            $("#benefits-1").show();
        });
    });
    
    $(".season-ticket2").click(function() {
        var target = $("#benefits-2").attr("href"); 
        $("html").animate({scrollTop:$(target).offset().top}, 1000, function() {
            $("#benefits-1").hide();
            $("#benefits-2").show();
        });
    });    
})

// $(function() {
//     $("#notice-tab-wrap h4 a").on("click", tabmenu);
//     function tabmenu(e) { // e는 이벤트가 발생된 대상
//         e.preventDefault(); // a의 href 속성값을 막음.
//         var $ts = $(this); // 클릭한  a
//         var $next = $ts.parent().next(); // a 아래 있는 div
//         if($next.is(":hidden")) {
//             $("#notice-tab-wrap h4 a").removeClass("on"); // 전체 a의 class on제거
//             $("#notice-tab-wrap > div:visible").hide(); // 보이는  div 보이게 않게 설정
            
//             $ts.addClass("on"); // 클릭(선택)한 a에 class on 적용
//             $next.show(); // 클릭(선택)한 a의 div 보이기
//         }
//     }
// });
