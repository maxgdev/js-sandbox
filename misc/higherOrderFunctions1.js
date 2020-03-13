// {
// 	function multiply(num1Fn, num2Fn) {
// 		return num1Fn(2) * num2Fn(3);	
// 	}
// 	let x = multiply(
// 	   function(n) { return n * 3;},
// 	   function(m) {return m * 4;}
// 	);
// 	console.log(x);
// }

// {

// 	function multiply() {
// 		return function() {
// 			return function () {
// 			    return  3 * 4}
// 		};
// 	}
// 	let result = multiply()()();
// 	console.log('The result is: ', result);
// }


// multiply(()=>2, ()=> 3) === 6
// multiply(()=>5, ()=> 7) === 35
// multiply(()=> 12) === 12

function multiply(fn1, fn2) {
    return fn2 ? fn1() * fn2() : fn1();
}
console.log(multiply(()=>2, ()=> 3));
console.log(multiply(()=>5, ()=> 7));
console.log(multiply(()=> 12));
