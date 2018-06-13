

//注册使用的正则表达式
function checkAll(type,value){
	var reg = null;
	switch(type){
		case "username":reg = /^[a-zA-Z_]\w{5,15}$/;break;
		case "userpassword1":reg = /^[0-9]\w{6,16}$/;break;
		case "userpassword2":reg = /^[a-z0-9]\w{6,16}$/;break;
		case "userpassword3":reg = /^[a-zA-Z0-9]\w{6,16}$/;break;
		case "userpassword4":reg = /^[a-zA-Z_0-9]\w{6,16}$/;break;
		case "userpassword":reg = /^[a-zA-Z_0-9]\w{6,16}$/;break;
		case "useremail":reg = /^\w+@[a-zA-Z0-9]+\.(com|cn|net|top|vip)$/;break;
		default:;
	}
	if(reg!=null){
		if(reg.test(value)){
			return true;
		}
	}
	return false;	
}
$(function(){
	$("#username1").blur(function(){
		if(checkAll("username",this.value)==false){
			$("#username1").css("border","1px solid #fc3f83");
			$(".falseTishiO").show();
		}else{
			$("#username1").css("border","1px solid #3ffc6b");
			$(".falseTishiO").hide();
		}
	});
	
	$("#userpassword1").blur(function(){
		if(checkAll("userpassword",this.value)==false){
			$("#userpassword1").css("border","1px solid #fc3f83");
			$(".falseTishiT").show();
		}else if(checkAll("userpassword1",this.value)==true){
			$("#userpassword1").css("border","1px solid #3ffc6b");
			$(".falseTishiT").hide();
			$(".cipherStrength1").show();
		}else if(checkAll("userpassword2",this.value)==true){
			$("#userpassword1").css("border","1px solid #3ffc6b");
			$(".falseTishiT").hide();
			$(".cipherStrength2").show();
		}else if(checkAll("userpassword3",this.value)==true){
			$("#userpassword1").css("border","1px solid #3ffc6b");
			$(".falseTishiT").hide();
			$(".cipherStrength3").show();
		}else if(checkAll("userpassword4",this.value)==true){
			$("#userpassword1").css("border","1px solid #3ffc6b");
			$(".falseTishiT").hide();
			$(".cipherStrength4").show();
		}
	});
	
	$("#useremail1").blur(function(){
		if(checkAll("useremail",this.value)==false){
			$("#useremail1").css("border","1px solid #fc3f83");
			$(".falseTishiTH").show();
		}else{
			$("#useremail1").css("border","1px solid #3ffc6b");
			$(".falseTishiTH").hide();
		}
	});
})

//jq使用ajax接受数据
//$(function(){
//	$("#username1").focusout(function(){
//		$.get("checkusername.php", 
//		{ $("username"):"+this.val()" },
//			function(data){
//				if(data=="0"){
//					$("usernameMsg").innerHTML="存在";
//				}else{
//					$("usernameMsg").innerHTML="可以用";
//				}
//			}
//		)
//	})
//})







