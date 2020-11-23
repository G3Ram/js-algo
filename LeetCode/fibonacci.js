// 0 1 1 2 3 5 8 11
fibonacci = (n) => {
  if (n < 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
};

console.log(fibonacci(10));
