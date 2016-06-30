var tplHome = require('../templates/home.string');

SPA.defineView('home', {
  html: tplHome,
  //载入插件列表
  //delegated 实现tab事件的绑定
  plugins: ["delegated",{
    name: 'avalon',
    options: function (vm) {
      vm.bookList = [];
    }
  }],
  
  init: {
  	mySwiper : null,
  	bookListArray: [],
  	vm: null,
  },
  /*// 定义子视图
  modules: [{
    name: 'content', // 子视图的名字，用作后边引用的句柄
    views: ['home', 'special', 'found', 'my', 'login'], // 定义子视图的列表数组
    defaultTag: 'home', // 定义默认视图
    container: '.m-index' // 子视图的容器
  }],*/
  //绑定点击事件
	/*bindActions: {
    'login': function (e, data) {
    	//this.modules.content.launch(data.tag);
    	SPA.open('login');
    }
  },*/
	
  bindEvents: {
    "show": function () {
    	var that = this;
//    mySwiper = new Swiper('#book-swiper',{
//    	//direction: 'vertical',
//    });
      
      // 下拉刷新，上拉加载更多
      var scrollSize = 30;
      var myScroll = this.widgets.bookScroll;
      myScroll.scrollBy(0, -scrollSize);

      var head = $('.head img'),
          topImgHasClass = head.hasClass('up');
      var foot = $('.foot img'),
          bottomImgHasClass = head.hasClass('down');
      myScroll.on('scroll', function () {
          var y = this.y,
              maxY = this.maxScrollY - y;
          if (y >= 0) {
              !topImgHasClass && head.addClass('up');
              return '';
          }
          if (maxY >= 0) {
              !bottomImgHasClass && foot.addClass('down');
              return '';
          }
      });

      myScroll.on('scrollEnd', function () {
          if (this.y >= -scrollSize && this.y < 0) {
              myScroll.scrollTo(0, -scrollSize);
              head.removeClass('up');
          } else if (this.y >= 0) {
              head.attr('src', '/qidian/images/ajax-loader.gif');
              // ajax下拉刷新数据

              $.ajax({
                url: '/api/getBooklist.php',
                data: {
                  rtype: 'refresh'
                },
                success: function (rs) {
                  var newArray = rs.data.concat(that.bookListArray);
                  that.vm.bookList = newArray;
                  that.bookListArray = newArray;
                  myScroll.refresh();
                 
                  myScroll.scrollTo(0, -scrollSize);
                  head.removeClass('up');
                  head.attr('src', '/qidian/images/arrow.png');
                }
              })

              // setTimeout(function () {
              // }, 1000);
          }

          var maxY = this.maxScrollY - this.y;
          var self = this;
          if (maxY > -scrollSize && maxY < 0) {
              myScroll.scrollTo(0, self.maxScrollY + scrollSize);
              foot.removeClass('down')
          } else if (maxY >= 0) {
              foot.attr('src', '/qidian/images/ajax-loader.gif');
              // ajax上拉加载数据

              $.ajax({
                url: '/api/getBooklist.php',
                data: {
                  rtype: 'more'
                },
                success: function (rs) {
                  var newArray = that.bookListArray.concat(rs.data);
                  that.vm.bookList = newArray;
                  that.bookListArray = newArray;
                  myScroll.refresh();

                  myScroll.scrollTo(0, self.y + scrollSize);
                  foot.removeClass('down');
                  foot.attr('src', '/qidian/images/arrow.png');
                }
              });
          }
      })
    },
    'beforeShow': function () {
      var that = this;

      // 获得vm对象
      that.vm = that.getVM();

      $.ajax({
        url: '/api/getBooklist.php',
        type: 'get',
        data:{
          rtype: 'origin'
        },
        success: function (rs) {
          that.vm.bookList = rs.data;
          that.bookListArray = rs.data;
        }
      });
    }
  }
});
