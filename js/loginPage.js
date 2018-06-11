//登录页与后端打通
function $(id){
	return document.getElementById(id);
}

function saveCookie(key,value,days){
	var d = new Date();
	d.setDate(d.getDate()+days);
	document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();
}
window.onload = function(){
	$("loginid").onclick = function(){
		let xhr = new XMLHttpRequest();
		xhr.open("post","../php/loginCheck.php",true);

		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText == "1"){
					saveCookie("username",$("username").value,7);
					location.href = "../index.html";
				}else{
					$("usernameV").style.border = "1px solid #ed3d7d";
				}
			}
		}
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

		//发送请求
		let sendstr = "username="+$("usernameV").value+"&&userpass="+$("userpasswordV").value;
		xhr.send(sendstr);
	}
}