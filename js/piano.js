
$(document).ready(function(e) {
    $('#nav li').click(function(e) {
        $('.liclick').removeClass('liclick');
		$(this).addClass('liclick');
		var color=['#b9d329','#c0ebf7','#b9d329','#69bcf3','#79d9f3','#fa5f94','#acd180'];
		$('#nav li').append('<span>');
		$('#nav span').each(function(index, element) {
            $(this).css('background-color',color[index]);
        });
		$('#nav li').hover(function(){
			$(this).children('span').animate({'top':-38},200);
			var index=$(this).index();
			$('audio').get(index).play();
		},function(){
			$(this).children('span').animate({'top':0},200);
            stop($('audio'));
			});
    });
	var $key=$('#nav li');
	$key.keydown(function(even){
		var key=even.keyCode;
		switch(key){
		case 97:
		$(this).children('span').animate({'top':-38},200);
			var index=$(this).index();
			$('audio').get(index).play();
			break;
		case 98:
		$(this).children('span').animate({'top':-38},200);
			var index=$(this).index();
			$('audio').get(index).play();
			break;
		case 99:
		$(this).children('span').animate({'top':-38},200);
			var index=$(this).index();
			$('audio').get(index).play();
			break;
		case 100:
		$(this).children('span').animate({'top':-38},200);
			var index=$(this).index();
			$('audio').get(index).play();
			break;
		case 101:
		$(this).children('span').animate({'top':-38},200);
			var index=$(this).index();
			$('audio').get(index).play();
			break;
		case 102:
		$(this).children('span').animate({'top':-38},200);
			var index=$(this).index();
			$('audio').get(index).play();
			break;
		case 103:
		$(this).children('span').animate({'top':-38},200);
			var index=$(this).index();
			$('audio').get(index).play();
			break;
		}
		})
});