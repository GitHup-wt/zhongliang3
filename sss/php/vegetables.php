<?php
	header("content-type:text/html;charset=utf-8");
	
	$con = mysqli_connect("localhost","root","123","zhongliang");
	
	$sql = "select * from goodsList";
	
	$result = mysqli_query($con,$sql);
	
	$rows = mysqli_num_rows($result);
	
	if($rows>0){
		$data = mysqli_fetch_array($result);
		
	}
	   $str = "[";
	
	while($data){
//		echo count($data);
		$str = $str."{'goodsId':'".$data[0]."',
				      'goodsName':'".$data[1]."',
				      'imgs':'".$data[2]."',
				      'danPrice':'".$data[3]."'
		}";
		
		if($data = mysqli_fetch_array($result)){
			$str = $str.",";
//			echo "<p/>";
		}
		
	}
	$str = $str."]";
	
	mysqli_free_result($result);
	mysqli_close($con);
	
	echo $str;
	
?>