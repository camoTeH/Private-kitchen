
$("#phbtn").click(function(){
    console.log(1);
    var $phbtn=$(this);
    var $embtn=$("#embtn");

    if($phbtn.hasClass("btnspan")){
        $phbtn.removeClass("btnspan");
        $embtn.addClass("btnspan");        
    }
    if($("div.wright").is("hidden")==false){
        $("div.wright").addClass("hidden");
        $("div.wleft").removeClass("hidden");
    }
    else if($("div.wleft").is("block")==false){
        $("div.wleft").addClass("block");  
    }
})

$("#embtn").click(function(){
    console.log(1);
    var $embtn=$(this);
    var $phbtn=$("#phbtn");

    if($embtn.hasClass("btnspan")){
        $embtn.removeClass("btnspan");
        $phbtn.addClass("btnspan");       
    }
    if($("div.wleft").is("hidden")==false){
        $("div.wleft").addClass("hidden");
        $("div.wright").removeClass("hidden");
    }
    else if($("div.wright").is("block")==false){
        $("div.wright").addClass("block");  
    }
})





    $("#loginChange0").click(function(){
        console.log(2);
        var $loginChange0=$(this);
        var $regChange0=$("#regChange0");
    
        if($regChange0.hasClass("rHidden")){
            console.log(0);
            $regChange0.removeClass("rHidden");
            $loginChange0.addClass("rHidden");        
        }
        if($("div.msjLogin0").is("rRidden")==false){
            $("div.msjLogin0").addClass("rHidden");
            $("div.msjReg0").removeClass("rHidden");
        }
        else if($("div.msjReg0").is("rBlock")==false){
            $("div.msjReg0").addClass("rBlock");  
        }
        if($("span.loginTitle").is("rRidden")==false){
            $("span.loginTitle").addClass("rHidden");
            $("span.regTitle").removeClass("rHidden");
        }
        else if($("span.regTitle").is("rBlock")==false){
            $("span.regTitle").addClass("rBlock");  
        }
    })
    
    $("#regChange0").click(function(){
        console.log(2);
        var $regChange0=$(this);
        var $loginChange0=$("#loginChange0");
    
        if($loginChange0.hasClass("rHidden")){
            console.log(0);
            $loginChange0.removeClass("rHidden");
            $regChange0.addClass("rHidden");       
        }       
        if($("div.msjReg0").is("rHidden")==false){
            $("div.msjReg0").addClass("rHidden");
            $("div.msjLogin0").removeClass("rHidden");
        }
        else if($("div.msjLogin0").is("rBlock")==false){
            $("div.msjLogin0").addClass("rBlock");  
        }
        if($("span.regTitle").is("rHidden")==false){
            $("span.regTitle").addClass("rHidden");
            $("span.loginTitle").removeClass("rHidden");
        }
        else if($("span.loginTitle").is("rBlock")==false){
            $("span.loginTitle").addClass("rBlock");  
        }
    })
    

