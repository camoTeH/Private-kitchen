    //登陆 ajax
	function login(){
		//1.获取xhr异步对象
		var xhr=new XMLHttpRequest();
		//4.绑定监听，获取响应
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var result=xhr.responseText;
				if(result==1){
					alert("登录成功");
					window.location.href="http://127.0.0.1:8080/index.html";
					 console.log("登陆成功");
				}else if(result==0){
					alert("用户名或者密码错误");
					window.location.href="/userReg.html";
					 console.log("用户名或者密码错误");
				}else{
					 alert(result);
				}
							
			}
		}
		if(userReg.value.length==0){
		alert("用户名不能为空");
			return;
		}
		if(password.value.length==0){
			alert("密码不能为空");
			return;
		}
		//2.打开连接，创建请求
		xhr.open("get","/api/v3/login/"+userReg.value+"-"+password.value,true);
		//3.发送请求
		xhr.send();
	}