var tplSpecial = require('../templates/special.string');

SPA.defineView('special', {
  html: tplSpecial,
  //载入插件列表
  //delegated 实现tab事件的绑定
 plugins: ["delegated",{
    name: 'avalon',
    options: function (vm) {
      vm.thematicListMan = [];
      vm.thematicListManBook = [];
      vm.thematicListWoman = [];
      vm.thematicListWomanBook = [];
    }
  }],
  
  init: {
  	specialAutoSwiper : null,
  	specialAuto2Swiper : null,
  	specialSexSwiper : null,
  	vm:null,
  	bookArrayMan: [],
  	bookArrayWoman: [],
  	formatData: function (arr) {
      var tempArr = [];
      for (var i = 0; i < arr.length; i++) {
        tempArr[i] = [];
        tempArr[i].push(arr[i].book);
      }
      console.log(tempArr);
      return tempArr;
    }
  },
  
  
  bindActions: {
    'switch.tabs.special': function (e, data) {
    	//顶部标签点击切换，子模块视图跟着切换
      specialSexSwiper.slideTo($(e.el).index());
      $(e.el).addClass('active').siblings().removeClass('active');
    }
  },

  bindEvents: {
    "show": function () {
      specialAutoSwiper = new Swiper('#special-auto-swiper',{
      	autoplay: 2000,
      	loop: true
      });
      specialAuto2Swiper = new Swiper('#special-auto2-swiper',{
      	autoplay: 2000,
      	loop: true
      });
      specialSexSwiper = new Swiper("#special-sex-swiper",{
      	loop: false,
      	//子模块滑动，顶部标签跟着切换
      	onSlideChangeStart: function (swiper) {
          var index = swiper.activeIndex;
          var $lis = $('.headerNav span');
          $($lis.eq(index)).addClass('active').siblings().removeClass('active');
        }
      });
    },
    "beforeShow": function () {
      var that = this;

      // 获得vm对象
      that.vm = that.getVM();

      $.ajax({
        url: '/api/getThematic.php',
        type: 'get',
        data:{
          rtype: 'man'
        },
        success: function (rs) {
          that.vm.thematicListMan = rs.data;
        }
      });
      $.ajax({
        url: '/api/getThematic.php',
        type: 'get',
        data:{
          rtype: 'woman'
        },
        success: function (rs) {
        	that.vm.thematicListWoman = rs.data;
        }
      });
      
    }
  }
});
