$(function () {
   // 监控区域
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
   // ECharts区域
   // 点位图
   (function () {
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
   // 柱形图
   (function () {
      var item = {
         name: "",
         value: 1200,
         // 1. 修改当前柱形的样式
         itemStyle: {
            color: "#254065"
         },
         // 2. 鼠标放到柱子上不想高亮显示
         emphasis: {
            itemStyle: {
               color: "#254065"
            }
         },
         // 3. 鼠标经过柱子不显示提示框组件
         tooltip: {
            extraCssText: "opacity: 0"
         }
      };
      // 1. 实例化对象
      var myChart = echarts.init(document.querySelector(".bar"));
      // 2. 指定配置和数据
      var option = {
         color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1, [
            { offset: 0, color: "greenyellow" }, // 0 起始颜色
            { offset: 1, color: "green" } // 1 结束颜色
         ]
         ),
         tooltip: {
            trigger: "item",
         },
         grid: {
            left: "1%",
            right: "3%",
            bottom: "3%",
            top: "3%",
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            //grid 四条边框的颜色
            // borderColor: "rgba(0, 240, 255, 0.3)"
            borderColor: "greenyellow"

         },
         xAxis: [
            {
               type: "category",
               data: [
                  "上海",
                  "广州",
                  "北京",
                  "深圳",
                  "合肥",
                  "",
                  "......",
                  "",
                  "杭州",
                  "厦门",
                  "济南",
                  "成都",
                  "重庆"
               ],
               axisTick: {
                  alignWithLabel: false,
                  // 把x轴的刻度隐藏起来
                  show: false
               },
               axisLabel: {
                  // color: "#4c9bfd"
                  color: "greenyellow"
               },
               // x轴这条线的颜色样式
               axisLine: {
                  lineStyle: {
                     // color: "rgba(0, 240, 255, 0.3)"
                     color: 'greenyellow'
                     // width: 3
                  }
               },
               splitLine: {
                  lineStyle: {
                     // color: "rgba(0, 240, 255, 0.3)"
                     color: "greenyellow"
                  }
               }
            }
         ],
         yAxis: [
            {
               type: "value",
               axisTick: {
                  alignWithLabel: false,
                  // 把y轴的刻度隐藏起来
                  show: false
               },
               axisLabel: {
                  // color: "#4c9bfd"
                  color: 'greenyellow'
               },
               // y轴这条线的颜色样式
               axisLine: {
                  lineStyle: {
                     // color: "rgba(0, 240, 255, 0.3)"
                     color: "greenyellow"
                     // width: 3
                  }
               },
               // y轴分割线的颜色样式
               splitLine: {
                  lineStyle: {
                     // color: "rgba(0, 240, 255, 0.3)"
                     color: "greenyellow"
                  }
               }
            }
         ],
         series: [
            {
               name: "直接访问",
               type: "bar",
               barWidth: "60%",
               data: [
                  2100,
                  1900,
                  1700,
                  1560,
                  1400,
                  item,
                  item,
                  item,
                  900,
                  750,
                  600,
                  480,
                  240
               ]
            }
         ]
      };
      // 3. 把配置给实例对象
      myChart.setOption(option);
      // 4. 当我们浏览器缩放的时候，图表也等比例缩放
      window.addEventListener("resize", function () {
         // 让我们的图表调用 resize这个方法
         myChart.resize();
      });
   })();
   // 订单
   // 销售额模块
   (function () {
      // 数据
      var data = {
         year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
         ],
         quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
         ],
         month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
         ],
         week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
         ]
      }
      // 1. 实例化对象
      var myChart = echarts.init(document.querySelector(".line"));
      // 2. 指定配置和数据 
      var option = {
         color: ['#00f2f1', '#ed3f35'],
         tooltip: {
            trigger: "axis"
         },
         legend: {
            right: "8%",
            // data: ["预期销售额", "实际销售额"],
            textStyle: {
               color: "#4c9bfd"
            }
         },
         grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
         },

         xAxis: {
            type: "category",
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: { show: false },
            axisLabel: { color: '#4c9bfd' },
            axisLine: { show: false }
         },
         yAxis: {
            type: "value",
            axisTick: { show: false },
            axisLabel: { color: '#4c9bfd' },
            splitLine: {
               lineStyle: {
                  color: '#012f4a' // 分割线颜色
               }
            }
         },
         series: [
            {
               name: '预期销售额',
               type: "line",
               stack: "总量1",
               data: data.year[0],
               smooth: true
            },
            {
               name: '实际销售额',
               type: "line",
               stack: "总量",
               data: data.year[1],
               smooth: true
            }
         ],
      };
      // 3. 把配置和数据给实例对象  
      myChart.setOption(option);
      // 数据切换
      let index = 0
      $('.sales .caption a').on('click', function () {
         index = $(this).index() - 1
         $(this).addClass('active').siblings('a').removeClass('active');
         let type = $(this).attr('data-index');
         option.series[0].data = data[type][0];
         option.series[1].data = data[type][1];
         myChart.setOption(option);
      })
      let atimer = setInterval(function () {
         index++
         if (index > 3) index = 0
         $('.sales .caption a').eq(index).click();
      }, 2000)
      $('.line').hover(
         function () {
            clearInterval(atimer)
         },
         function () {
            clearInterval(atimer)
            atimer = setInterval(function () {
               index++
               if (index > 3) index = 0
               $('.sales .caption a').eq(index).click();
            }, 2000)
         })
   })();
})

