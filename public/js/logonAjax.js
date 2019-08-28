    
//注册 ajax
function preg(){
	//1.创建获取xhr异步对象
	var xhr=new XMLHttpRequest();
	//4.绑定监听，获取响应
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
	var result=xhr.responseText;
			if(result==1){
				alert("注册成功");
				// console.log("注册成功");
				window.location.href="http://127.0.0.1:8080/index.html";
			}else if(result==0){
				alert("用户名或者密码错误");
				// console.log("注册失败");
				window.location.href="/userLogin.html";
			}else{
				alert(result);
			}
		}
	}
	//2.打开链接，创建请求

	xhr.open("post","/api/v1/preg",true);
	//3.发送请求
	//3.1设置请求头
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var formdata="uname="+mobileUser.value+"&phone="+mobilePhone.value+"&upwd="+passwordMobile.value;
	console.log(formdata);
	xhr.send(formdata);

}

//注册 ajax
function ereg(){
	//1.创建获取xhr异步对象
	var xhr=new XMLHttpRequest();
	//4.绑定监听，获取响应
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
	var result=xhr.responseText;
			if(result==1){
				alert("注册成功");
				// console.log("注册成功");
				window.location.href="http://127.0.0.1:8080/index.html";
			}else if(result==0){
				alert("用户名或者密码错误");
				// console.log("注册失败");
				window.location.href="/userLogin.html";
			}else{
				alert(result);
			}
		}
	}
	//2.打开链接，创建请求

	xhr.open("post","/api/v2/ereg",true);
	//3.发送请求
	//3.1设置请求头
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var formdata="uname="+emobileUser.value+"&email="+emobileEmail.value+"&upwd="+epasswordMobile.value;
	xhr.send(formdata);

}
