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

console.log("1: ", sum_to_n_a(3));
console.log("2: ", sum_to_n_b(3));
console.log("3: ", sum_to_n_c(3));
