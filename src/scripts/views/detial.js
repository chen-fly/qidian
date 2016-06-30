var tplDetial = require('../templates/detial.string');

SPA.defineView('detial', {
  html: tplDetial,
  //载入插件列表
  //delegated 实现tab事件的绑定
  plugins: ["delegated",{
    name: 'avalon',
    options: function (vm) {
      vm.bookMoreList = [];
    }
  }],

  init: {
  	mySwiper : null,
    //暂时无用
  	bookListArray: [],
  	vm: null,
  },
  bindActions: {
    'exit': function (e, data) {
      // 关闭视图
      this.hide();
    }
  },
  bindEvents: {
    "show": function () {

      // 下拉刷新，上拉加载更多
      var scrollSize = 30;
      var myScroll = this.widgets.detialScroll;
      myScroll.scrollBy(0, -scrollSize);
      //var y0 = myScroll.y;

      var head = $('.detialHead');
      myScroll.on('scroll', function () {
          var y1 = this.y;
          console.log($(head).offsetHeight);
          //$(head).css({heigth:})
          /*if (y >= 0) {
              !topImgHasClass && head.addClass('up');
              return '';
          }
          if (maxY >= 0) {
              !bottomImgHasClass && foot.addClass('down');
              return '';
          }*/
      });
    }

  }
});
