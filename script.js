var colorlist=[

   "rgb(255, 211, 111)",
   "rgb(25, 211, 111)",
   "rgb(255, 11, 111)",
   "rgb(255, 21, 111)",
   "rgb(55, 251, 11)",
   "rgb(55, 111, 211)"
]

var selected_color=colorlist[3];

var squares=document.querySelectorAll(".square");

var rgbh1=document.getElementById("rgbh1");

rgbh1.textContent=selected_color;

for(var i=0;i<colorlist.length;i++){
          //add colors
   squares[i].style.backgroundColor=colorlist[i];

//add events
  squares[i].addEventListener("click",function(){
    
   var color=this.style.backgroundColor;
if(color===selected_color){
   alert("you got me");
}else{
   alert("try again");
}
  });

}