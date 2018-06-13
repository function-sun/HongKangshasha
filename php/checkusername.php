<?php
	header("Content-type","text/html;charset=utf-8");
	$username = $_GET['username'];

    $resultStr="";
    $conn = mysql_connect("localhost","root","root");
    if(!$conn){
    	$resultStr="connect fail";
    }else{
	    mysql_select_db("xianggangshasha",$conn);
	    
	    $sqlstr = "select * from mydate where username= '".$username."'";
	    $result = mysql_query($sqlstr,$conn);//查询语句的返回值是表格
	    $rows = mysql_num_rows($result);//查询表格中有多少行
	    if($rows>0){//说明该用户名在数据库中是存在的。
	    	$resultStr="0";	
	    }else{
		    $resultStr="1";
	    }
	    mysql_close($conn);
	}
	
 	echo $resultStr;
    
?>