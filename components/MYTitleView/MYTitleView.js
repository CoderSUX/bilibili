// components/MYTitleView/MYTitleView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tempFilePath:"../../images/user.jpg"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    search(){
      console.log("点击了搜索按钮")
      wx.showModal({
        title:"搜索",
        content:"搜索信息中"
      })
    },
    /**
     * 点击用户头像更换按钮
     */
    changeUserIcon (e){
      let that = this;
      wx.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: function (res) {
          console.log(res);
          that.setData({
            tempFilePath:res.tempFilePaths[0]
          })
        },
      })
    },
    /**
     * 点击下载App
     */
    downloadApp(){
      wx.navigateTo({
        url: '../../pages/logs/logs'
      })
    }
  }
})
