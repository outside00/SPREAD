// 마이 뮤직 15 곡 선택 시 하위 체크박스 선택
$(function() {
    var chkList = $("input[name = music]");
    
    $("#chkCtrl").on("click", function(){
      if($(this).is(":checked")) {
        chkList.prop("checked", true);
      } else
        chkList.prop("checked", false);
    });

    $("#chkCtrl").on("click", function() {
        if($(this).is(":checked")) {
            $(".music_list-box-1").css("backgroundColor", "#eaeaea");
        } else {
            $(".music_list-box-1").css("backgroundColor", "#ffffff");
        }
    });

    $("#chkCtrl").on("click", function() {
        if($(this).is(":checked")) {
            $(".music_list-box-2").css("backgroundColor", "#eaeaea");
        } else {
            $(".music_list-box-2").css("backgroundColor", "#ffffff");
        }
    });
});



// 마이 뮤직 한 곡 선택 시 배경색 회색으로 변경
// $(function() {
//     var musicBox1 = $(".music_list-1");
    
//     $(".checkbox").on("click", function() {
//         if($(this).is(":checked")) {
//             $(musicBox1).css("backgroundColor", "#eaeaea");
//         } else {
//             $(musicBox1).css("backgroundColor", "#ffffff");
//         }
//     });
// });



//나의 뮤직에 버튼 보라색 하트 클릭 시 회색 하트로 변경
$(function() {
    $(document).ready(function(){
        var btn1 = $(".btn-1");
        // var btn2 = $(".btn-2");

        $(btn1).hide();

        $(".btn-2").each(function(index, item) {
            console.log (item);
            $(item).addClass('.btn-2' + index).is(function(){
                $(".button").click(function(){
                    $(btn1).hide();
                });
            
                // $(".button").click(function(){
                //     $(btn1).show();
                // });
            });
        });
    });
});



// 마이 뮤직 더보기 접기
$(function() {
    $(".music_list-box-2").hide();

    $(".more").click (function() {
        $(".music_list-box-2").slideToggle(500, "swing");

        if( $("#more-button").text() == '접기 ∧') {
            $("#more-button").text('더보기 ∨');
            } else {
            $("#more-button").text('접기 ∧');
            }
    });
});



// 아티스트 이미지에 마우스 커서를 올릴 시 텍스트가 나타남
$(function() {
    $(".list-artist").on({
        "mouseover":function() {
            $(this).children(".artist_text").css("display", "block");
        },
        "mouseout":function() {
            $(this).children(".artist_text").css("display", "none");
        }
    });
});



// 아티스트 보라색 하트 이미지 클릭 시 아티스트 이미지가 사라짐
$(function() {
    var artist = $(".list");

    $(".list_heart").click (function() {
        $(this).parent(artist).css("display", "none");
    });
});