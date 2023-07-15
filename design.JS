var a=Math.floor(Math.random()*100)+1;
var count=0;


function guessnumber(){
   var val= parseInt(document.getElementById("guessid").value);
   if(val==a){
    document.getElementById("result").textContent="Congratulations!!!!,you got the number in"+(count+1)+" tries" ;
   }
   else if(val<a){
       count++;
    document.getElementById("result").textContent=count+"Try with a greater number";
   }
   else{
       count++;
    document.getElementById("result").textContent=count+"Try with a smaller number";
   }
}