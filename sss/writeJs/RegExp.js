//文档介绍
// wt 2017-8-9
// 正则表达式的封装  手机号：phone  邮箱：email

//正则封装 手机号：phone  邮箱：email
function checkReg(type,value){
	var result;
		switch(type){
			case "phone" : result = phoneReg().test(value);break;
			case "email" : result = emailReg().test(value);break;
			case "password": result = pw().test(value);break;
			default:;
			}
	if(result){
			return true;
		}else{
			return false;
			}
	}
	
	
//手机号		
function phoneReg(){
		var reg=/^1[34578]\d{9}$/;
		return reg;
	}
	
//邮箱： @   .    com/cn/net
function emailReg(){
		var reg=/^\w+@\w+\.(com|cn|net)$/;
		return reg;
	}

//密码 不能是数字、下划线和特殊字符开头，可以是数字，字母，特殊字符,6-18位
function pw(){
		var reg = /^[_0-9a-zA-Z]{6,18}$/;
		return reg;
}


