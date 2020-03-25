// Quicksort Algorith
// 
function quickSort(aInput, from, to){
    if(from < to){
        var indexOfPivot = partition(aInput, from, to); // will return the index of pivot
        quickSort(aInput, from, indexOfPivot - 1);
        quickSort(aInput, indexOfPivot + 1, to);
    }
}

function partition(aInput, from, to){
    var pivot = aInput[to];
    var wall = from; // points at first number behind our "wall"
    for(var i = from; i < to; i++){
        if(aInput[i] <= pivot){
            //swap with first number behind our wall
            var temp = aInput[wall];
            aInput[wall] = aInput[i];
            aInput[i] = temp;

            //move the "wall"
            wall++;
        }
    }
    aInput[to] = aInput[wall];
    aInput[wall] = pivot;
    return wall;
}
// median of 3 values
// 3 random index from, (from + to) / 2, to
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

    //create new array 
    //sort usign merge sort, selection sort
    //look at the middle element = element on index 1
}

function partitionMedian(aInput, from, to){
    var indexOfPivot = median(aInput, from, parseInt((from + to) / 2), to);
    var pivot = aInput[indexOfPivot];
    if(indexOfPivot !== to){
        aInput[indexOfPivot] = aInput[to];
    }
    var wall = from; // points at first number behind our "wall"
    for(var i = from; i < to; i++){
        if(aInput[i] <= pivot){
            //swap with first number behind our wall
            var temp = aInput[wall];
            aInput[wall] = aInput[i];
            aInput[i] = temp;

            //move the "wall"
            wall++;
        }
    }
    aInput[to] = aInput[wall];
    aInput[wall] = pivot;
    return wall;
}
function quickSortMedian(aInput, from, to){
    if(from < to){
        var indexOfPivot = partitionMedian(aInput, from, to); // will return the index of pivot
        quickSortMedian(aInput, from, indexOfPivot - 1);
        quickSortMedian(aInput, indexOfPivot + 1, to);
    }
}
var aInput = [100,10,15,23,2,9,28,1,36,1]
console.log(aInput);
quickSortMedian(aInput, 0, aInput.length - 1);
console.log(aInput);