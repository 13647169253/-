$(function () {
   (function () {
      $(".monitor .tabs").on("click", "a", function () {
         $(this).addClass("active").siblings("a").removeClass("active");
         $(".monitor .content").eq($(this).index()).show().siblings(".content").hide();
      });
      $('.marquee-view .marquee').each(function (i, e) {
         // let newRos = $(this).children().clone();
         // $(this).append(newRos)
         let newRos = $(e).children().clone();
         $(e).append(newRos)
      })
   })();
})