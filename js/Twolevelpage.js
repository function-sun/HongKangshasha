//侧边栏插件	
$(function(){
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

$(function(){
	$(".navLeft").mouseover(function(){
		$('.tab').css("display","block");
	})
	$(".tab").mouseleave(function(){
		$('.tab').css("display","none");
	})
	$(".tab").mouseover(function(){
		$('.tab').css("display","block");
	})
	$(".navLeft").mouseleave(function(){
		$('.tab').css("display","none");
	})
})

//更多与收起动效
$(function(){
	$("#clickOne").toggle(
		function(){
			$("#showMainOne").css("display","block");
			$("#clickOne p:first-child").html("收起");
			$("#clickOne p:last-child").css({"width":"0",
	        "height":"0",
	        "border":"5px solid transparent",
	        "border-top-color":"#818286;"}.html());
		},
		function(){
			$("#showMainOne").css("display","none");
			$("#clickOne p:first-child").html("更多");
		}
	)
	
})


//滑过产品显示缩略图
$(function(){
	$('#oneShow').on('mouseover', function() {
		$("#oneShow").css("visibility","hidden");
		$("#oneHide").css({"visibility":"visible","z-index":"100"});
		$("#oneHide").css("box-shadow","0 0 10px gray");
		
	})
	$("#oneHide").on('mouseleave', function() {
		$("#oneHide").css("visibility","hidden");
		$("#oneShow").css("visibility","visible");
	})
	
	$("#twoShow").hover(
		function() {
			$(this).css("box-shadow","0 0 10px gray");
		},
		function(){
			$(this).css("box-shadow","none");
		}
	)
	
	$("#onePic img:nth-child(1)").mouseenter(function(){
		$("#onePic img:nth-child(1)").css("border","4px solid #c69a62");
		$("#onePic img:nth-child(2)").css("border","4px solid #fff");
		$("#onePic img:nth-child(3)").css("border","4px solid #fff");
		$("#onepicTit img").attr("src","img/sousuopic2.png");
	})
	$("#onePic img:nth-child(2)").mouseenter(function(){
		$("#onePic img:nth-child(2)").css("border","4px solid #c69a62");
		$("#onePic img:nth-child(1)").css("border","4px solid #fff");
		$("#onePic img:nth-child(3)").css("border","4px solid #fff");
		$("#onepicTit img").attr("src","img/sousuopic1.png");
	})
	$("#onePic img:nth-child(3)").mouseenter(function(){
		$("#onePic img:nth-child(3)").css("border","4px solid #c69a62");
		$("#onePic img:nth-child(2)").css("border","4px solid #fff");
		$("#onePic img:nth-child(1)").css("border","4px solid #fff");
		$("#onepicTit img").attr("src","img/sousuopic3.png");
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