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
  // 订单功能
  (function () {
    var index = 0
    // 1. 准备数据
    var data = {
      day365: { orders: '20,301,987', amount: '99834' },
      day90: { orders: '301,987', amount: '9834' },
      day30: { orders: '1,987', amount: '3834' },
      day1: { orders: '987', amount: '834' }
    }
    // 获取显示 订单数量 容器
    var $h4Orders = $('.order h4:eq(0)')
    // 获取显示 金额数量 容器
    var $h4Amount = $('.order h4:eq(1)')
    $('.order .filter a').on('click', function () {
      // 2. 点击切换激活样式
      index = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      // // 3. 点击切换数据
      let dataset = $(this).attr('data-index')
      var currdata = data[dataset]
      $h4Orders.html(currdata.orders)
      $h4Amount.html(currdata.amount)
    })
    // 4. 开启定时器切换数据
    let htimer = setInterval(function () {
      index++
      if (index > 3) index = 0
      $('.order .filter a').eq(index).click()
    }, 2000)
    // 
    $('.order .filter').hover(
      function () {
        clearInterval(htimer)
      },
      function () {
        clearInterval(htimer)
        htimer = setInterval(function () {
          index++
          if (index > 3) index = 0
          $('.order .filter a').eq(index).click();
        }, 2000)
      })
  })();
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
    }, 3500)
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
        }, 3500)
      })
    window.addEventListener("resize", function () {
      // 让我们的图表调用 resize这个方法
      myChart.resize();
    });
  })();
  // 销售渠道模块 雷达图
  (function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".radar"));
    // 2.指定配置
    var option = {
      tooltip: {
        show: true,
        // 控制提示框组件的显示位置
        position: ["60%", "10%"]
      },
      radar: {
        indicator: [
          { name: "机场", max: 100 },
          { name: "商场", max: 100 },
          { name: "火车站", max: 100 },
          { name: "汽车站", max: 100 },
          { name: "地铁", max: 100 }
        ],
        // 修改雷达图的大小
        radius: "65%",
        shape: "circle",
        // 分割的圆圈个数
        splitNumber: 4,
        name: {
          // 修饰雷达图文字的颜色
          textStyle: {
            color: "#4c9bfd",
          }
        },
        // 分割的圆圈线条的样式
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255, 0.5)"
          }
        },
        splitArea: {
          show: false
        },
        // 坐标轴的线修改为白色半透明
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.5)"
          }
        }
      },
      series: [
        {
          name: "北京",
          type: "radar",
          // 填充区域的线条颜色
          lineStyle: {
            normal: {
              color: "#fff",
              width: 1.5,
              opacity: 0.5
            }
          },
          data: [[90, 19, 56, 11, 34]],
          // 设置图形标记 （拐点）
          symbol: "circle",
          // 这个是设置小圆点大小
          symbolSize: 4,
          // 设置小圆点颜色
          itemStyle: {
            color: "#fff"
          },
          // 让小圆点显示数据
          label: {
            show: true,
            fontSize: 12
          },
          // 修饰我们区域填充的背景颜色
          areaStyle: {
            // color: "rgba(238, 197, 102, 0.6)"
            color: "greenyellow"
          }
        }
      ]
    };
    // 3.把配置和数据给对象
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
      // 让我们的图表调用 resize这个方法
      myChart.resize();
    });
  })();
  // 销售模块 饼形图 半圆形
  (function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".gauge"));
    // 2. 指定数据和配置
    var option = {
      series: [
        {
          name: "销售进度",
          type: "pie",
          radius: ["130%", "150%"],
          center: ['48%', '80%'],
          //是否启用防止标签重叠策略
          // avoidLabelOverlap: false,
          labelLine: {
            normal: {
              show: false
            }
          },
          startAngle: 180,
          hoverOffset: 0,
          data: [{ value: 125, itemStyle: { color: 'greenyellow' } }, { value: 75, itemStyle: { color: '#12274d' } }, { value: 200, itemStyle: { color: 'transparent' } }]
        }
      ]
    };
    // 3. 把数据和配置给实例对象
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
      // 让我们的图表调用 resize这个方法
      myChart.resize();
    });
  })();
  // ECharts使用结束
  // 全国热榜
  (function () {
    var hotData = [
      {
        city: '北京',  // 城市
        sales: '25,179',  // 销售额
        flag: true, //  上升还是下降
        brands: [   //  品牌种类数据
          { name: '可爱多', num: '9,086', flag: true },
          { name: '娃哈哈', num: '8,341', flag: true },
          { name: '喜之郎', num: '7,407', flag: false },
          { name: '八喜', num: '6,080', flag: false },
          { name: '小洋人', num: '6,724', flag: false },
          { name: '好多鱼', num: '2,170', flag: true },
        ]
      },
      {
        city: '河北',
        sales: '23,252',
        flag: false,
        brands: [
          { name: '可爱多', num: '3,457', flag: false },
          { name: '娃哈哈', num: '2,124', flag: true },
          { name: '喜之郎', num: '8,907', flag: false },
          { name: '八喜', num: '6,080', flag: true },
          { name: '小洋人', num: '1,724', flag: false },
          { name: '好多鱼', num: '1,170', flag: false },
        ]
      },
      {
        city: '上海',
        sales: '20,760',
        flag: true,
        brands: [
          { name: '可爱多', num: '2,345', flag: true },
          { name: '娃哈哈', num: '7,109', flag: true },
          { name: '喜之郎', num: '3,701', flag: false },
          { name: '八喜', num: '6,080', flag: false },
          { name: '小洋人', num: '2,724', flag: false },
          { name: '好多鱼', num: '2,998', flag: true },
        ]
      },
      {
        city: '江苏',
        sales: '23,252',
        flag: false,
        brands: [
          { name: '可爱多', num: '2,156', flag: false },
          { name: '娃哈哈', num: '2,456', flag: true },
          { name: '喜之郎', num: '9,737', flag: true },
          { name: '八喜', num: '2,080', flag: true },
          { name: '小洋人', num: '8,724', flag: true },
          { name: '好多鱼', num: '1,770', flag: false },
        ]
      },
      {
        city: '山东',
        sales: '20,760',
        flag: true,
        brands: [
          { name: '可爱多', num: '9,567', flag: true },
          { name: '娃哈哈', num: '2,345', flag: false },
          { name: '喜之郎', num: '9,037', flag: false },
          { name: '八喜', num: '1,080', flag: true },
          { name: '小洋人', num: '4,724', flag: false },
          { name: '好多鱼', num: '9,999', flag: true },
        ]
      }
    ];
    let li = '';
    $.each(hotData, function (i, e) {
      li +=
        `<li>
          <span>${e.city}</span>
            <span>
              ${e.sales}<s class=${e.flag ? 'icon-up' : 'icon-down'}></s>
            </span>
        </li >`
      $(".sup").html(li);

    })
  })()
})