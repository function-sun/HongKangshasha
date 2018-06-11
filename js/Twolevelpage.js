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

