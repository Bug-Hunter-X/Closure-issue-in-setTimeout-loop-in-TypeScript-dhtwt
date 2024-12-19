This repository demonstrates a common closure issue in JavaScript that can lead to unexpected behavior in loops when using setTimeout or similar asynchronous functions.

The `bug.ts` file shows a simple loop that prints numbers to the console. When the loop is modified to use `setTimeout` to print the numbers with a delay, the output becomes unexpected due to how closures work with asynchronous operations.

The `bugSolution.ts` file provides a solution that uses an immediately invoked function expression (IIFE) to capture the value of `i` at the time of each `setTimeout` call, resolving the issue.