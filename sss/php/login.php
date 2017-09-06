<?php
header("content-type:text/html;charset=utf-8");
	$email = $_POST['email'];
	$tel = $_POST['tel'];
	$userName = $_POST['userName'];
	$password = $_POST['password'];
	
	
	$con = mysqli_connect("localhost","root","123","zhongliang");

	if($userName != "1"){
		$sql = "select * from user where userName = '$userName'";
	}else if($tel != "1"){
		$sql = "select * from user where tel = '$tel'";
	}else{
		$sql = "select * from user where email = '$email'";
	}
	

	$result = mysqli_query($con, $sql);
	$rows = mysqli_num_rows($result);
	
	if($rows>0){
		$row=mysqli_fetch_array($result);
		$name = $row['userName'];
		
//		$arr = array('json'=>$data);
//		echo json_encode($data);
		
		$pw = $row['password'];	
		if($pw != $password){
			echo "1"; 
		}else{
			echo $name;
		}
			
	}

	mysqli_close($con);	

?>