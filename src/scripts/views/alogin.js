var tplLogin = require('../templates/alogin.string');

SPA.defineView('alogin', {
  html: tplLogin,
  //载入插件列表
  //delegated 实现tab事件的绑定
  plugins: ["delegated"],

  /*init: {
  	mySwiper : null
  },

  bindEvents: {
    show: function () {
      mySwiper = new Swiper('#book-swiper');
    }
  }*/
 bindActions: {
    'close': function () {
      this.hide();
    },
    'switch.register':function(){
      SPA.open('register',{
        ani:{
          "name": 'actionSheet',
          "distance": -1
        }
      })
    }
  },
});
