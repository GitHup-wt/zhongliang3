//文档介绍
// wt 2017-8-9
// cookie 的存储 获取  删除


//存储cookie
//以对象的方式存入
function setCookie(key,value,dayCount){
		var date = new Date();
		date.setDate(date.getDate()+dayCount);
		document.cookie = key+"="+value+";expires="+date.toGMTString();
	}
	
//获取cookie
function getCookie(key){
		var str = document.cookie;
//以"; "  "="分割
		var a = str.split("; ");
		for(var i=0;i<a.length;i++){
				var b = a[i].split("=");
				if(b[0]==key){
					var com = b[1];
						return com;
					}
			}
		return false;
	}

//删除cookie
function removeCookie(key){
		setCookie(key,"",-1);
	}