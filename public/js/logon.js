//定义方法分别校验个个表单项
window.onload = function(){
    //给表单绑定unssubmit事件,监听器校验每一个结果
    document.getElementById("logonfrom").onsubmit = function(){
        
        //调用用户名校验方法checkUsername             
        return checksUsername()&&checkUsername();

        //调用用户手机号校验方法checkUsername              
        return checksUserPhone()&&checkUserPhone();

        //调用用户密码校验方法checkUsername              
        return checksUserPassword()&&checkUserPassword();



    }
    //给表单绑定unssubmit事件,监听器校验每一个结果
    document.getElementById("elogonfrom").onsubmit = function(){
        
        //调用用户名校验方法checkUsername             
        return echecksUsername()&&echeckUsername();

        //调用用户邮箱校验方法checkUsername              
        return echecksUserEmail()&&echeckUserEmail();

        //调用用户密码校验方法checkUsername              
        return echecksUserPassword()&&echeckUserPassword();



    }


    document.getElementById("formReg").onsubmit = function(){
        //调用用户名校验方法checkUsername
        return checkUserReg();
    }

    //给用户绑定离焦事件
    document.getElementById("userReg").onblur = checkUserReg;


    //给用户名绑定离焦事件
    document.getElementById("mobileUser").onblur = checkUsername;

     //给用户手机号绑定离焦事件
    document.getElementById("mobilePhone").onblur = checkUserPhone;

    //给用户密码绑定离焦事件
    document.getElementById("passwordMobile").onblur = checkUserPassword;


    //给用户名绑定离焦事件
    document.getElementById("emobileUser").onblur = echeckUsername;

     //给用户邮箱绑定离焦事件
    document.getElementById("emobileEmail").onblur = echeckUserEmail;

    //给用户密码绑定离焦事件
    document.getElementById("epasswordMobile").onblur = echeckUserPassword;



    //给用户名绑定获取焦事件
    document.getElementById("userReg").onfocus = checksUserReg;


    //给用户名绑定获取焦事件
    // document.getElementById("mobileUser").onfocus = checksUsername;

    //给用户手机号绑定获取焦事件
    document.getElementById("mobilePhone").onfocus = checksUserPhone;

     //给用户密码绑定获取焦事件
     document.getElementById("passwordMobile").onfocus = checksUserPassword;



     //给用户名绑定获取焦事件
    document.getElementById("emobileUser").onfocus = echecksUsername;

    //给用户邮箱绑定获取焦事件
    document.getElementById("emobileEmail").onfocus = echecksUserEmail;

     //给用户密码绑定获取焦事件
     document.getElementById("epasswordMobile").onfocus = echecksUserPassword;
      
  }


//-----------------------------------------------------------
//用户名校验方法checkUsername
function checksUserReg(){
    //获取用户名的值
    var mobileUser = document.getElementById("mobileUser").value;			  
    //获取div
    var nameTips = document.getElementById("nameTips");
    var nameCor = document.getElementById("nameCor");

    nameTips.className="blue"
    nameCor.className="rHidden"
    return;
  }



  //用户名校验方法checkUsername
function checkUsername(){
    //获取用户名的值
    var username = document.getElementById("mobileUser").value;			
    //用正则表达式
    var name =/^[a-zA-Z0-9\u4E00-\u9FA5]{2,6}$/;
    //判断值是否符合正则的规则
    var flag = name.test(username);
    //提示信息
    
    //获取div
    var nameTips = document.getElementById("nameTips");
    var nameCor = document.getElementById("nameCor");
    if(flag){
        //提示正确后面绿色
         nameTips.className="rHidden"
        nameCor.className=""
    }else{
        //提示错误后面显示红方块
        nameCor.className="rHidden"
        nameTips.className="red"
    }
    return flag;
  }

//-----------------------------------------------------------

  //用户手机号校验方法checkUsername
function checksUserPhone(){
    //获取用户名的值
    var mobilePhone = document.getElementById("mobilePhone").value;			  
    //获取div
    var phoneTips = document.getElementById("phoneTips");
    var phoneCor = document.getElementById("phoneCor");

    phoneTips.className="blue"
    phoneCor.className="rHidden"
    return;
  }



  //用户手机号校验方法checkUsername
function checkUserPhone(){
    //获取用户手机号的值
    var userPhone = document.getElementById("mobilePhone").value;			
    //用正则表达式
    var phone =/^1[3|4|5|7|8]\d{9}$/;
    //判断值是否符合正则的规则
    var flag = phone.test(userPhone);
    //提示信息
    
    //获取div
    var phoneTips = document.getElementById("phoneTips");
    var phoneCor = document.getElementById("phoneCor");
    if(flag){
        //提示正确后面绿色
         phoneTips.className="rHidden"
         phoneCor.className=""
    }else{
        //提示错误后面显示红方块
        
        phoneTips.className="red"
    }
    return flag;
  }
  

  //-----------------------------------------------------------

  //用户密码校验方法checkUsername
function checksUserPassword(){
    //获取密码的值
    var passwordMobile = document.getElementById("passwordMobile").value;			  
    //获取div
    var passwordTips = document.getElementById("passwordTips");
    var passwordCor = document.getElementById("passwordCor");

    passwordTips.className="blue"
    passwordCor.className="rHidden"
    return;
  }



  //用户密码校验方法checkUsername
function checkUserPassword(){
    //获取用户密码的值
    var passwordMobile = document.getElementById("passwordMobile").value;			
    //用正则表达式
    var password =/^[0-9a-zA-Z]{6,16}$/;
    //判断值是否符合正则的规则
    var flag = password.test(passwordMobile);
    //提示信息
    
    //获取div
    var passwordTips = document.getElementById("passwordTips");
    var passwordCor = document.getElementById("passwordCor");
    if(flag){
        //提示正确后面绿色
        passwordTips.className="rHidden"
        passwordCor.className=""
    }else{
        //提示错误后面显示红方块
        
        passwordTips.className="red"
    }
    return flag;
  }
  








  
//-----------------------------------------------------------
//用户名校验方法echeckUsername
function echecksUsername(){
    //获取用户名的值
    var emobileUser = document.getElementById("emobileUser").value;			  
    //获取div
    var enameTips = document.getElementById("enameTips");
    var enameCor = document.getElementById("enameCor");

    enameTips.className="blue"
    enameCor.className="rHidden"
    return;
  }



  //用户名校验方法checkUsername
function echeckUsername(){
    //获取用户名的值
    var eusername = document.getElementById("emobileUser").value;			
    //用正则表达式
    var name =/^[a-zA-Z0-9\u4E00-\u9FA5]{2,6}$/;
    //判断值是否符合正则的规则
    var flag = name.test(eusername);
    //提示信息
    
    //获取div
    var enameTips = document.getElementById("enameTips");
    var enameCor = document.getElementById("enameCor");
    if(flag){
        //提示正确后面绿色
         enameTips.className="rHidden"
        enameCor.className=""
    }else{
        //提示错误后面显示红方块
        
        enameTips.className="red"
    }
    return flag;
  }

//-----------------------------------------------------------

  //用户邮箱校验方法checkUsername
function echecksUserEmail(){
    //获取用户名的值
    var emobileEmail = document.getElementById("emobileEmail").value;			  
    //获取div
    var emailTips = document.getElementById("emailTips");
    var emailCor = document.getElementById("emailCor");

    emailTips.className="blue"
    emailCor.className="rHidden"
    return;
  }



  //用户邮箱校验方法checkUsername
function echeckUserEmail(){
    //获取用户名的值
    var emobileEmail = document.getElementById("emobileEmail").value;			
    //用正则表达式
    var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //判断值是否符合正则的规则
    var flag = email.test(emobileEmail);
    //提示信息
    
    //获取div
    var emailTips = document.getElementById("emailTips");
    var emailCor = document.getElementById("emailCor");
    if(flag){
        //提示正确后面绿色
        emailTips.className="rHidden"
        emailCor.className=""
    }else{
        //提示错误后面显示红方块
        
        emailTips.className="red"
    }
    return flag;
  }
  

  //-----------------------------------------------------------

  //用户密码校验方法checkUsername
function echecksUserPassword(){
    //获取用户名的值
    var epasswordMobile = document.getElementById("epasswordMobile").value;			  
    //获取div
    var epasswordTips = document.getElementById("epasswordTips");
    var epasswordCor = document.getElementById("epasswordCor");

    epasswordTips.className="blue"
    epasswordCor.className="rHidden"
    return;
  }



  //用户密码校验方法checkUsername
function echeckUserPassword(){
    //获取用户名的值
    var epasswordMobile = document.getElementById("epasswordMobile").value;			
    //用正则表达式
    var password = /^[0-9a-zA-Z]{6,16}$/;
    //判断值是否符合正则的规则
    var flag = password.test(epasswordMobile);
    //提示信息
    
    //获取div
    var epasswordTips = document.getElementById("epasswordTips");
    var epasswordCor = document.getElementById("epasswordCor");
    if(flag){
        //提示正确后面绿色
        epasswordTips.className="rHidden"
        epasswordCor.className=""
    }else{
        //提示错误后面显示红方块
        
        epasswordTips.className="red"
    }
    return flag;
  }
  


  //--------------------------------
// 用户登陆
//   function checksUsername(){
//     //获取用户名的值
//     var mobileUser = document.getElementById("userReg").value;			  
//     //获取div
//     var nameTips = document.getElementById("loginTip");

//     loginTip.className="rHidden"
//     return;
//   }

  function checkUserReg(){
    //获取用户名的值
    var userReg = document.getElementById("userReg").value;			
    //用正则表达式 
    var user=/^\w{3,16}$/;
    // var regName =/^[a-zA-Z0-9\u4E00-\u9FA5]{2,6}$/;
    // var regPhone=/^1[3|4|5|7|8]\d{9}$/;
    // var regEmail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //判断值是否符合正则的规则
    var flag = user.test(userReg);
    //提示信息
    
    //获取span
    var loginTip = document.getElementById("loginTip");
    if(flag){
        //提示正确后面绿色
        
        loginTip.className="rHidden"
    }else{
        //提示错误后面显示红方块
        loginTip.className=""
    }
    return flag;
  }