const convertToCelsius = function(temp) {
  let fahrenheit = (temp - 32) * (5/9);
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

const convertToFahrenheit = function(temp) {
  let celcius = (temp * (9/5)) + 32;
  celcius = Math.round(celcius * 10) / 10;
  return celcius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
