<?php 
	header("connect-type","text/html;charset=utf-8");

	$username = $_POST['username'];
	$userpassword = $_POST['userpassword'];

	$conn = mysql_connect("localhost","root","root");

	mysql_select_db("xianggangshasha",$conn);

	$sqlstr = "select * from mydate where username = '".$username."' and userpassword = '".$userpassword."'";
	$result = mysql_query($sqlstr,$conn);
	if(mysql_num_rows($result)>0){
		$rows = 1;
	}else{
		$rows = 0;
	}

	mysql_close($conn);

	echo $rows;
?>