// Challenges
// irritate an array 
function iterArr(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum 
}

iterArr([1,2,4])

// -----------------------------------------------------
// Sum of odd \ sum of even is the same % 2 == 0

function sum_odd_5000() {
    var sum = 0;
    for(var i = 0; i <= 5000; i++){
        if(i % 2 ==1){
            sum = sum + i
        }
    }
    return sum
}
// -----------------------------------------------------
// function that returns the maximum number in the array.

function findMax(arr) {
    var max = arr[0]
    for(var i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return max;
}
// -----------------------------------------------------
// function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findAvg(arr) {
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum / arr.length;
}