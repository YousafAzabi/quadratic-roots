const {expect} = require('chai');
const {find} = require('../src/quad-roots.js');

describe('quad-roots.js module is implemented to find the roots of a quadratic equation.', () => {
  it('Test when all input given and the roots are real numbers.', () => {
    const input1 = 1;
    const input2 = 3;
    const input3 = -4;
    const expected = [1, -4];
    const output = find(input1, input2, input3);
    expect(output).to.eql(expected);
  });
});
