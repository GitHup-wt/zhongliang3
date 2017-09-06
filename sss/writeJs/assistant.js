
define(function(require,exports,module){
	
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
	
//左侧锚点跟随滚动和变化

var mlis = $("#mainLeft").find("li")
	mlis.find("a").click(function(){
		mlis.find("a").css({"background":"white","color":"black"});
		$(this).css({"background":"green","color":"white"});
	});
	
//最上面固定的出现
	window.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
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
	
});



