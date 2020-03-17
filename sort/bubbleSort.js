// Bubble sort algorithm
// REVIEW 17/3/20

function bubbleSort(inputArray){
    
    for(var outIndex = 0; outIndex < inputArray.length -1 ; outIndex++){
        
        for(inIndex=0; inIndex < inputArray.length -outIndex - 1; inIndex++){
            
            let nextIndex = inIndex + 1;
            if(inputArray[inIndex] > inputArray[nextIndex]) {
                
                let tempIndexContent = inputArray[nextIndex]
                inputArray[nextIndex] = inputArray[inIndex];
                inputArray[inIndex] = tempIndexContent;
            }
            console.log(`Outer Index: ${outIndex}, Inner Index: ${inIndex}, index content: ${inputArray[inIndex]}, next Index content: ${inputArray[nextIndex]}`)
        }

    }
}

var inputArray = [101,10,15,23,2,9,28,1,36,1];

console.log(inputArray)
bubbleSort(inputArray);
console.log(inputArray)