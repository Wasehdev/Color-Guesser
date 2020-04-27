var numSquares=6;
var colorlist=ColorGenerator(numSquares);
selected_color=randomColor();
var squares=document.querySelectorAll(".square");

var rgbh1=document.getElementById("rgbh1");
var msgDisplay= document.getElementById("messageDisplay");
var h1=document.querySelector("h1");
var newColors=document.querySelector("#newColors");
var modes=document.querySelectorAll(".mode");

rgbh1.textContent=selected_color;


  for(var i=0;i<modes.length;i++){
     modes[i].addEventListener("click", function(){
        modes[0].classList.remove("selected");
        modes[1].classList.remove("selected");
      this.classList.add("selected"); 

      this.textContent==="Easy" ? numSquares= 3 : numSquares= 6;
        reset();
      })
  }
  function reset(){

   colorlist=ColorGenerator(numSquares);
   
   selected_color=randomColor();
   msgDisplay.textContent="";
   for(var i=0;i<squares.length;i++){
      debugger;
      if(colorlist[i]){

         squares[i].style.display="block";
         squares[i].style.backgroundColor=colorlist[i];
      }
      else{
         squares[i].style.display="none";
      }
   }
   rgbh1.textContent=selected_color;
   h1.style.backgroundColor="steelblue";
   newColors.textContent="New Colors";
  }

newColors.addEventListener("click", function(){
   
   reset();
});




for(var i=0;i<colorlist.length;i++){
//add colors
   squares[i].style.backgroundColor=colorlist[i];

//add events
squares[i].addEventListener("click",function(){
    
   var color=this.style.backgroundColor;
if(color===selected_color){
   msgDisplay.textContent="Correct !"
   changeColors(color);
   h1.style.backgroundColor=color;
   newColors.textContent="Play Again?";
}else{
   this.style.backgroundColor= "#232323";
   msgDisplay.textContent="Wrong !";
}
  });

}


function changeColors(color){
   for(var i=0;i<squares.length;i++){
      //add colors
         squares[i].style.backgroundColor=color;
   }

 //  .backgroundColor=color;
}

function randomColor(){
  var randomnum= Math.floor(Math.random()*colorlist.length)
  return colorlist[randomnum];
}

function ColorGenerator(num){

   var arr=[];

   for(var i=0;i<num;i++){
      arr.push(rgbColor());
   }


   return arr;
}

function rgbColor(){

   var r= Math.floor(Math.random()*256);
   var g= Math.floor(Math.random()*256);
   var b= Math.floor(Math.random()*256);
 
  var rgb="rgb("+ r +", "+ g +", "+ b +")";

  return rgb;
}