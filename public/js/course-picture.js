define(['jquery','template','util','uploadify'],function($,template,util){
  // 设置导航菜单选中
  util.setMenu('/course/add');
  // 获取课程ID
  var csId = util.qs('cs_id');
  // 查询课程封面信息
  $.ajax({
    type : 'get',
    url : '/api/course/picture',
    data : {cs_id : csId},
    dataType : 'json',
    success : function(data){
      // 解析数据，渲染页面
      var html = template('pictureTpl',data.result);
      $('#pictureInfo').html(html);
      // 处理封面上传操作
      $('#myfile').uploadify({
        width : 80,
        height : 'auto',
        buttonText : '选择图片',
        itemTemplate : '<span></span>',
        buttonClass : 'btn btn-success btn-sm',
        swf : '/public/assets/uploadify/uploadify.swf',
        uploader : '/api/uploader/cover',
        fileObjName : 'cs_cover_original',
        formData : {cs_id : csId},
        onUploadSuccess : function(a,b){
          var obj = JSON.parse(b);
          $('.preview img').attr('src',obj.result.path);
        }
      });
    }
  });

});