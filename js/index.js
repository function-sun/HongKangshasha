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

//购物车固定定位
$(function(){
	$(".shoppinguser").hover(
		function(){
			$(".shoppinguser").css("background","#fc3f83");
			$(".shoppinguser i").css("color","#fff");
			$(".shoppinguser img").fadeIn("slow");
		},
		function(){
			$(".shoppinguser").css("background","#4c4c4c");
			$(".shoppinguser i").css("color","#d08c35");
			$(".shoppinguser img").css("display","none");
		}
	);
	$(".shoppingcar").hover(
		function(){
			$(".shoppingcar").css("background","#fc3f83");
			$(".shoppingcar i").css("color","#fff");
		},
		function(){
			$(".shoppingcar").css("background","#4c4c4c");
			$(".shoppingcar i").css("color","#d08c35");
		}
	);
	$(".shoppingzan").hover(
		function(){
			$(".shoppingzan").css("background","#fc3f83");
			$(".shoppingzan i").css("color","#fff");
			$(".shoppingzan img").fadeIn("slow");
		},
		function(){
			$(".shoppingzan").css("background","#4c4c4c");
			$(".shoppingzan i").css("color","#d08c35");
			$(".shoppingzan img").css("display","none");
		}
	);
	$(".shoppinghistory").hover(
		function(){
			$(".shoppinghistory").css("background","#fc3f83");
			$(".shoppinghistory i").css("color","#fff");
			$(".shoppinghistory img").fadeIn("slow");
		},
		function(){
			$(".shoppinghistory").css("background","#4c4c4c");
			$(".shoppinghistory img").css("display","none");
			$(".shoppinghistory i").css("color","#d08c35");
		}
	);
	$(".shoppingservice").hover(
		function(){
			$(".shoppingservice").css("background","#fc3f83");
			$(".shoppingservice i").css("color","#fff");
			$(".shoppingservice img").fadeIn("slow");
		},
		function(){
			$(".shoppingservice").css("background","#4c4c4c");
			$(".shoppingservice img").css("display","none");
			$(".shoppingservice i").css("color","#d08c35");
		}
	);
	$(".shoppingerweima").hover(
		function(){
			$(".shoppingerweima").css("background","#fc3f83");
			$(".shoppingerweima i").css("color","#fff");
		},
		function(){
			$(".shoppingerweima").css("background","#4c4c4c");
			$(".shoppingerweima i").css("color","#d08c35");
		}
	);
	$(window).scroll(function(){
		if($(window).scrollTop != 0){
			$(".shoppingtop").css("display","block");
		}else{
			$(".shoppingtop").css("display","none");
		}
	});
})

//限时特卖倒计时
$(function(){
	let total = 6*60*60;
	let oSpan = document.getElementById("offerTimer1");
	let timer = setInterval(function(){
		total--;
		if(total == 0) {
			alert("时间已到");
			try {
				window.close();
			} catch(e) {
				clearInterval(timer);
			}
		}
		oSpan.innerHTML = Math.floor(total/3600)+"时"+Math.floor(total/360)+"分"+(total%60)+"秒";
	},1000);
})



