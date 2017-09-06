<?php
header("content-type:text/html;charset=utf-8");
	$tel = $_POST['tel'];
	
		$con = mysqli_connect("localhost","root","123","zhongliang");
		
		$sql = "select tel from user where tel = '$tel'";
		
		$result = mysqli_query($con, $sql);
		$rows = mysqli_num_rows($result);
		
		if($rows==0){
			echo "1";
		}else{
			echo "0";
		}
	
	mysqli_close($con);	
?>