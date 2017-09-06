define(function(require,exports,module){
	
function S(id){
	return document.getElementById(id);
}

//sec 侧栏
	var lis = S("navTopUl").getElementsByTagName("li");
	var uls = S("navTopdi").getElementsByTagName("ul");
	for(let i=0;i<lis.length;i++){
	
		lis[i].onmouseover = function(){
			for(let j=0;j<lis.length;j++){
				lis[j].className="";
				uls[j].style.display="none";
			
			}
				lis[i].className="active_top1";
				uls[i].style.display="block";
		}
	}
	
//sc6内容轮播和推荐
	var oSpansbiao = S("scLunbo").getElementsByTagName("span");
	var oDivscNeirong = S("scNeirong").getElementsByTagName("div");

	for(let i=0;i<oSpansbiao.length;i++){
		oSpansbiao[i].onmouseover = function(){
			for(let j=0;j<oSpansbiao.length;j++){
				oSpansbiao[j].style.borderBottom="2px solid transparent";
				oDivscNeirong[j].style.display = "none";
			}
			oSpansbiao[i].style.borderBottom="2px solid #a1c0f6";
			oDivscNeirong[i].style.display = "block";
		}
		
	}
	
//类轮播上的出现	
	var lis2 = $(".leiShop")[0].getElementsByTagName("li");
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
		

});