<?php
session_start();
if ($_POST["checks"] == ""){
	echo "<script>
	alert ('验证码为空，请重新输入！');
	self.location.href='logon in.html';
	</script>";
	};
if($_POST["checks"] == $_SESSION["code"]){
	echo "<script src='js/check.js'></script>";
}
if ($_POST["checks"] != $_SESSION["code"]){
	echo "<script>
	alert('验证码错误！');
	self.location.href='logon in.html';
	</script>";
}
?>