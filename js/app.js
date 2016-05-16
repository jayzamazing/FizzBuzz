$(document).ready(function() {
  $('#fizzBuzzForm').submit(function(e) {
    var temp = parseInt($('#fizzBuzzInput').val());
    if (isNaN(temp)) {
      $('.errorText').removeClass('error');
    } else {
      var max = parseInt(temp);
      $('.errorText').addClass('error');
      $('#fizzBuzzOutput').html(FizzBuzz(max));
    }
    e.preventDefault();
  });
});
function FizzBuzz(max){
  var text = '';
  for (i = 1; i <= max; i++){
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
