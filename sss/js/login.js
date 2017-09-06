// JavaScript Document

function S(id){
	return document.getElementById(id);
	}

window.onload = function(){

	var inp = S("inpBtn").getElementsByTagName("input");
	for(let i=0;i<inp.length;i++){
	
		inp[i].t = true;
		
	inp[i].onclick = function(){
		if(inp[i].t==false){
			return;
			}
			inp[i].word = this.value;
			inp[i].t = false;
			this.value=""
		}
		inp[i].onblur = function(){
			if(this.value==""){
				this.value = inp[i].word;
				inp[i].t=true;
			//	p[i].style.visibility="hidden";
				return;
				}
			}
		}
// 点击注册按钮
		S("registerBtn").onclick = function(){
			
			location.href="Register.html";
			
		}
		
// 点击登录按钮
	
$(".LoginBtn").click(function(){
//假设登录的是手机号
if($("#userName")[0].value.indexOf("@")>-1){
	str = "tel=1&userName=1&email=";
}else if(checkReg("phone",$("#userName")[0].value) == true){
	str = "email=1&userName=1&tel=";
}else{
	alert(1)
	str = "email=1&tel=1&userName=";
}
	var data = str+$("#userName").val()+"&password="+$("#password").val();
	alert(data);
	$.ajax({
		type:"post",
		url:"../php/login.php",
		async:true,
		data:data,
		success:function(data){
//			alert(data)
			if(data=="1"){
				alert("账号或密码不正确!");
			}else{
				alert("登录成功");
				setCookie("key",data,7);
				
				location.href="main.html";
			}
		}
	});
	
	
	
});


//第一个框，验证用户名、邮箱和手机号
		

//第三个框，验证密码是否正确
		

		

}