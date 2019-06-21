$(document).ready(function() {

     //滾動滑鼠滾輪時，移動到上一頁、下一頁的效果
     n=1
     moving=0
     $(window).mousewheel(function(e){
         $("html,body").stop()
         if(moving==0){
             moving=1
             if(e.deltaY==-1){
                 if(n<num_li){
                     n++
                 }
             }else{
                 if(n>1){
                     n--
                 }
             }
         }
         $("html,body").animate({"scrollTop":$(".onepage0"+n).offset().top},function(){moving=0})
         console.log(n)
     })
     
    
    //  點選右方導覽列時會到指定圖片
    var num_li = $(".navbar-right li").length;

    for (var i = 0; i <= num_li; i++) {
        $(".navbar-right li:eq(" + i + ")").click({
            id: i
        }, function(e) {
            $(".navbar-right li").css("background-color", "#FFF");
            var page = e.data.id + 1;
            $("html,body").animate({
                "scrollTop": $(".onepage0" + page).offset().top
            })
            $(this).css("background-color", "#43a55f");
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
        if ($(window).scrollTop() >= $(".onepage01").offset().top && $(window).scrollTop() < $(".onepage02").offset().top) {
            $(".navbar-right li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navbar-right li:eq(0)").css("background-color", "#46dd46")
        } else if ($(window).scrollTop() >= $(".onepage02").offset().top && $(window).scrollTop() < $(".onepage03").offset().top) {
            $(".navbar-right li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navbar-right li:eq(1)").css("background-color", "#46dd46")
        } else if ($(window).scrollTop() >= $(".onepage03").offset().top && $(window).scrollTop() < $(".onepage04").offset().top) {
            $(".navbar-right li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navbar-right li:eq(2)").css("background-color", "#46dd46")
        } else if ($(window).scrollTop() >= $(".onepage04").offset().top && $(window).scrollTop() < $(".onepage05").offset().top) {
            $(".navbar-right li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navbar-right li:eq(3)").css("background-color", "#46dd46")
        } else if ($(window).scrollTop() >= $(".onepage05").offset().top) {
            $(".navbar-right li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navbar-right li:eq(4)").css("background-color", "#46dd46")
        }
    })
})