$(function() {
    // 出现弹窗
    $(window).scroll(function() {
        if ($(window).scrollTop() > 984) {
        $(".nav_bar").slideDown({
                display: "block"                
            })
        } else {
            $(".nav_bar").slideUp({
                display: "none"
            })
        }
    })
    // 字体变化
    // $(window).scroll(function(){
    //     if ($(window).scrollTop()>984 && $(window).scrollTop()<1500) {
    //         $(".part_on211").css({
    //             "color":"#00B8EC"
    //         })
    //     }else if($(window).scrollTop()>1500 && $(window).scrollTop()<2100){
    //         $(".part_on212").css({
    //             "color":"#00B8EC"
    //         })
    //     }else if ($(window).scrollTop()>2100 && $(window).scrollTop()<2600) {
    //         $(".part_on213").css({
    //             "color":"#00B8EC"
    //         })
    //     }
    //     else if ($(window).scrollTop()>2600 && $(window).scrollTop()<3200) {
    //          $(".part_on214").css({
    //             "color":"#00B8EC"
    //         })
    //     }
    //     else if ($(window).scrollTop()>3200 && $(window).scrollTop()<4000) {
    //          $(".part_on215").css({
    //             "color":"#00B8EC"
    //         })    
    //      }
    // })
    // 
        $(window).scroll(function(){
        if ($(window).scrollTop()>984 && $(window).scrollTop()<1500) {
            $(".part_on21").children().removeClass('active');
            $(".part_on211").addClass('active');
        }else if($(window).scrollTop()>1500 && $(window).scrollTop()<2100){
            $(".part_on21").children().removeClass('active');
            $(".part_on212").addClass('active');
        }else if ($(window).scrollTop()>2100 && $(window).scrollTop()<2600) {
            $(".part_on21").children().removeClass('active');
            $(".part_on213").addClass('active');
        }
        else if ($(window).scrollTop()>2600 && $(window).scrollTop()<3200) {
            $(".part_on21").children().removeClass('active');
            $(".part_on214").addClass('active');
        }
        else if ($(window).scrollTop()>3200 && $(window).scrollTop()<4000) {
            $(".part_on21").children().removeClass('active');
            $(".part_on215").addClass('active');
         }
    })
})
// 点击字体定位到滚动条位置
$(".part_on211").click(function(){
  $(window).scroll(function() {
    $(window).scrollTop()=984;
  })
})
// $(window).scroll(function(event) {
//   /* Act on the event */
//   $(window).scrollTop();
// });
// console.log($(window).scrollTop())
// 鼠标移入视屏播放
$(function(){
    var video1=$("#video11");
   $("#video11").bind("mouseover",function() {
       playVideo();
   })
   function playVideo(){
    video1[0].play();
   }
})
$(function(){
    var video2=$("#video22");
   $("#video22").bind("mouseover",function() {
       playVideo();
   })
   function playVideo(){
    video2[0].play();
   }
})
$(function(){
    var video3=$("#video33");
   $("#video33").bind("mouseover",function() {
       playVideo();
   })
   function playVideo(){
    video3[0].play();
   }
})