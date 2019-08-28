function $(id){
    return typeof id==='string'?document.getElementById(id):id;
   }
   window.onload=function(){
    var navs=$('tab-nav').getElementsByTagName('li');
    var divs=$('tab-contain').getElementsByTagName('div');
    // alert(divs.length);
    if(navs.length!=divs.length){
     return;
    }
    for(var i=0;i<navs.length;i++){
     navs[i].title=i;
     navs[i].onmouseover=function(){
      for(var j=0;j<navs.length;j++){
       navs[j].className="";
       divs[j].style.display="none";
    
      }
      this.className="active";
      divs[this.title].style.display="block";
     }
    }
   }