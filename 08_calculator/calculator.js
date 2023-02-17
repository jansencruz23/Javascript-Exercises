const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let sum = 0;
  for(let i = 0; i < a.length; i++){
    sum += a[i];
  }
	return sum;
};

const multiply = function(a) {
  let prod = 1;
  for(let i = 0; i < a.length; i++){
    prod *= a[i];
  }
	return prod;
};

const power = function(a, b) {
  let prod = 1;
  for(let i = 1; i <= b; i++){
    prod *= a;
  }
  return prod;
};

const factorial = function(num) { //5 = 5x4x3x2x1
	if(num <= 0)
    return 1;

  return num * factorial(num -1);
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
