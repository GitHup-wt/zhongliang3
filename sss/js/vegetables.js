function $hs(id){
	return document.getElementById(id);
}
//类轮播上的出现	
	var lis2 = $(".leiShop")[0].getElementsByTagName("li");
	var uls2 = $hs("boxShop").getElementsByTagName("ul");
	for(let i=0;i<lis2.length;i++){
		var idnex;
		lis2[i].onmouseover = function(){
			index = i;
			for(let j=0;j<uls2.length;j++){
					uls2[j].style.display = "none";
			}
			$hs("boxShop").style.display = "block";
			uls2[i].style.display = "block";
			lis2[i].style.background="white";
			
			enter();
		}
		lis2[i].onmouseout = function(){
			$hs("boxShop").style.display = "none";
			lis2[index].style.background="#3ea6cf";
			
			leave();
		}
		$hs("boxShop").onmouseover = function(){
			$hs("boxShop").style.display = "block";
			lis2[index].style.background="white";
			
			enter();
		}
		$hs("boxShop").onmouseout = function(){
			$hs("boxShop").style.display = "none";
			lis2[index].style.background="#3ea6cf";
			
			leave();
		}
		
	function enter(){
		var n = lis2[index].children[0].children;
			
			for(let k=0;k<n.length;k++){
				n[k].style.color="#3ea6cf";
			}
			var m = n[0].children;
			for(let k=0;k<m.length;k++){
				m[k].style.color="#3ea6cf";
			}
	}
	function leave(){
			var n = lis2[index].children[0].children;
			
			for(let k=0;k<n.length;k++){
				n[k].style.color="white";
			}
			var m = n[0].children;
			for(let k=0;k<m.length;k++){
				m[k].style.color="white";
			}
	}	
	}
