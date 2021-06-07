var angle = 0

var changeBackground = function(){
  angle = angle + 1
  
  document.body.style.backgroundImage = "linear-gradient("+ angle +"deg ,hsl(0, 42%, 90%), hsl(0, 100%, 98%), rgb(254,198,193))"
  console.log('rotate color');
  requestAnimationFrame(changeBackground)
}

changeBackground();
// 
function myFunction() {
  var inputObj = document.getElementById("id1");
  if(!inputObj.checkValidity()) {
    document.getElementById("demo").innerHTML = "Please provide a valid email";

      demo2 = document.getElementById("demo2");
      demo2.style = "display:block;"
  }

  else {
    document.getElementById("demo").innerHTML = "";
    demo2.style = "display:none;"
    inputObj.placeholder = "Email Address";
    
  }
}
 
//   if(input.validity.typeMismatch){  
//       input.setCustomValidity("Dude '" + input.value + "' is not a valid email. Enter something nice!!");  
//   }  
//   else {  
//       input.setCustomValidity("");  
//   }                 
// }  