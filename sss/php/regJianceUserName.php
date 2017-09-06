<?php
header("content-type:text/html;charset=utf-8");
	$userName = $_POST['userName'];
	
		$con = mysqli_connect("localhost","root","123","zhongliang");
		
		$sql = "select userName from user where userName = '$userName'";
		
		$result = mysqli_query($con, $sql);
		$rows = mysqli_num_rows($result);
		
		if($rows==0){
			echo "1";
		}else{
			echo "0";
		}
	
	mysqli_close($con);	
?>