$(document).ready(function() {

     //滾動滑鼠滾輪時，移動到上一頁、下一頁的效果
    //  n=1
    //  moving=0
    //  $(window).mousewheel(function(e){
    //      $("html,body").stop()
    //      if(moving==0){
    //          moving=1
    //          if(e.deltaY==-1){
    //              if(n<num_li){
    //                  n++
    //              }
    //          }else{
    //              if(n>1){
    //                  n--
    //              }
    //          }
    //      }
    //      $("html,body").animate({"scrollTop":$(".p0"+n).offset().top},function(){moving=0})
    //      console.log(n)
    //  })
     
    
    //  點選右方導覽列時會到指定圖片
    var num_li = $(".navbar-right li").length;

    for (var i = 0; i <= num_li; i++) {
        $(".navbar-right li:eq(" + i + ")").click({
            id: i
        }, function(e) {
            $(".navbar-right li").css("background-color", "#FFF");
            var page = e.data.id + 1;
            $("html,body").animate({
                "scrollTop": $(".p0" + page).offset().top
            })
            $(this).css("background-color", "burlywood");
        })
    }

    //  一進入網頁時，將導覽列垂直置中
    center();

    //  縮放網頁時，重新將導覽列置中
    $(window).resize(function() {
        center();
    })

    //  計算導覽列垂直置中的高度
    function center() {
        var pos = $(window).height() / 2 - $(".navbar-right").height() / 2;
        $(".navbar-right").css("top", pos);
    }
    //根據捲軸的位置改變右方導覽列游標的顏色
    $(window).scroll(function() {
        if ($(window).scrollTop() >= $(".p01").offset().top && $(window).scrollTop() < $(".p02").offset().top) {
            $(".navbar-right li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navbar-right li:eq(0)").css("background-color", "burlywood")
        } else if ($(window).scrollTop() >= $(".p02").offset().top && $(window).scrollTop() < $(".p03").offset().top) {
            $(".navbar-right li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navbar-right li:eq(1)").css("background-color", "burlywood")
        } else if ($(window).scrollTop() >= $(".p03").offset().top && $(window).scrollTop() < $(".p04").offset().top) {
            $(".navbar-right li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navbar-right li:eq(2)").css("background-color", "burlywood")
        } else if ($(window).scrollTop() >= $(".p04").offset().top && $(window).scrollTop() < $(".p05").offset().top) {
            $(".navbar-right li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navbar-right li:eq(3)").css("background-color", "burlywood")
        } else if ($(window).scrollTop() >= $(".p05").offset().top && $(window).scrollTop() < $(".p06").offset().top) {
            $(".navbar-right li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navbar-right li:eq(4)").css("background-color", "burlywood")
        } else if ($(window).scrollTop() >= $(".p06").offset().top) {
            $(".navbar-right li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navbar-right li:eq(5)").css("background-color", "burlywood")
        }
    })
})

$(document).ready(function(){
    $('.your-class').slick({
        centerMode: true,
        centerPadding: '100px',
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 1
            }
          }
        ]
      });

      // 元素 捲動 (匿名函式() {  });
    $(window).scroll(function() {
        
        if ($(window).scrollTop() > 200) {  // 如果 螢幕頂端 > 200

            $(".btn-top").fadeIn(500);       // 顯示按鈕

        } else {                            // 否則

            $(".btn-top").fadeOut(500);      // 隱藏按鈕

        }
    }); 
}); 

var texts = ["找回", "尋找", "激發"];    // 打字 - 陣列
var speed = 250;                                        // 打字速度 - 毫秒
var index = 0;                                          // 索引值 - 從 0 開始
var classname = ".type";                                // 類別名稱
var count = 0;                                          // 文字數量
var wait = 8;                                           // 等待

// 函式 打字
function type() {

    var t = document.querySelector(classname);          // 搜尋元素

    var letter = texts[index].slice(0, count++);        // 切割文字(開始位置，切割數量)

    t.innerHTML = letter;                               // 插入 HTML = 文字

    if (count == texts[index].length + wait) {          // 文字數量 等於 當前文字長度+等待
        index++;                                        // 索引值 +1
        count = 0;                                      // 文字數量 歸零
    }

    if (index == texts.length) {                        // 如果索引值等於長度
        index = 0;                                      // 索引值 歸零
    }

    setTimeout(type, speed);                            // 重複執行方法指定間隔時間
}

document.addEventListener("DOMContentLoded", type());   // DOMContentLoded 網頁載入完成後執行
