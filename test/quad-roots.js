const {expect} = require('chai');
const {find} = require('../src/quad-roots.js');

describe('quad-roots.js module is implemented to find the roots of a quadratic equation.', () => {
  it('Test when the roots are real numbers.', () => {
    const input1 = 1;
    const input2 = 3;
    const input3 = -4;
    const expected = ['1', '-4'];
    const output = find(input1, input2, input3);
    expect(output).to.eql(expected);
  });

  it('Test when the roots are complex numbers.', () => {
    const input1 = 2;
    const input2 = 6;
    const input3 = 5;
    const expected = ['-1.5 + 0.5 j', '-1.5 - 0.5 j'];
    const output = find(input1, input2, input3);
    expect(output).to.eql(expected);
  });

  it('Test when the roots when b = 0.', () => {
    const input1 = 1;
    const input2 = 0;
    const input3 = 4;
    const expected = ['0 + 2 j', '0 - 2 j'];
    const output = find(input1, input2, input3);
    expect(output).to.eql(expected);
  });

  it('Test when the roots when c = 0.', () => {
    const input1 = 2;
    const input2 = 4;
    const input3 = 0;
    const expected = ['0', '-2'];
    const output = find(input1, input2, input3);
    expect(output).to.eql(expected);
  });

  it('Test when the roots when a = 0.', () => {
    const input1 = 0;
    const input2 = 4;
    const input3 = 2;
    const expected = 'ERROR: coefficient of quadratic term cannot be 0.';
    expect(() => find(input1, input2, input3)).to.throw(expected);
  });
});
