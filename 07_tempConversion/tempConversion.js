const convertToCelsius = function(temp) {
  temp = (temp - 32) * (5/9);

  if (temp === 0){
    return temp;
  } else{
    let roundedTemp = +temp.toFixed(1);

    return roundedTemp;
  }
};

const convertToFahrenheit = function(temp) {

  temp = temp * (9/5) + 32;

  if (Number.isInteger(temp)) {
    return temp;
  } else {
    let roundedTemp = +temp.toFixed(1);

    return roundedTemp;
  }

}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
