var tplRegister = require('../templates/register.string');

SPA.defineView('register', {
  html: tplRegister,
  //载入插件列表
  //delegated 实现tab事件的绑定
  plugins: ["delegated"],

  bindActions: {
    'close': function () {
      this.hide();
    }
  }
});
