
function S(id){
	return document.getElementById(id);
}

	S("search").t = true;
	S("search").word = S("search").value;
	S("search").onfocus = function(){
		if(S("search").value!=S("search").word){return;}
		S("search").t = false;
		S("search").value = "";
	}
	S("search").onblur = function(){
		if(S("search").value!=""){return;}
		S("search").value = S("search").word;
		S("search").style.color="rgb(195, 0, 0)";
	}
	
//sec 侧栏
//	var lis = S("navTopUl").getElementsByTagName("li");
//	var uls = S("navTopdi").getElementsByTagName("ul");
//	for(let i=0;i<lis.length;i++){
//	
//		lis[i].onmouseover = function(){
//			for(let j=0;j<lis.length;j++){
//				lis[j].className="";
//				uls[j].style.display="none";
//			
//			}
//				lis[i].className="active_top1";
//				uls[i].style.display="block";
//		}
//	}
	
//sc6内容轮播和推荐
//	var oSpansbiao = S("scLunbo").getElementsByTagName("span");
//	var oDivscNeirong = S("scNeirong").getElementsByTagName("div");
//	var oDiv
//	for(let i=0;i<oSpansbiao.length;i++){
//		oSpansbiao[i].onmouseover = function(){
//			for(let j=0;j<oSpansbiao.length;j++){
//				oSpansbiao[j].style.borderBottom="2px solid transparent";
//				oDivscNeirong[j].style.display = "none";
//			}
//			oSpansbiao[i].style.borderBottom="2px solid #a1c0f6";
//			oDivscNeirong[i].style.display = "block";
//		}
//		
//	}
//	
//左侧锚点跟随滚动和变化

var mlis = $("#mainLeft").find("li")
	mlis.find("a").click(function(){
		mlis.find("a").css({"background":"white","color":"black"});
		$(this).css({"background":"green","color":"white"});
	});
	
//最上面固定的出现
	window.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(scrollTop)
		if(scrollTop>600){
			S("headerTop").style.marginTop="0px";
		}else{
			S("headerTop").style.marginTop="-80px";
		}
		
		if(scrollTop>800){
			S("mainLeft").style.display="block";
		}else{
			S("mainLeft").style.display="none";
		}
		
		if(scrollTop>1950){
			mlis.find("a").css({"background":"white","color":"black"});
			$(mlis[0]).find("a").css({"background":"green","color":"white"});
		}
		if(scrollTop>2475){
			mlis.find("a").css({"background":"white","color":"black"});
			$(mlis[1]).find("a").css({"background":"green","color":"white"});
		}
	//回到顶部
		S("goTop").onclick = function(){
			 var incScrollTop = scrollTop/8;
			var timer1 = setInterval(function(){
				scrollTop = scrollTop-incScrollTop;
				if(scrollTop<=0){
					scrollTop = 0;
					clearInterval(timer1);
					document.body.scrollTop = scrollTop;
					
				}
				document.body.scrollTop = scrollTop;
			},30);
		}
		
	}
	
//类轮播上的出现	
	var lis2 = S(".leiShop").getElementsByTagName("li");
	var uls2 = S("boxShop").getElementsByTagName("ul");
	for(let i=0;i<lis2.length;i++){
		lis2[i].onmouseover = function(){
			for(let j=0;j<uls2.length;j++){
					uls2[j].style.display = "none";
			}
			S("boxShop").style.display = "block";
			uls2[i].style.display = "block";
		}
		lis2[i].onmouseout = function(){
			S("boxShop").style.display = "none";
		}
		S("boxShop").onmouseover = function(){
			S("boxShop").style.display = "block";
		}
		S("boxShop").onmouseout = function(){
			S("boxShop").style.display = "none";
		}
	}
	





