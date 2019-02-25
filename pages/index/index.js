
// 公共路径：https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili
// | 接口名称 | 接口路径 | 备注 |
// | 首页导航 | /navList         |                  |
//   | 首页轮播图 | /swiperList      |                  |
//   | 视频列表 | /videosList      |                  |
//   | 视频详情 | /videoDetail?id  | 需要带上视频的id |
//   | 推荐视频 | /othersList?id   | 需要带上视频的id |
//   | 评论列表 | /commentsList?id | 需要带上视频的id |

//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 首页导航数据
    navList: [],
    // 当前选中的导航按钮
    currentIndex: 0,
    //轮播图数据
    swiperList: [],
    //视频数据
    videosList: []
  },
  /**
   * 获取视频列表数据
   */
  getVideoList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res){
        // console.log(res.data)
        if(res.data.code===0){
          that.setData({
            videosList: res.data.data.videosList
          })
        }
      }
    })
  },
  /**
   * 获取轮播图数据
   */
  getSwiperList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res){
        // console.log(res.data);
        if(res.data.code === 0){
          that.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    })
  },

  /**
   * 获取首页的导航数据
   */
  getNavList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success(res) {
        // console.log(res.data.data);
        if(res.data.code === 0){
          that.setData({
            navList : res.data.data.navList
          })
        }
      }
    })
  },
  /**
   * 点击导航按钮
   */
  activeNav (e){
    console.log(e.target.dataset);
    this.setData({
      currentIndex:e.target.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1 获取首页导航数据
    this.getNavList()
    // 2 获取轮播图数据
    this.getSwiperList()
    // 3 获取视频数据
    this.getVideoList()
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
