/*

PROBLEM: The absolute difference is the positive difference between two values a and b, is written |a-b| or |b-a| and they are equal. If a=3  and b=2 ,|3-2| = |2-3| = 1. Given an array of integers, find the minimum absolute difference between any two elements in the array.

*/


/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
    // Write your code here
    let sortedArr = arr.sort((a,b) => a-b);
    let newArr = [];
    
    for (let i=0; i<sortedArr.length; i++) {
        let difference = Math.abs(sortedArr[i+1] - sortedArr[i]);
        newArr.push(difference);
    }
    
    newArr.sort((a,b) => a-b);
    return newArr[0];
}
