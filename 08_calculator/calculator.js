const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let s = 0;
  arr.forEach(item => s += item); //iterate to add?
  return s;
};

const multiply = function(arr) {
  let m = 1;
  arr.forEach(item => m *= item);
  return m;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let f = 1;
  for (let i = 1; i <= num; i++) {
    f *= i;
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
