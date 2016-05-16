$(document).ready(function() {
  $('section').html(FizzBuzz());
});
function FizzBuzz(){
  var text = '';
  for (i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
      text += "fizz buzz" + "<br/>";
    } else if (i % 3 === 0) {
      text += "fizz" + "<br/>";
    } else if (i % 5 === 0) {
      text += "buzz" + "<br/>";
    } else {
      text += i + "<br/>";
    }
  }
  return text;
}
