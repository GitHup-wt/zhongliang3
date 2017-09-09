<?php
	header("content-type:text/html;charset=utf-8");
	
	$goodsId = $_GET['goodsId'];
	$imgs = $_GET['imgs'];
	$goodsName = $_GET['goodsName'];
	$danPrice = $_GET['danPrice'];
	$goodsCount = $_GET['goodsCount'];
	
	$con = mysqli_connect("localhost","root","123","zhongliang");
	
	$sql = "select * from goodscart where goodsId = '$goodsId'";
	
	$result1 = mysqli_query($con, $sql);
	
	$rows = mysqli_num_rows($result1);
	
	if($rows<1){
		$sqlinsert = "insert into goodscart(goodsId,imgs,goodsName,danPrice,goodsCount) values('$goodsId','$imgs','$goodsName','$danPrice','$goodsCount')";
	
	}else{
		$data = mysqli_fetch_array($result1);
		$goodsCount = $data[4]+$goodsCount;
		$sqlinsert = "update goodscart set goodsCount = '$goodsCount' where goodsId = '$goodsId'";
		
	}
	
	$result = mysqli_query($con,$sqlinsert);
		if(!$result){
			echo "0";
		}else{
			echo "1";
		}
	

		mysqli_close($con);	
?>