function check(){
	var $name=form.name.value;
	var $subject=form.subject.value;
	switch($subject){
		case math:
		if ($name="王老师"){
		self.location.href="math-wls.html";
		}
		else
		{
		if ($name="wls"){
		self.location.href="math-wls.html";
			}
		else
		{
		if ($name="王巧兰"){
		self.location.href="math-wls.html";
		}
		else
		{
		alert('您在姓名处输入的'+'"'+$name+'"'+'和你在学科处输入的'+'"'+$subject+'"'+'输入错误，请再试一次！');
	    self.location.href="index.php";
		}
		}
			};
		case 数学:
		if ($name="王老师"){
		self.location.href="math-wls.html";
		}
		else
		{
		if ($name="wls"){
		self.location.href="math-wls.html";
			}
		else
		{
		if ($name="王巧兰"){
		self.location.href="math-wls.html";
		}
		else
		{
		alert('您在姓名处输入的'+'"'+$name+'"'+'和你在学科处输入的'+'"'+$subject+'"'+'输入错误，请再试一次！');
	    self.location.href="index.php";
		}
		}
		};
		case Math:
		if ($name="王老师"){
		self.location.href="math-wls.html";
		}
		else
		{
		if ($name="wls"){
		self.location.href="math-wls.html";
			}
		else
		{
		if ($name="王巧兰"){
		self.location.href="math-wls.html";
		}
		else
		{
		alert('您在姓名处输入的'+'"'+$name+'"'+'和你在学科处输入的'+'"'+$subject+'"'+'输入错误，请再试一次！');
	    self.location.href="index.php";
		}
		}
			};
		case Chinese:
		if ($name="翁老师"){
		self.location.href="chinese-wls.html";
		}
		else
		{
		if ($name="wls"){
		self.location.href="chinese-wls.html";
			}
		else
		{
		if ($name="翁楠"){
		self.location.href="chinese-wls.html";
		}
		else
		{
		alert('您在姓名处输入的'+'"'+$name+'"'+'和你在学科处输入的'+'"'+$subject+'"'+'输入错误，请再试一次！');
	    self.location.href="index.php";
		}
		}
			};
				case chinese:
		if ($name="翁老师"){
		self.location.href="chinese-wls.html";
		}
		else
		{
		if ($name="wls"){
		self.location.href="chinese-wls.html";
			}
		else
		{
		if ($name="翁楠"){
		self.location.href="chinese-wls.html";
		}
		else
		{
		alert('您在姓名处输入的'+'"'+$name+'"'+'和你在学科处输入的'+'"'+$subject+'"'+'输入错误，请再试一次！');
	    self.location.href="index.php";
		}
		}
			};
				case 语文:
		if ($name="翁老师"){
		self.location.href="chinese-wls.html";
		}
		else
		{
		if ($name="wls"){
		self.location.href="chinese-wls.html";
			}
		else
		{
		if ($name="翁楠"){
		self.location.href="chinese-wls.html";
		}
		else
		{
		alert('您在姓名处输入的'+'"'+$name+'"'+'和你在学科处输入的'+'"'+$subject+'"'+'输入错误，请再试一次！');
	    window.location.href ="index.php";
		}
		}
			};
		
	default:
	alert('您在姓名处输入的'+'"'+$name+'"'+'和你在学科处输入的'+'"'+$subject+'"'+'输入错误，请再试一次！');
	self.location.href="index.php";
};
};