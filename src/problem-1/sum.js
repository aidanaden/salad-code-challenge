var sum_to_n_a = function (n) {
  // your code here
  return (n * (n + 1)) / 2;
};

var sum_to_n_b = function (n) {
  // your code here
  var sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

var sum_to_n_c = function (n) {
  // guard statements

  // return 0 if 0
  if (n === 0) {
    return 0;
  }

  // return 1 if 1
  if (n === 1) {
    return 1;
  }

  return n + sum_to_n_c(n - 1);
};

console.log("1: ", sum_to_n_a(10));
console.log("2: ", sum_to_n_b(10));
console.log("3: ", sum_to_n_c(10));
