// mergeSort
// credit: https://www.youtube.com/watch?v=oMuPkJw3BTc

// const unsortedArray = [2,1,2,1]
const unsortedArray = [9, 3,22, 4,9,1 , -33, 99]

function mergeSort(inputArray){
	if(inputArray.length < 2 ) return inputArray
	const middle = Math.floor(inputArray.length / 2)
	const left = inputArray.slice(0, middle)
	const right = inputArray.slice(middle)
	return mergeSortLeftAndRight(
		mergeSort(left), 
		mergeSort(right)
	)
}

function mergeSortLeftAndRight(left, right){
	let resultArray = [];
	while(left.length > 0 && right.length > 0) {
		if(left[0] < right[0]){
			resultArray.push(left.shift())
		} else {
			resultArray.push(right.shift())
		}
	}
	return [...resultArray, ...left, ...right]
}
console.log(mergeSort(unsortedArray))