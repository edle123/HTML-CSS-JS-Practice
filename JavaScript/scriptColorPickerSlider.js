function changeColor(){
  var can1=document.getElementById("c1");
  var can2=document.getElementById("c2");
  can1.style.backgroundColor = can2.value;
}

function doSquare(){
  var sliderInput=document.getElementById("c3");
  var size=sliderInput.value;
  var canvas=document.getElementById("c1");
  var context=canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height)
  context.fillStyle = "orange";
  context.fillRect(10,10,size,size);
}