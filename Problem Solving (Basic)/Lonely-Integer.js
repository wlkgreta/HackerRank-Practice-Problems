/*

PROBLEM: Given an array of integers, where all elements but one occur twice, find the unique element.

*/

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    const arr = a.sort();
    let result;
    for (let i=0; i<arr.length; i++) {
        if (arr.filter(num => num == arr[i]).length == 1) {
            result = arr[i];
        }
    }
    return result;
    
}
