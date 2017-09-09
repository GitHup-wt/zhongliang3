
//../img/goodsDetail/m1.jpg;../img/goodsDetail/m2.jpg;../img/goodsDetail/m3.jpg
//../img/goodsDetail/d1.jpg;../img/goodsDetail/d2.jpg;../img/goodsDetail/d3.jpg;../img/goodsDetail/d4.jpg
//../img/goodsDetail/x1.jpg;../img/goodsDetail/x2.jpg;../img/goodsDetail/x3.jpg;../img/goodsDetail/x4.jpg;../img/goodsDetail/x5.jpg;../img/goodsDetail/x6.jpg;../img/goodsDetail/x7.jpg
//../img/goodsDetail/z1.jpg;../img/goodsDetail/z2.jpg;../img/goodsDetail/z3.jpg;../img/goodsDetail/z4.jpg;../img/goodsDetail/z5.jpg
//../img/goodsDetail/detail1.jpg;../img/goodsDetail/detail2.jpg;../img/goodsDetail/detail3.jpg;../img/goodsDetail/detail4.jpg;../img/goodsDetail/detail5.jpg
function s(id){
			return document.getElementById(id);
			}


$(function(){
	window.onscroll = function(){
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		if(scrollTop>1150 && scrollTop<1960){
			$(".sGood_aM3_right").css("display","block");
		}else{
			$(".sGood_aM3_right").css("display","none");
		}
			
	}
	
	$("#resultId").val()
	
	var result = $("#resultId").val();
	
	$("#addId").click(function(){
		result = $("#resultId").val();
		result++;
		$("#resultId").val(result);
	});
	$("#minusId").click(function(){
		result = $("#resultId").val();
		result--;
		if(result<0){return};
		$("#resultId").val(result);
	});
	
	
	
//	var imgs = ["http://pic1.womai.com/upload/601/603/606/64306/280375/89500/206060/620076/620076_1_pic500_6392.jpg",
//			"http://pic2.womai.com/upload/601/603/606/64306/280375/89500/206060/620076/620076_2_pic500_4919.jpg",
//			"http://pic2.womai.com/upload/601/603/606/64306/280375/89500/206060/620076/620076_3_pic500_508.jpg",
//			"http://pic1.womai.com/upload/601/603/606/64306/280375/89500/206060/620076/620076_4_pic500_2312.jpg",
//			"http://pic1.womai.com/upload/601/603/606/64306/280375/89500/206060/620076/620076_5_pic500_9340.jpg"
//	];
	var imgs =[];
	let goodsId = getCookie("goodsId");
	$.ajax({
		type:"get",
		url:"../php/goodsDetail.php",
		async:true,
		data:{
			"goodsId":goodsId
		},
		success:function(data){
			data = eval(data);
			
			for(let i=0;i<data.length;i++){
				createGoodsDetail(data[i]);
				
			}
			
		}
	});
	
	var index = 0;
function createGoodsDetail(arr){
		
		imgs = arr.goodsImg.split(";");
		$("#box").css("backgroundImage","url("+imgs[index]+")");
		
		let ul = $("<ul></ul>");
		for(let i=0;i<imgs.length;i++){
			let li = $('<li>'+
			   		   '<img src="'+imgs[i]+'" style="width: 100%;height: 100%;" />'+
		 			   '</li>'
		 			  );
			ul.append(li);
		}
		$(".sGm_left_bottom").append(ul);
		
		$(".goodsName").html(arr.goodsName);
		$(".danPrice").html(arr.danPrice);
//		chuangjian();
//添加到购物车		
	$(".tianjia").click(function(){
		$.ajax({
			type:"get",
			url:"../php/addShop.php",
			async:true,
			data:{
				"goodsId":goodsId,
				"imgs":imgs[0],
				"goodsName":arr.goodsName,
				"danPrice":arr.danPrice,
				"goodsCount":$("#resultId").val()
			},
			success:function(data){
				if(data==1){
					alert("添加购物车成功");
					location.href="shopCar.html";
				}else{
					alert("添加失败");
				}
			}
		});
	});
		
}
	
	s("box").onmouseenter = chuangjian;
	
	function chuangjian(){
				setMirror({
					boxDom:s("box"),
					bgImg:imgs[index],
					width:150,
					height:150,
					mult:2.65
				});
			}
	
//放大镜换图片
//	var lis = $(".sGm_left_bottom").find("li");
		$(".sGm_left_bottom").on("mouseenter","li",function(){
			index = $(".sGm_left_bottom").find("li").index(this);
			$(".sGm_left_bottom").find("li").css("border","1px solid #DDDDDD");
			$(this).css("border","1px solid #8BC34A");
			$("#box").css("backgroundImage","url("+imgs[index]+")");
		});
		
	
});






