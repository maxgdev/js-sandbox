function bubbleSort(aInput){
    for(var i = 0;i < aInput.length - 1; i++){
        for(var j = 0; j < aInput.length - i - 1; j++){
            if(aInput[j] > aInput[j + 1]){
                var temp = aInput[j];
                aInput[j] = aInput[j + 1];
                aInput[j + 1] = temp;
            }
        }
    }
}
function bubbleSortOptimalized(aInput){
    for(var i = 0;i < aInput.length - 1; i++){
        var swapHappend = false;
        for(var j = 0; j < aInput.length - i - 1; j++){
            if(aInput[j] > aInput[j + 1]){
                swapHappend = true;
                var temp = aInput[j];
                aInput[j] = aInput[j + 1];
                aInput[j + 1] = temp;
            }
        }
        if(!swapHappend){
            return;
        }
    }
}
function selectionSort(aInput){
    for(var wall = 0; wall < aInput.length - 1; wall++){
        var indexOfSmallest = wall;
        for(var j = wall + 1; j < aInput.length; j++){
            if(aInput[indexOfSmallest] > aInput[j]){
                indexOfSmallest = j;
            }
        }
        var temp = aInput[wall];
        aInput[wall] = aInput[indexOfSmallest];
        aInput[indexOfSmallest] = temp;
    }
}
function quickSort(aInput, from, to){
    if(from < to){
        var indexOfPivot = partition(aInput, from, to);
        quickSort(aInput, from, indexOfPivot - 1);
        quickSort(aInput, indexOfPivot + 1, to)
    }
}
function partition(aInput, from, to){
    var pivot = aInput[to];
    var wall = from;
    for(var i = from; i < to; i++){
        if(aInput[i] <= pivot){
            //swap
            var temp = aInput[wall];
            aInput[wall] = aInput[i];
            aInput[i] = temp;
            wall++;
        }
    }
   
    aInput[to] = aInput[wall];
    aInput[wall] = pivot;
    return wall;
}
function mergeSort(aInput, from, to){
    if(to - from < 1){
        return;
    }else{
        var middle = parseInt((to + from) / 2);
        mergeSort(aInput, from, middle);
        mergeSort(aInput, middle + 1, to);
        merge(aInput, from, middle, to);
    }
}
function merge(aOutput, from, middle, to){
    var left = aOutput.slice(from, middle + 1);
    var right = aOutput.slice(middle + 1, to + 1);
    var leftPointer = 0;
    var rightPointer = 0;
    for(var i = from; i <= to; i++){
        if(leftPointer === left.length){
            while(rightPointer < right.length){
                aOutput[i] = right[rightPointer];
                rightPointer++;
                i++;
            }
            return;
        }
        if(rightPointer === right.length){
            while(leftPointer < left.length){
                aOutput[i] = left[leftPointer];
                leftPointer++;
                i++;
            }
            return;
        }
        if(left[leftPointer] <= right[rightPointer]){
            aOutput[i] = left[leftPointer];
            leftPointer++;
        }else{
            aOutput[i] = right[rightPointer];
            rightPointer++;
        }
    }
}
function quickSortMedian(aInput, from, to){
    if(from < to){
        var indexOfPivot = partitionMedian(aInput, from, to);
        quickSortMedian(aInput, from, indexOfPivot - 1);
        quickSortMedian(aInput, indexOfPivot + 1, to)
    }
}
function median(aInput, first, second, third){
    var bFirstSmallerThanSecond = (aInput[first] < aInput[second]);
    var bSecondSmallerThanThird = (aInput[second] < aInput[third]);
    if(bFirstSmallerThanSecond &&
        bSecondSmallerThanThird){
            return second;
    }
    if(!bFirstSmallerThanSecond &&
        !bSecondSmallerThanThird){
            return second;
    }
    if(!bFirstSmallerThanSecond &&
        bSecondSmallerThanThird){
        if((aInput[first] < aInput[third])){
                return first;
        }else{
                return third;
        }
    }
    if(bFirstSmallerThanSecond &&
        !bSecondSmallerThanThird){
        if((aInput[first] < aInput[third])){
                return third;
        }else{
                return first;
        }
    }
}
function partitionMedian(aInput, from, to){
    var indexOfPivot = median(aInput, from, parseInt((from + to) / 2), to);
    var pivot = aInput[indexOfPivot];
    if(indexOfPivot != to){
        aInput[indexOfPivot] = aInput[to];
    }
    var wall = from;
    for(var i = from; i < to; i++){
        if(aInput[i] <= pivot){
            var temp = aInput[wall];
            aInput[wall] = aInput[i];
            aInput[i] = temp;
            wall++;
        }
    }
    aInput[to] = aInput[wall];
    aInput[wall] = pivot;
    return wall;
}
function quickSortExecutor(aInput){
    quickSort(aInput, 0, aInput.length -1);
}
function quickSortMedianExecutor(aInput){
    quickSortMedian(aInput, 0, aInput.length -1);
}
function mergeSortExecutor(aInput){
    mergeSort(aInput, 0, aInput.length -1);
}
function isSorted(aInput){
    for(var i = 0; i < aInput.length - 1; i++){
        if(aInput[i] > aInput[i + 1]){
            return false;
        }
    }
    return true;
}
var NUMBER_OF_ARRAYS = 10;
var ELEMENTS_PER_ARRAY = 10000;

var aSortingAlgorithms = [bubbleSort, selectionSort, 
    bubbleSortOptimalized, mergeSortExecutor, quickSortExecutor, quickSortMedianExecutor]
for(var k = 0; k < aSortingAlgorithms.length; k++){
    var start = new Date().getTime();
    for(var i = 0; i < NUMBER_OF_ARRAYS; i++){
        var aInput = [];
        for(var j = 0; j < ELEMENTS_PER_ARRAY; j++){
            aInput[j] = Math.floor(Math.random() * 100);
        }
        aSortingAlgorithms[k](aInput);
        if(!isSorted(aInput)){
            console.log("ERROR: Array is not sorted " + aInput);
        }
    }
    var end = new Date().getTime();
    console.log(k + " took: "+ (end - start) + " ms");
}