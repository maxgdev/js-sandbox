
// const inArray = [12, 9, 3,29, 45, 1, -17];
const inArray = [3,7,38,15,43,91,12];

const mergeSort = (arr) => {
	if(arr.length < 2){
		return arr
	}
	let middle = Math.floor(arr.length/2);
	let left = arr.slice(0, middle);
	let right = arr.slice(middle, arr.length)
	return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    let results = [];
    // using left.length && right.length
    // if either is 0 then false
	while(left.length && right.length) {
		if(left[0] <= right[0]){
			results.push(left.shift())
		} else {
			results.push(right.shift())
		}
	}
	while(left.length) {
		results.push(left.shift());
	}
	while(right.length) {
		results.push(right.shift());
	}
	return results;
}

console.log(mergeSort(inArray));