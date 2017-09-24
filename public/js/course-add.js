define(['jquery','template','util','form'],function($,template,util){
  // 设置导航菜单选中
  util.setMenu(location.pathname);
  // 绑定事件
  $('#courseBtn').click(function(){
    $('#courseForm').ajaxSubmit({
      type : 'post',
      url : '/api/course/create',
      dataType : 'json',
      success : function(data){
        if(data.code == 200){
          location.href = '/course/basic?cs_id=' + data.result.cs_id;
        }
      }
    });
  });
});