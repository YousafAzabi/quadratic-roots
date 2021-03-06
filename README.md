[![Coverage Status](https://coveralls.io/repos/github/YousafAzabi/quadratic-roots/badge.svg)](https://coveralls.io/github/YousafAzabi/quadratic-roots)
[![Maintainability](https://api.codeclimate.com/v1/badges/09e333900f9a4459941e/maintainability)](https://codeclimate.com/github/YousafAzabi/quadratic-roots/maintainability)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FYousafAzabi%2Fquadratic-roots.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FYousafAzabi%2Fquadratic-roots?ref=badge_shield)
[![Build Status](https://travis-ci.com/YousafAzabi/quadratic-roots.svg?branch=master)](https://travis-ci.com/YousafAzabi/quadratic-roots)

# quadratic-roots
Finding roots of quadratic equation

The file `quad-roots.js` is a JS module can be implemented to find the roots of a quadratic equation.
The `quad-roots` has a function `find` which accepts three input values (a, b and c), the coefficients of the quadratic equation:

```
ax^2 + bx + c = 0
```
The return value is an array of two string, the two roots.

### Example

```js
const roots = require('./src/quad-roots.js');
const a = 1, b = 4, c = 3;

console.log(roots.find(a,b,c));  // [ '-1', '-3' ]
```
