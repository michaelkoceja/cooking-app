var cookConvert = function(gallon1) {
  return gallon1 * 3.78;
}

var gallon1 = parseInt(prompt("How many gallons do you have?"));
var results = cookConvert(gallon1);
alert(results);
