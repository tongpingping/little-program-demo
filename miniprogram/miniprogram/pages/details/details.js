var util = require('../../utils/utils')
//获取应用实例
const app = getApp()
Page({
data: {
  showIcon: true,
  triggered:true,
  nowDate: '',
  month:'',
  year:'',
  income:"0.00",
  spending: "0.00",
  obj:{
    generalIncome:'',//总收入
    totalSpending:'',//总支出
    dayList:[
      {
        time:'',
        income:'',
        spending:'',
        detailList:[
          {
            icon:'',
            name:'',
            amount:''
          }
        ]
      }
    ]
  }
},
onLoad: function () {
  var date = util.formatDate(new Date())
  this.setData({
    year: date.year,
    month: date.month,
    nowDate: date.year + "-" + date.month
  })
},
bindDateChange(e) {
  var year = e.detail.value.split("-")[0]
  var month = e.detail.value.split("-")[1]
  this.setData({
    year: year,
    month:month,
    nowDate: e.detail.value
  })
},
refresh(){
      this.onLoad()
      this.setData({
         triggered:false
       })
  },

})