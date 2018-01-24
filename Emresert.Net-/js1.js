(function(){
    console.log('%cMerhaba network\'e senin için bir dosya bırakdım istediğini orda bulabilirsin:)', 
    'font-size: 15px; font-style: italic; color: red');
})();

var control = 0;
function call() {
    if (control == 2)
    {   
       
       iconclose();
       control=0;
       bioclose();
    }
    else if(control ==3)
    {
       poclose(); 
       
    }
    else if (control==1)
    {
        iconclose();
        poclose();
        control=0;
    }
 
}




function bioopen() {
    
    control=1;
    var menubarclick = document.getElementById("menubar");
    menubarclick.id = "menubarhover";
 
}

function bioclose() {
    var menubarclick = document.getElementById("menubarhover");
    menubarclick.id = "menubar"; 
   
}

function poopen(){

     var open = document.getElementById("result");
     open.id="pimgdiv";
     control=2;
     
}
function poclose(){
    
    var poclose = document.getElementById("pimgdiv");
    poclose.id="result";
}

function iconopen() {
    
    control=3;
    var text = document.querySelectorAll(".description");
    var img = document.querySelectorAll(".icon");
    for (i = 0; i < text.length; i++) {
        text[i].className = "descriptionhover";
        img[i].className = "iconhover";
    }
    
}

function iconclose() {
   
    var text = document.querySelectorAll(".descriptionhover");
    var img = document.querySelectorAll(".iconhover");
    for (i = 0; i < text.length; i++) {
        text[i].className = "description";
        img[i].className = "icon";
    }
}
 var inc= 0;
function increase(){
   
    var pimg = document.getElementById("pimg");
    
   if (inc<5){
         inc+=1;
         pimg.src="pimg/p"+inc+"\."+"jpg";
   }
  
}

function decrease(){
    var pimg = document.getElementById("pimg");
    
   if (inc!=0){
         inc-=1;
         pimg.src="pimg/p"+inc+"\."+"jpg";
   }
}



setTimeout(adchanges, 3000);
function adchanges() {
    var change = document.getElementById("ad")
    change.className = "light";
    setTimeout(adold, 4000)
}

function adold() {
    var change = document.getElementById("ad")
    change.className = "normal";
    setTimeout(adchanges, 4000);
}






