const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由

//6.post的注册
// 手机注册
router.post('/v1/preg',function(req,res){
	//1.获取用户名称
	var obj=req.body;
	console.log(obj);
	if(!obj.uname){
		res.send("用户名为空");
		return;
	}
	if(!obj.phone){
		res.send("手机号为空");
		return;
	}
	// if(!$email){
	// 	res.send("邮件为空");
	// 	return;
	// }
	if(!obj.upwd){
		res.send("用户密码为空");
		return;
	}

	pool.query('INSERT INTO msj_user SET ?',[obj],function(err,result){
		if(err)throw err;
		if(result.affectedRows>0){
			res.send("1");
			console.log("注册成功");
		}else{
			res.send("0");
			console.log("注册失败");
		}
	});
});

//6.post的注册
// 邮箱注册
router.post('/v2/ereg',function(req,res){
	//1.获取用户名称
	var obj=req.body;
	console.log(obj);
	if(!obj.uname){
		res.send("用户名为空");
		return;
	}
	// if(!$phone){
	// 	res.send("手机号为空");
	// 	return;
	// }
	if(!obj.email){
		res.send("邮件为空");
		return;
	}
	if(!obj.upwd){
		res.send("用户密码为空");
		return;
	}


pool.query('INSERT INTO msj_user SET ?',[obj],function(err,result){
		if(err)throw err;
		if(result.affectedRows>0){
			res.send("1");
			console.log("注册成功");
		}else{
			res.send("0");
			console.log("注册失败");
		}
	});
});

//5.restful 风格登录get 
router.get("/v3/login/:userReg-:password",(req,res)=>{
	var $uname=req.params.userReg;
	 console.log($uname);
	var $upwd=req.params.password;
	 console.log($upwd);
	//查询数据库
	var sql="select * from msj_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(result.length>0){
			res.send("1");
			 console.log(1);
		}else{
			res.send("0");
			 console.log(0);	
		}
	
	});
});



//导出路由器
module.exports=router;

