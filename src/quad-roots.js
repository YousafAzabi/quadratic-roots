//module to calcualte the roots of a Quadratic Equation
exports.find = (a, b, c) => {

  if(a == 0) { //throw error if quadratic term coefficient is zero
    throw 'ERROR: coefficient of quadratic term cannot be 0.';
  }

  const sqrt = Math.pow(b, 2) - (4 * a * c); //calculate the value under square-root
  const term1 = (-b) / (2 * a);
  const term2 = Math.sqrt(Math.abs(sqrt)) / (2 * a);

  if (sqrt < 0) { // check if sqaure-root is negative
    return [term1 + ' + ' + term2 + ' j' , term1 + ' - ' + term2 + ' j' ]; //return complex roots
  }
  return [(term1 + term2).toString(), (term1 - term2).toString()]; //return real number roots
};
