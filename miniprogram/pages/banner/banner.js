Page({
  data: {
    imgUrls: [
      // 'cloud://qz-915205.717a-qz-915205/images/1.png',
      'cloud://qz-915205.717a-qz-915205/images/2-8.png',
      // 'cloud://qz-915205.717a-qz-915205/images/3.png',
      'cloud://qz-915205.717a-qz-915205/images/4-8.png',
      'cloud://qz-915205.717a-qz-915205/images/5-8.png',
      'cloud://qz-915205.717a-qz-915205/images/9-8.png',
      // 'cloud://qz-915205.717a-qz-915205/images/10-8.png',
      'cloud://qz-915205.717a-qz-915205/images/11-8.png',
      'cloud://qz-915205.717a-qz-915205/images/13.jpg',
      'cloud://qz-915205.717a-qz-915205/images/14.jpg',
      'cloud://qz-915205.717a-qz-915205/images/15.png',
      'cloud://qz-915205.717a-qz-915205/images/16.jpg',
      'cloud://qz-915205.717a-qz-915205/images/17.jpg',
      'cloud://qz-915205.717a-qz-915205/images/18.jpg',
      'cloud://qz-915205.717a-qz-915205/images/19.jpg',
      'cloud://qz-915205.717a-qz-915205/images/21.jpg',
      // 'cloud://qz-915205.717a-qz-915205/images/6.png',
      // 'cloud://qz-915205.717a-qz-915205/images/7.png'
    ],
    audio:null,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    playState:true
  },
  changePlay(){
    if(!this.data.playState){
      this.data.audio.play()
    }else{
      this.data.audio.stop()
    }
    this.setData({
      playState: !this.data.playState
    })
  },
  onShow(){
    var res = wx.getSystemInfoSync()
    let audio = null;
    if (res.platform == 'ios') {
      audio = wx.getBackgroundAudioManager()
    } else {
      audio = wx.createInnerAudioContext();
    }
    audio.title = '起风了';
    audio.src = 'cloud://qz-915205.717a-qz-915205/audio/qifengle.mp3';
    // audio.src = 'cloud://qz-915205.717a-qz-915205/audio/daojianrumeng.mp3';
    audio.play();
    this.setData({
      audio: audio
    })
  },
  callphone(){
    wx.makePhoneCall({
      phoneNumber: '18080882172'
    })
  }
})