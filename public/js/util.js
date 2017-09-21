define(['jquery'],function($){
  return {
    qs : function(key){
      var param = location.search.substr(1);
      var tcId = null;
      if(param){
        var ps = param.split('&');
        $.each(ps,function(i,item){
          var kv = item.split('=');
          if(kv[0] == key){
            tcId = kv[1];
            return false;// 终止each循环
          }
        });
      }
      return tcId;
    }
  }
});