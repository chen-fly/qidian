var tplFound = require('../templates/found.string');

SPA.defineView('found', {
  html: tplFound,
  //载入插件列表
  //delegated 实现tab事件的绑定
  /*plugins: ["delegated"],
  
  init: {
  	mySwiper : null
  },

  bindEvents: {
    show: function () {
      mySwiper = new Swiper('#book-swiper');
    }
  }*/
});
