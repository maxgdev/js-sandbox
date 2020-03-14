// Factorial function
// Using recursion. Adding console output and temp variable

function factorial(n) {
    if(n <= 1){
        return 1;
    } else {
        let tempFactorial = factorial(n-1);
        console.log(`Factorial of ${n-1} is ${tempFactorial}`)
        return n * tempFactorial;
    }
}

console.log(factorial(6));