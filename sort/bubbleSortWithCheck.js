// Bubble sort algorithm
// additional check to see if array is already sorted
function bubbleSort(inputArray){
    
    for(var outIndex = 0; outIndex < inputArray.length -1 ; outIndex++){
        let swapped = false;
        for(inIndex=0; inIndex < inputArray.length -outIndex - 1; inIndex++){
            // swap
            let nextIndex = inIndex + 1;
            if(inputArray[inIndex] > inputArray[nextIndex]) {
                swapped = true;
                let tempIndexContent = inputArray[nextIndex]
                inputArray[nextIndex] = inputArray[inIndex];
                inputArray[inIndex] = tempIndexContent;
            }
            console.log(`Outer Index: ${outIndex}, Inner Index: ${inIndex}, index content: ${inputArray[inIndex]}, next Index content: ${inputArray[nextIndex]}`)
        }
        if(!swapped) {
            return;
        }
    }
}

var inputArray1 = [101,10,15,23,2,9,28,1,36,1];
var inputArray2 = [1, 1, 2, 9, 10, 15,23,28, 36,101];

console.log(inputArray1);
bubbleSort(inputArray1);
console.log(inputArray1);
console.log("-------------------------------------------");
console.log(inputArray2);
bubbleSort(inputArray2);
console.log(inputArray2);