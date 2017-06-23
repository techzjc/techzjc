
$(function(){
	var $bird=$("#dbird"); 
	/*
	将div id="#dbird"的小鸟位置赋值为$bird
	*/
	var pos=$bird.offset();
	/*
	小鸟定位
	*/
	var birdsize={width:$bird.width(),height:$bird.height()};
	/*
	小鸟尺寸
	*/
	var speed=10;
	/*
	速度=10
	*/
	$bird.keydown(
	function(even){
		var key=even.keyCode;
		/*
		得到key事件
		*/
		switch(key){
			case 37:
			/*
			左键
			*/
			pos.left-=speed;
			break;
			case 38:
			/*
			上键
			*/
			pos.top-=speed;
			break;
			case 39:
			/*
			右键
			*/
			pos.left+=speed;
			break;
			case 40:
			/*
			下键
			*/
			pos.top+=speed;
			break;
			};
			$bird.offset(pos);
		});
	});