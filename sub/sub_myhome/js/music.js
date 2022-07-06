// 마이 뮤직 15 곡 선택 시 하위 체크박스 선택
$(function() {
    var chkList = $("input[name = music]");
    
    $("#chkCtrl").on("click", function(){
      if($(this).is(":checked")){
        chkList.prop("checked", true);
      }else
        chkList.prop("checked", false);
    });
});

$(".music_list-1").css("backgroundColor", "#eaeaea")

// 마이 뮤직 한 곡 선택 시 배경색 회색으로 변경 .music_list-1
$(function() {
    var musicBox= $(".music_list-1");
    
    $("#checkbox").on("click", function(){
      if($(".music_list-1").css("backgroundColor", "#eaeaea")){
        musicBox.prop("checked", true);
      }else {
          musicBox.prop("checked", false);
      };
    });
});

// 마이 뮤직 한 곡 선택 시 배경색 회색으로 변경 .music_list-2
$(function() {
    var musicBox= $(".music_list-2");
    
    $("#checkbox").on("click", function(){
      if($(".music_list-2").css("backgroundColor", "#eaeaea")){
        musicBox.prop("checked", true);
      }else {
          musicBox.prop("checked", false);
      };
    });
});

// 마이 뮤직 한 곡 선택 시 배경색 회색으로 변경 .music_list-3
$(function() {
    var musicBox= $(".music_list-3");
    
    $("#checkbox").on("click", function(){
      if($(".music_list-3").css("backgroundColor", "#eaeaea")){
        musicBox.prop("checked", true);
      }else {
          musicBox.prop("checked", false);
      };
    });
});



// .mymusic_button에 button 보라색 하트 좋아요 클릭 시 회색 하트로 변경
$(function() {
    var btn = $("#btn2 img");

    $("#btn2").click(function() {
        btn.attr({"src":"image/myhome/music_list_icon2_1.png"});
    });
});




// 마이 뮤직 더보기 접기
$(function() {
    $(".music_list-box").hide();

    $(".more").click (function() {
        $(".music_list-box").slideToggle(500, "swing");

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
            $(this).child("div.artist_text").css({"display":"block"});
        },
        "mouseout":function() {
            $(this).child("div.artist_text").css({"display":"none"});
        }
    });
});

// window.onload = function() {
//     const artist = document.querySelectorAll(".list-artist");
//     for (let i = 0; i < artist.length; i++) {
//         artist[i].addEventListener("mouseover", textIn);
//         artist[i].addEventListener("mouseout", textOut);

//         function textIn() {
//             const text = document.getElementsByClassName(".artist_text");
//             text.style.display = "block";
//         }
//     }
// }

// 아티스트 보라색 하트 클릭 시 아티스트 이미지가 사라짐
$(function() {
    $(".list_heart").click (function() {
        $(".artist_list").css("display", "none");
    });
});


