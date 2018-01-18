$(document).ready(function() {

var alphaUpper = function (array) {
  var alphUpperArray = array.sort().toString().toUpperCase().split(" ");
  return alphUpperArray
}
  var array = [];

  $("button.btn").click(function() {
    var inputItem = $("input#input").val();
    array.push(inputItem);
    var upperArray = alphaUpper(array);
    $("ul").prepend("<li>" + inputItem + "</li>");
    event.preventDefault();
    });
  });
