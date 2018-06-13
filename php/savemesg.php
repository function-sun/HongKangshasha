
<?php
	header("content-type","text/html;charset=utf-8");
	// 1、接收前端数据
	$username = $_POST['username'];
	$userpassword = $_POST['userpassword'];
	$useremail = $_POST['useremail'];
	// 2、链接数据库，添加到数据库中
	$conn = mysql_connect("localhost","root","root");
	// (2)、选择数据库
	mysql_select_db("xianggangshasha",$conn);
	// (3)、执行插入语句
	$sqlstr="insert into mydate(username,userpassword,useremail) values('".$username."','".$userpassword."','".$useremail."')";
	mysql_query($sqlstr,$conn);
	// (4)、关闭数据库
	mysql_close($conn);
	//3、响应（告诉前端，保存成功）
	echo "reg success";
?>
