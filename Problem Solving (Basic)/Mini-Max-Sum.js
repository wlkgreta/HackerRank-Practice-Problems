/*

PROBLEM: Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

*/

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let newArr = arr.sort();
    const minSum = newArr[0] + newArr[1] + newArr[2] + newArr[3];
    const maxSum = newArr[1] + newArr[2] + newArr[3] + newArr[4];
    const finalArray = [minSum, maxSum];    
    console.log(finalArray.join(" "));
}