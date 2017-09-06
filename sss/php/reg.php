<?php
header("content-type:text/html;charset=utf-8");
	$email = $_POST['email'];
	$tel = $_POST['tel'];
	$userName = $_POST['userName'];
	$password = $_POST['password'];

	$con = mysqli_connect("localhost","root","123","zhongliang");

	if($email == "1"){
		$sqlinsert = "insert into user(tel,userName,password) values('$tel','$userName','$password')";
	}
	else{
		$sqlinsert = "insert into user(email,userName,password) values('$email','$userName','$password')";
	}

	$result = mysqli_query($con,$sqlinsert);
		if(!$result){
			echo "1";
		}else{
			echo "0";
		}

		mysqli_close($con);	

?>