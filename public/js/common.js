define(['jquery','template','cookie'],function($,template){
  // NProgress.start();
  // NProgress.done();
  // 控制左侧菜单的折叠和展开
  $('.navs ul').prev('a').on('click', function () {
    $(this).next().slideToggle();
  });
  // 实现退出功能
  $('#logoutBtn').click(function(){
    $.ajax({
      type : 'post',
      url : '/api/logout',
      dataType : 'json',
      success : function(data){
        if(data.code == 200){
          location.href = '/main/login';
        }
      }
    });
  });

  // 验证用户是否登陆了
  var flag = $.cookie('PHPSESSID');
  if(!flag && location.pathname != '/main/login'){
    location.href = '/main/login';
  }
  // 填充头像信息
  var loginInfo = $.cookie('loginInfo');
  loginInfo = loginInfo && JSON.parse(loginInfo);
  var tpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
  var html = template.render(tpl,loginInfo);
  $('.aside .profile').html(html);
  // $('.aside .profile img').attr('src',loginInfo.tc_avatar);
  // $('.aside .profile h4').html(loginInfo.tc_name);
});


