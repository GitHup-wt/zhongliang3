

$(function(){
	let tr;
	tr = $('<tr><td><input id="btnCheckbox" type="checkbox" checked="checked" /><img src="http://pic3.womai.com/upload/601/603/608/362420/362422/362433/606069/606069_0_pic60_2403.jpg" alt="" /><a> 【自营】玉兰油多效修护SPF15防晒霜50g 赠多效修护洁面乳48g*2</a></td><td>￥<span class="danPrice">159.00</span></td><td><input type="button" class="del" value="-" /><input type="text" class="count" value="1" /><input type="button" class="add" value="+" /></td><td>1.152</td><td>￥<span class="resultPrice">636.00</span></td><td><a href="#">收藏</a><a class="deTr">删除</a></td></tr>');
	$(".shopZu").append(tr);
		
	totleMoney();
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
	$(".shopZu").find("tr").eq(index).remove();
	totleMoney();
	
});



function totleMoney(){
	let totleMoney = 0;
	$(".resultPrice").each(function(i){
		totleMoney += parseFloat($(this).html());
	})
	
	$(".totleMoney").html("￥"+totleMoney);
}










