// JavaScript Document

function S(id){
	return document.getElementById(id);
	}

window.onload = function(){
	var t1=null;
	var t2=null;
	var t3=null;
	var t4=null;
	
	var isType=null; 
	
	var inp = S("inpBtn").getElementsByTagName("input");
	var p = S("inpBtn").getElementsByTagName("p");
	for(let i=0;i<inp.length;i++){
	inp[i].pword = p[i].innerHTML;
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
				p[i].style.visibility="hidden";
				return;
				}
//第一个框，验证邮箱和手机号
			if(i==0){
				if(this.value.indexOf("@")>-1){
					var b = checkReg("email",this.value);
					if(b==true){
						$.ajax({
							type:"post",
							url:"../php/regJianceEmail.php",
							async:true,
							data:"email="+$("#contact").val(),
							success:function(data){
								if(data==0){
									p[i].innerHTML = "已注册";
									p[i].style.visibility="visible";
									t1=false;
								
								}else{
									t1=true;
								
								}
							}
						});
					}
					isType = "eamil";
				}else{
					var b = checkReg("phone",this.value);
					if(b==true){
						$.ajax({
							type:"post",
							url:"../php/regJiance.php",
							async:true,
							data:"tel="+$("#contact").val(),
							success:function(data){
								if(data==0){
									p[i].innerHTML = "已注册";
									p[i].style.visibility="visible";
									t2=false;
									
								}else{
									t2=true;
								
								}
							}
						});
					}
					isType = "tel";
				}
					isErrorContact(b,i);
			}
//第二个框，验证用户名
			if(i==1){
					$.ajax({
							type:"post",
							url:"../php/regJianceUserName.php",
							async:true,
							data:"userName="+$("#userName").val(),
							success:function(data){
								if(data==0){
									p[i].innerHTML = "已注册";
									p[i].style.visibility="visible";
									t3 = false;
								}else{
									t3 = true;
									
								}
							}
						});			
				
			}

//第三个框，验证密码
			if(i==2){
						var b = checkReg("password",this.value);
						if(b==true){
							t4 = true;
						}else{
							t4 = false;
						}
						isErrorContact(b,i);
					}

//第四个框，检查密码输入是否正确
			if(i==3){
						if(inp[i].value==inp[i-1].value){
							var b=true;
							t5 = true;
							
						}else{
							var b=false;
							t5 = false;
						}
						isErrorContact(b,i);
					}

//第五个框，验证验证码输入是否正确
			
			
			
			
			
			}
		
}
//立即注册
$(".registerBtn").click(function(){

if((t1==true || t2==true) && t3==true && t4==true && t5==true){

var data="userName="+$("#userName").val()+"&password="+$("#pw").val();

	if(t1==true){
			data = "email="+$("#contact").val()+"&tel="+"1&"+data;
		}else{
			data = "tel="+$("#contact").val()+"&email="+"1&"+data;
		}
		$.ajax({
			type:"post",
			url:"../php/reg.php",
			async:true,
			data:data,
			success:function(data){
				if(data=="0"){
					alert("注册成功");
					location.href = "Login.html";
				}else{
					alert("注册失败");
				}
			}
		});	
	}
		
});



//判断条件输出
	function isErrorContact(b,i){
						if(b==true){
							p[i].style.visibility="hidden";
						}else{
							p[i].innerHTML = inp[i].pword;
							p[i].style.visibility="visible";
						}
					}

}