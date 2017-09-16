<?php 
  // 根据URL放回相应的页面
  // 后端路由
  header('content-type:text/html; charset=utf8;');

  // include('./header.html');
  // echo '<div>主页内容</div>';
  // include('./footer.html');

  // include作用嵌入子页面

  // 根据URL中的特征判断用户想访问哪个页面

  // include('./views/main/login.html');

  // var_dump($_SERVER);

  // 默认目录名称
  $dir = 'main';
  // 默认文件名称
  $filename = 'index';

  // 处理URL中的路径
  if(array_key_exists('PATH_INFO',$_SERVER)){
    // 路径存在
    // 请求路径
    $path = $_SERVER['PATH_INFO'];// /main/index
    // 截取字符串
    $str = substr($path, 1); // main/index
    // 分割字符串
    $ret = explode('/',$str);
    if(count($ret) == 2){
      // 两层路径
      // 覆盖默认路径
      $dir = $ret[0];
      // 覆盖默认文件名称
      $filename = $ret[1];
    }else{
      // 其他情况统一跳转到登录页
      $filename = 'login';
    }
  }
  // 嵌入子页面
  include('./views/'.$dir.'/'.$filename.'.html');


 ?>