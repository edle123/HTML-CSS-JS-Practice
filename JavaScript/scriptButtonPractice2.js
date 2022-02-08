function onClick() {
  alert('The button has been clicked');
}

function confirmation() {
  var choice=confirm('Continue?');
  var message;
  if(choice == true){
    message = "You pressed OK!";
  }
  else{
    message = "Are you sure you want to cancel?";
  }
  alert(message);
}

function changeColor(){
  var div1=document.getElementById("d1");
  var div2=document.getElementById("d2");
  if(div1.className=="c1" && div2.className=="c2"){
    div1.className="c3";
    div2.className="c4";
  }
  else{
    div1.className="c1";
    div2.className="c2";
  }
  
}

function changeText() {
  var div1=document.getElementById("d1");
  var div2=document.getElementById("d2");
  if(div1.innerHTML=="Hello" && div2.innerHTML=="Goodbye"){
    div1.innerHTML="Ohayo";
    div2.innerHTML="Sayonara";
  }
  else{
    div1.innerHTML="Hello";
    div2.innerHTML="Goodbye";
  }
}

function divColor() {
  var div1=document.getElementById("d1").style.color="blue";
  var div2=document.getElementById("d2").style.color="cyan";
  /*div1.style.color=blue;
  div2.style.color=cyan;*/
}

function changeName() {
    var button4=document.getElementById("b4");
    if(b4.value=="This"){
      b4.value="That";
    }
    else{
      b4.value="This";
    }
}