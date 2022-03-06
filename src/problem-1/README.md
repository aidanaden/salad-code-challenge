# salad-problem-3

## Problem

Provide 3 unique implementations of the following function.

**Input**: `n` - any integer

_Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`_.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

```jsx
var sum_to_n_a = function (n) {
  // your code here
};

var sum_to_n_b = function (n) {
  // your code here
};

var sum_to_n_c = function (n) {
  // your code here
};
```

## Solution

```jsx
var sum_to_n_a = function (n) {
  // solve via formula
  return (n * (n + 1)) / 2;
};

var sum_to_n_b = function (n) {
  // solve via for loop
  var sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

var sum_to_n_c = function (n) {
  // solve via recursion

  // return 0 if 0
  if (n === 0) {
    return 0;
  }

  return n + sum_to_n_c(n - 1);
};
```
