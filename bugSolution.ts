function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

function printNumbersFixed(n: number): void {
  for (let i = 1; i <= n; i++) {
    (function(j) {
      setTimeout(() => {
        console.log(j);
      }, 1000);
    })(i);
  }
}

printNumbers2(5); // Prints 6 five times
printNumbersFixed(5); // Prints 1, 2, 3, 4, 5