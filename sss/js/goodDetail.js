
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
	
	
	
	var imgs = ["http://pic1.womai.com/upload/601/603/606/64306/280375/89500/206060/620076/620076_1_pic500_6392.jpg",
			"http://pic2.womai.com/upload/601/603/606/64306/280375/89500/206060/620076/620076_2_pic500_4919.jpg",
			"http://pic2.womai.com/upload/601/603/606/64306/280375/89500/206060/620076/620076_3_pic500_508.jpg",
			"http://pic1.womai.com/upload/601/603/606/64306/280375/89500/206060/620076/620076_4_pic500_2312.jpg",
			"http://pic1.womai.com/upload/601/603/606/64306/280375/89500/206060/620076/620076_5_pic500_9340.jpg"
	];
	var index = 3;
	
	s("box").onmouseenter = function(){
				setMirror({
					boxDom:s("box"),
					bgImg:imgs[index],
					width:150,
					height:150,
					mult:2.65
				});
			}
	
//放大镜换图片
	var lis = $(".sGm_left_bottom").find("li");
		lis.mouseenter(function(){
			index = lis.index(this);
			lis.css("border","1px solid #DDDDDD");
			$(this).css("border","1px solid #8BC34A");
			$("#box").css("backgroundImage","url("+imgs[index]+")");
		});
		
	
});






