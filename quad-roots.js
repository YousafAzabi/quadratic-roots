//module to calcualte the roots of a Quadratic Equation
exports.find = (a, b, c) => {

  let sqrt = Math.pow(b, 2) - (4 * a * c);
  let term1 = (-b) / (2 * a);
  let term2 = Math.sqrt(Math.abs(sqrt)) / (2 * a);

  if (sqrt < 0) {
    return [term1 + ' + ' + term2 + ' j ' , term1 + ' - ' + term2 + ' j ' ];
  }
  return [(term1 + term2), (term1 - term2)]; 
};
