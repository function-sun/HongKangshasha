//选中区域连带
$(function(){
	$("#choosePic").toggle(
		function(){
			$(this).attr("src","img/xuanxianganniuyou.png");
			$("#chooseChildpic").attr("src","img/xuanxianganniuyou.png");
			$(".footerLeft p:first-child").html("共计2件商品");
			$(".footerLeft p:last-child").html("商品应付金额￥249");
		},
		function(){
			$(this).attr("src","img/xuanxianganniuwu.png");
			$("#chooseChildpic").attr("src","img/xuanxianganniuwu.png");
			$(".footerLeft p:first-child").html("共计0件商品");
			$(".footerLeft p:last-child").html("商品应付金额￥0");
		}
	);
	
	$("#chooseChildpic").toggle(
		function(){
			$(this).attr("src","img/xuanxianganniuyou.png");
			$(".footerLeft p:first-child").html("共计2件商品");
			$(".footerLeft p:last-child").html("商品应付金额￥249");
		},
		function(){
			$(this).attr("src","img/xuanxianganniuwu.png");
			$(".footerLeft p:first-child").html("共计0件商品");
			$(".footerLeft p:last-child").html("商品应付金额￥0");
		}
	);
})


//显示商品隐藏项
$(function(){
	$(".showMes img").click(function(){
			$(".showMes").css("display","none");
			$(".hideMes").css("display","block");
	})
	
	$("#hideMesg").click(function(){
			$("#showMesg").css("display","block");
			$("#hideMesg").css("display","none");
	})
})
