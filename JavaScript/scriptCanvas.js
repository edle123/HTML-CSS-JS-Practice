function changeColor() {
  var div1 = document.getElementById("d1");
  var div2 = document.getElementById("d2");
  if (div1.className == "c1" && div2.className == "c2") {
    div1.className = "c3";
    div2.className = "c4";
  } else {
    div1.className = "c1";
    div2.className = "c2";
  }
}

function doPlum() {
  var can1 = document.getElementById("d1");
  can1.style.backgroundColor = "plum";
  var context = can1.getContext("2d");
  context.fillStyle = "lightblue";
  context.fillRect(10, 10, 60, 60);
  context.fillStyle = "black";
  context.font = "20px Arial";
  context.fillText("Hello", 15, 45);
}

function doMagenta() {
  var can1 = document.getElementById("d1");
  can1.style.backgroundColor = "magenta";
  var context = can1.getContext("2d");
  context.clearRect(0,0,can1.width,can1.height);
}