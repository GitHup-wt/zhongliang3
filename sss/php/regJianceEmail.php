<?php
header("content-type:text/html;charset=utf-8");
	$email = $_POST['email'];
	
		$con = mysqli_connect("localhost","root","123","zhongliang");
		
		$sql = "select email from user where email = '$email'";

		$result = mysqli_query($con,$sql);
//		$r = mysqli_fetch_assoc($result);
//		echo $r['email'];
		$rows = mysqli_num_rows($result);
		if($rows==0){
			echo "1";
		}else{
			echo "0";
		}
	
	mysqli_close($con);	
?>