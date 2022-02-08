var image1;
var image2;
function upload(){
  /*var textInput=document.getElementById("tinput");
  var textResult=textInput.value;
  alert("You chose "+textResult);*/
  var fileInput=document.getElementById("finput");
  image1 = new SimpleImage(fileInput);
  image2 = new SimpleImage(fileInput);
  var canvas=document.getElementById("can1");
  image1.drawTo(canvas);
}

function makeGray(){
  for(var pixel of image2.values()){
    var avg =((pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3);
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var canvas=document.getElementById("can2");
  image2.drawTo(canvas);
}