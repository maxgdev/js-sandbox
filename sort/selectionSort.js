// Selection Sort
// Sort an array in ascending order using a for loop

function selectionSort(inputArray) {
    for(var split = 0; split < inputArray.length -1; split++){
        let smallestNumIndex = split;
        for(var innerLoop = split; innerLoop < inputArray.length; innerLoop++){
            if(inputArray[smallestNumIndex] > inputArray[innerLoop]){
                smallestNumIndex = innerLoop;
            }
            console.log(`split: ${split}, smallestNumIndex: ${smallestNumIndex}, Number: ${inputArray[smallestNumIndex]}, innerLoop: ${innerLoop}`)
        }
        let tempNumber = inputArray[split];
        inputArray[split] = inputArray[smallestNumIndex];
        inputArray[smallestNumIndex] = tempNumber; 
    }
}

var inputArray = [101,10,15,23,2,9,28,1,36,1];
console.log(inputArray)
selectionSort(inputArray);
console.log(inputArray)
