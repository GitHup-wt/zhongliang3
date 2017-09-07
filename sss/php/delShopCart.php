
<?php
	header("content-type:text/html;charset=utf-8");
	
	$goodsId = $_GET['goodsId'];
	
//	echo "1";
//	echo $goodsId;
	$con = mysqli_connect("localhost","root","123","zhongliang");

	$sql = "delete from goodsCart where goodsId = '$goodsId'";
	
	$result = mysqli_query($con, $sql);
	
	mysqli_close($con);
	
	if($result){
		echo "1";
		
	}else{
		echo "0";
	}
	
	
?>