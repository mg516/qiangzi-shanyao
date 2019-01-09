Page({
  data: {
    imgUrls: [
      // 'cloud://qz-915205.717a-qz-915205/images/1.png',
      'cloud://qz-915205.717a-qz-915205/images/2-8.png',
      // 'cloud://qz-915205.717a-qz-915205/images/3.png',
      'cloud://qz-915205.717a-qz-915205/images/4-8.png',
      'cloud://qz-915205.717a-qz-915205/images/5-8.png',
      'cloud://qz-915205.717a-qz-915205/images/9-8.png',
      'cloud://qz-915205.717a-qz-915205/images/10-8.png',
      'cloud://qz-915205.717a-qz-915205/images/11-8.png',
      'cloud://qz-915205.717a-qz-915205/images/13.jpg',
      'cloud://qz-915205.717a-qz-915205/images/14.jpg',
      'cloud://qz-915205.717a-qz-915205/images/15.png',
      // 'cloud://qz-915205.717a-qz-915205/images/6.png',
      // 'cloud://qz-915205.717a-qz-915205/images/7.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    playState:true
  },
  changePlay(){
    if(!this.data.playState){
      this.audio.play()
    }else{
      this.audio.stop()
    }
    this.setData({
      playState: !this.data.playState
    })
  },
  onShow(){
    var res = wx.getSystemInfoSync()
    if (res.platform == 'ios') {
      this.audio = wx.getBackgroundAudioManager()
    } else {
      this.audio = wx.createInnerAudioContext();
    }
    this.audio.src = 'cloud://qz-915205.717a-qz-915205/audio/daojianrumeng.mp3';
    this.audio.play();
  }
})