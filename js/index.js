//轮播图
$(function(){
	let index = 0;
	let timer = null;
	function move(){
		index++;
		if(index >= $('.bg img').length){
			index = 0;
		}
		$('.bg img').eq(index).fadeIn(2000).siblings().fadeOut(2000);
		$('.uls li').eq(index).addClass('active').siblings().removeClass('active');
	}
	
	function autoMove(){
		timer = setInterval(()=>{
			move();
		},3000)
	}
		
	autoMove();
	
	$('.banner').hover(function(){
			clearInterval(timer);
		},function(){
			autoMove();
	})
	
	$('.uls li').each((k,v)=>{
		$(v).click(function(){
			index = k;
			$(this).addClass('active').siblings().removeClass('active');
			$('.bg img').eq(index).fadeIn(2000).siblings().fadeOut(2000);
			
		})
	})
})

//侧边栏插件
$(function() {
	$('.tab').on('mouseenter', function() {
		$(".nav_right").removeClass('hide');
	}).on('mouseleave', function() {
		$(".nav_right").addClass('hide');
		$(".sub").addClass('hide');
	}).on('mouseenter', 'li', function(e) {
		var li_data = $(this).attr('data-id');
		$(".sub").addClass('hide');
		$('.sub[data-id="' + li_data + '"]').removeClass('hide');
	})
})

//注册页与后端打通
$(function(){
	let xhr = new XMLHttpRequest();
	xhr.open("post","savemes.php",true);
	xhr.onreadystateschange = function(){
		if(xhr.readyStates == 4 && xhr.stutes == 200){
			if(xhr.responseText == "success"){
				location.href = "index.html";
			}
		}
	}
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	let sendstr = "username="+$("#username1").value+"&&userpassword="+$("#userpassword1").value;
	xhr.send(sendstr);
})


//注册使用的正则表达式
function checkAll(type,value){
	var reg = null;
	switch(type){
		case "username":reg = /^[a-zA-Z_]\w{5,15}$/;break;
		case "userpassword":reg = /^[a-zA-Z0-9]\w{6,16}$/;break;
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
		}else{
			$("#username1").css("border","1px solid #3ffc6b");
		}
	});
	
	$("#userpassword1").blur(function(){
		if(checkAll("userpassword",this.value)==false){
			$("#userpassword1").css("border","1px solid #fc3f83");
		}else{
			$("#userpassword1").css("border","1px solid #3ffc6b");
		}
	});
	
	$("#useremail1").blur(function(){
		if(checkAll("useremail",this.value)==false){
			$("#useremail1").css("border","1px solid #fc3f83");
		}else{
			$("#useremail1").css("border","1px solid #3ffc6b");
		}
	});
})
