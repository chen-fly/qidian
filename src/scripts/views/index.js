var tplIndex = require('../templates/index.string');

SPA.defineView('index', {

  // 装载html模板
  html: tplIndex,

  // 载入插件列表
  // delegated 实现tab事件的绑定
  plugins: ['delegated'],

  // 初始化一些属性和方法
  init: {
    // setFocus: function (e) {
    //   $(e.el).addClass('active').siblings().removeClass('active');
    // }
  },

  // 定义子视图
  modules: [{
    name: 'content', // 子视图的名字，用作后边引用的句柄
    views: ['home', 'special', 'found', 'my', 'alogin', 'bookMore', 'detial'], // 定义子视图的列表数组
    defaultTag: 'detial', // 定义默认视图
    container: '.m-index' // 子视图的容器
  }],

  // 绑定tab 事件
  bindActions: {
    'switch.tabs': function (e, data) {
      // 设置当前 tab 高亮

		  $(e.el).addClass('active').siblings().removeClass('active');

      // 切换子视图
      this.modules.content.launch(data.tag);
    },
    'switch.bookMore': function (e, data) {
      // 切换子视图
      //this.modules.content.launch(data.tag);
      SPA.open('bookMore', {
        ani: {
          //"name": 'actionSheet',
          //"distance": -1
        }
      });
    },

    /*'login': function (e, data) {
      this.modules.content.launch(data.tag);
      console.log("222");
    }*/
    'switch.login': function () {
      SPA.open('alogin', {
        ani: {
          "name": 'actionSheet',
          "distance": -1
        }
      });
    },
    'switch.register': function () {
      SPA.open('register', {
        ani: {
          "name": 'actionSheet',
          "distance": -1
        }
      });
    }
  },

  // 绑定视图的事件
  bindEvents: {
    beforeShow: function () {
      // console.log('beforeShow');
    },
    show: function () {
      // console.log('show');
    }
  }
});
