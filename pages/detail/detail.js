// pages/detail/detail.js
// 公共路径：https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili
// | 接口名称 | 接口路径 | 备注 |
// | 首页导航 | /navList         |                  |
//   | 首页轮播图 | /swiperList      |                  |
//   | 视频列表 | /videosList      |                  |
//   | 视频详情 | /videoDetail?id  | 需要带上视频的id |
//   | 推荐视频 | /othersList?id   | 需要带上视频的id |
//   | 评论列表 | /commentsList?id | 需要带上视频的id |

Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo:null,
    othersList:[],
    commentData:null
  },
  /**
   * 获取评论列表
   */
  getCommentsList(videoId){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=' + videoId,
      success(res) {
        console.log(res.data);
        if (res.data.code === 0) {
          that.setData({
            commentData: res.data.data.commentData
          })
        }
      }
    })
  },
  /**
   * 获取推荐视频
   */
  getOthersList(videoId){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=' + videoId,
      success(res){
        // console.log(res.data);
        if (res.data.code === 0) {
          that.setData({
            othersList: res.data.data.othersList
          })
        }
      }
    })
  },
  /**
   * 获取视频详情
   */
  getVideoDetail(videoId){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id='+videoId,
      success(res){
        // console.log(res.data);
        if(res.data.code===0){
          that.setData({
            videoInfo:res.data.data.videoInfo
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    let videoId = options.id;
    //获取视频详情
    this.getVideoDetail(videoId);
    //获取推荐视频列表
    this.getOthersList(videoId);
    //获取评论列表
    this.getCommentsList(videoId);
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