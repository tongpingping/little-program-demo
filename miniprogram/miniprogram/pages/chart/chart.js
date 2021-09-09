// pages/chart/chart.js
import echarts from '../../ec-canvas/echarts'
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    tooltip : {
      trigger: 'axis',
      showContent: true,
      axisPointer: {
        lineStyle: {
          type: "solid"
        }
    },
    backgroundColor: "rgba(0,0,0,0.5)",
    borderColor: "rgba(0,0,0,0.1)",
    textStyle: {
        color: '#fff'
    },
    // formatter: (value) => {
      
    //   return console.log(1);;
    // },
  },
 color: ["#9e9d9d"],
    legend: {
      top: 0,
      right: 35,
      textStyle: {
        color: '#fff',
        fontSize: 10
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['01','02','03','04','05','06','07','08','09'],
      // show: false
      axisLine: {
        lineStyle: {
          color: '#9e9d9d',
          fontSize: 10
        }
      }
    },
      axisTick:{       //y轴刻度线不显示
        show:true
    },
    yAxis: {
      show:false,
      type: 'value',
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed',
        }
      },
      axisLine: {
        show:false,
        lineStyle: {
          show: true,
          color: '#9e9d9d',
          fontSize: 10
        }
      },
      axisTick:{       //y轴刻度线不显示
        show:false
    },
      // show: false
    },
    grid: {
      left: '-3%',
      right: '2%',
      bottom: '10%',
      top:'10%',
      containLabel: true
    },
    series: [{
      data: [10,20,4,5,33,6,1,1,8,6],
      type: 'line',
      itemStyle : {
        normal : {
            lineStyle:{
                width:1,
            },
            borderColor:'gray'
        }
    },
    }],
  };
  chart.setOption(option);
  return chart;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weekList:[1,2,3,4,5,6,7,8,9,10,11,12],
    ec: {
      onInit: initChart
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },
  

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})