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

      // ECharts区域
      // 1. 实例化对象  
      var myChart = echarts.init(document.querySelector(".pie"));
      // 2. 指定配置项和数据
      var option = {
         tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
         },
         series: [
            {
               name: "点位模式",
               type: "pie",
               radius: ["10%", "65%"],
               center: ["50%", "50%"],
               roseType: "area",
               color: [
                  "#006cff",
                  "#60cda0",
                  "#ed8884",
                  "#ff9f7f",
                  "#0096ff",
                  "#9fe6b8",
                  "#32c5e9",
                  "#1d9dff"
               ],
               data: [
                  { value: 20, name: "云南" },
                  { value: 26, name: "北京" },
                  { value: 24, name: "山东" },
                  { value: 25, name: "河北" },
                  { value: 20, name: "江苏" },
                  { value: 25, name: "浙江" },
                  { value: 30, name: "四川" },
                  { value: 42, name: "湖北" }
               ],
               label: {
                  fontSize: 12
               },
               labelLine: { length: 8, length2: 8 }
            }
         ]
      };
      // 3. 配置项和数据给我们的实例化对象
      myChart.setOption(option);
      // 浏览器缩放,图标跟谁硕放
      window.addEventListener('resize', function () {
         myChart.resize();
      })
   })();
})


