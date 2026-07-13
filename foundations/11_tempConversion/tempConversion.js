const convertToCelsius = function(temp) {
  tempInFarh = (temp - 32) * 5/9; 
  tempInFarh = Number(tempInFarh.toFixed(1));
  return tempInFarh;
};

const convertToFahrenheit = function(temp) {
  tempInCelcius = temp * 9/5 + 32
  tempInCelcius = Number(tempInCelcius.toFixed(1));
  return tempInCelcius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
