function romanNumeralConverter(number) {
  var numerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  var numeral = ""
  if (number === 1) {
    numeral = numerals[0];
  }else if (number === 5) {
    numeral = numerals[1];
  }else if (number === 10) {
    numeral = numerals[2];
  }else if (number === 50) {
    numeral = numerals[3];
  }else if (number === 100) {
    numeral = numerals[4];
  }else if (number === 500) {
    numeral = numerals[5];
  }else if (number === 1000) {
    numeral = numerals[6];
  }
  return numeral;
}

function breakDownNumber(number) {
  var nums = [1000, 500, 100, 50, 10, 5, 1];
  var array = [];
  for (var i = 0; i < nums.length; i++) {
    if (number/nums[i] > 1) {
      var maxLoop = number/nums[i]
      for (var j = 1; j <= maxLoop; j++) {
        array.push(nums[i]);
        number -= nums[i];
      }
    }
  }
  return array;
}
