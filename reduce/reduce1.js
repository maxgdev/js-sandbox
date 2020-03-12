//  Array.reduce()
// Sum of array using reduce

const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((total, amount) => total + amount); 

console.log(sum);