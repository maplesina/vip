<?php
 header ( "Content-type:text/html;charset=utf-8");
  // 接收id值
//$id = $_GET['item_id'];

  $mysqli = new Mysqli('localhost', 'root', 'root', 'vip');
  $mysqli->set_charset("utf8");
  $sql = "SELECT * FROM list  ORDER BY id DESC";

  $result = $mysqli->query($sql);

  // 判断$result中是否有值
  if(mysqli_num_rows($result)){
    while($row = mysqli_fetch_assoc($result)){
      $data[] = $row;
    }
    echo json_encode(array('code'=>200, 'result'=>$data));
  }else{
    echo json_encode(array('code'=>404, 'msg'=>"暂无评论内容"));
  }
?>