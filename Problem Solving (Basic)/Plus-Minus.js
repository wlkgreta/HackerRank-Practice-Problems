/* 

PROBLEM: Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

*/

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let posArr = [];
    let negArr= [];
    let zeroArr = [];
    for (let i=0; i<arr.length; i++) {
        if(arr[i] === 0) {
            zeroArr.push(arr[i]);
        } else if (arr[i] < 0) {
            negArr.push(arr[i])
        } else if (arr[i] > 0) {
            posArr.push(arr[i]);
        }
    }
    const propPos = ((posArr.length)/(arr.length)).toFixed(6);
    const propNeg = ((negArr.length)/(arr.length)).toFixed(6);
    const propZero = ((zeroArr.length)/(arr.length)).toFixed(6);
    
    console.log(propPos);
    console.log(propNeg);
    console.log(propZero);
}
