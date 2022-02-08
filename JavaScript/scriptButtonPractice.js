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