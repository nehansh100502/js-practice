// // Fabonacci series 

// // function generateFibonacci(n) {
// //     if (n <= 0) return [];
// //     if (n === 1) return [0];
// //     if (n === 2) return [0, 1];
    
// //     let fibSeries = [0, 1];
// //     for (let i = 2; i < n; i++) {
// //       fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
// //     }
// //     return fibSeries;
// //   }
  
// //   // Example usage:
// //   const n = 10; // Number of terms to generate
// //   const fibonacciSeries = generateFibonacci(n);
// //   console.log(fibonacciSeries); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

  
//   // another example 

//   function generateFibonacci(n) {
//     // Initialize the first two numbers of the Fibonacci series
//     let fibSeries = [0, 1];
    
//     // If n is 1, only return the first number
//     if (n === 1) {
//       return [0];
//     }
    
//     // Generate the Fibonacci sequence
//     for (let i = 2; i < n; i++) {
//       fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
//     }
    
//     return fibSeries;
//   }
  
//   // Example usage:
//   const n = 10; // Number of terms to generate
//   const fibonacciSeries = generateFibonacci(n);
//   console.log(fibonacciSeries); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 
  // using class contructor 
  class Fibonacci {
    constructor(n) {
      this.n = n;
    }
  
    generate() {
      if (this.n <= 0) return [];
      if (this.n === 1) return [0];
      if (this.n === 2) return [0, 1];
      
      let fibSeries = [0, 1];
      for (let i = 2; i < this.n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
      }
      return fibSeries;
    }
  }
  
  // Example usage:
  const n = 10; // Number of terms to generate
  const fibonacci = new Fibonacci(n);
  const fibonacciSeries = fibonacci.generate();
  console.log(fibonacciSeries); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  