function upload(){
  /*var textInput=document.getElementById("tinput");
  var textResult=textInput.value;
  alert("You chose "+textResult);*/
  var fileInput=document.getElementById("finput");
  var image=new SimpleImage(fileInput);
  var canvas=document.getElementById("can1");
  image.drawTo(canvas);
}