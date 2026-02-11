/*

PROBLEM: Given a list of integers, count and return the number of times each value appears as an array of integers.

*/

/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Write your code here
    const intArray = Array(arr.length).fill(0);
    for(let number in intArray) {
        intArray[arr[number]] +=1
    }
    return intArray.slice(0, 100);

}
