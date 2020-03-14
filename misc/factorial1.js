// Factorial function with while loop

function factorial(n) {
    var result = n;
    while(n > 1) {
        console.log('result: '+result, 'n: '+n)
        n--;
        result = result * n;
        
    }
    return result;
}

console.log(factorial(9))