


//a = "http://pic3.womai.com/upload/601/603/608/362420/362422/362433/606069/606069_0_pic60_2403.jpg";
//b = "【自营】玉兰油多效修护SPF15防晒霜50g 赠多效修护洁面乳48g*2";
//c = 19.00;
//countShang = 1;


$(function(){
	
let tr;

//获取购物车的商品

$.ajax({
		type:"get",
		url:"../php/shopCart.php",
		async:true,
		success:function(data){
			data = eval(data);
//			console.log(data[0]);
			
			for(let i=0;i<data.length;i++){
				createGood(data[i]);
				
			}
			
//			a = data[0].imgs;
//			b = data[0].goodsName;
//			c = data[0].danPrice;
//			countShang = data[0].goodsCount;
//			
		}
	});

function createGood(arr){
	tr = $('<tr><td><input id="btnCheckbox" type="checkbox" checked="checked" /><img src="'+arr.imgs+
	'" alt="" /><a>'+arr.goodsName+
	'</a></td><td>￥<span class="danPrice">'+arr.danPrice+
	'</span></td><td><input type="button" class="del" value="-" /><input type="text" class="count" value="'+arr.goodsCount+
	'" /><input type="button" class="add" value="+" /></td><td>1.152</td><td>￥<span class="resultPrice">'+arr.danPrice*arr.goodsCount+
	'</span></td><td><a href="#">收藏</a><a class="deTr" goodsId='+arr.goodsId+'>删除</a></td></tr>');
	$(".shopZu").append(tr);
	totleMoney();
	
}
		
	
});

var count;
//增加商品数量
 $(".add").live("click",function(){

	let index = $(".add").index(this);
	count =	$(".count").eq(index).val();
	count++;
	$(".count").eq(index).val(count);
	
	let price = $(".danPrice").eq(index).html();
	$(".resultPrice").eq(index).html(count*price);
	totleMoney();
	
});

//减少商品数量
$(".del").live("click",function(){
	let index = $(".del").index(this);
	count = $(".count").eq(index).val();
	if(count<=0){$(".count").eq(index).val(0); return;}
	count--;
	$(".count").eq(index).val(count);
	
	let price = $(".danPrice").eq(index).html();
	$(".resultPrice").eq(index).html(count*price);
	totleMoney();
});

//直接手动代表商品数量
$(".count").live("blur",function(){
	let index = $(".count").index(this);
	count = $(".count").eq(index).val();
	if(count<0){
		count = 0;
		$(".count").eq(index).val(count);
	}
	
	let price = $(".danPrice").eq(index).html();
	$(".resultPrice").eq(index).html(count*price);
	totleMoney();

});

//删除当前商品

$(".deTr").live("click",function(){
	let index = $(".deTr").index(this);
//	alert($(this).attr("goodsId"));
	$(".shopZu").find("tr").eq(index).remove();
	let that = this;
	$.ajax({
		type:"get",
		url:"../php/delShopCart.php",
		data:{
			"goodsId":$(that).attr("goodsId")
		},
		async:true,
		success:function(data){
//			alert(data);
			if(data == 1){
				alert("成功删除商品");
			}else{
				alert("删除商品失败");
			}
			
		}
	});
	
	totleMoney();
	
});

//总计金额
function totleMoney(){
	let totleMoney = 0;
	$(".resultPrice").each(function(i){
		totleMoney += parseFloat($(this).html());
	})
	
	$(".totleMoney").html("￥"+totleMoney);
}










