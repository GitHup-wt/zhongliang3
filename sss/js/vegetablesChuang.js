//<li>
//	<div class="secv2_goods">
//		<a href="#">【自营】百年栗园散养柴鸡蛋48枚</a>
//		<span>&nbsp;</span>
//		<img src="../img/vegetables/613819_1_pic270_21.jpg"/>
//		<div class="secv2_car">
//			<span>￥</span>
//			<span>49.00</span>
//			<p><span>657632</span>人购买</p>
//			<input class="btnCar" type="button" value="加入购物车" />
//		</div>
//	</div>
//</li>

a = "【自营】百年栗园散养柴鸡蛋48枚";
c = "../img/vegetables/613819_1_pic270_21.jpg";
d = "39.00";

$(function(){
	
	$.ajax({
		type:"get",
		url:"../php/vegetables.php",
		async:true,
		success:function(data){
			data = eval(data);
			
			for(let i=0;i<data.length;i++){
				createGood(data[i]);
			}
		}
	});
		
var ul = $("<ul></ul>")
function createGood(data){
	var li = $('<li >'+
	'<div class="secv2_goods">'+
		'<a class="detail" index="'+data.goodsId+'">'+data.goodsName+'</a>'+
		'<span>满减</span>'+
		'<img src="'+data.imgs+'"/>'+
		'<div class="secv2_car">'+
			'<span>￥</span>'+
			'<span>'+data.danPrice+'</span>'+
			'<p><span>657632</span>人购买</p>'+
			'<input class="btnCar" type="button" value="加入购物车" />'+
		'</div>'+
	'</div>'+
'</li>');

	ul.append(li);
$(".secv2_top").eq(0).append(ul);
	
}


//$(".secv2_top").on("click",".detail",function(){
//	 alert($(".detail").attr("index"));
//	 
//	 
//	
//});


$(".detail").live("click",function(){
//	var index = $(".detail").index(this);
	let goodsId = $(this).attr("index");
	setCookie("goodsId",goodsId,7);
	location.href="goodDetail.html";

});


});
