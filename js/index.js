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