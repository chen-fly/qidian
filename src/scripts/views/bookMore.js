var tplBookMore = require('../templates/bookMore.string');

SPA.defineView('bookMore', {
  html: tplBookMore,
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

    },
    'beforeShow': function () {
      var that = this;

      // 获得vm对象
      that.vm = that.getVM();

      $.ajax({
        url: '/api/getBookMore.php',
        type: 'get',
        data:{
          rtype: 'origin'
        },
        success: function (rs) {
          that.vm.bookMoreList = rs.data;
          //that.bookListArray = rs.data;
        }
      });
    }
  }
});
