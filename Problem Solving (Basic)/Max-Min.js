/* 

PROBLEM: You will be given a list of integers, arr, and a single integer, k. You must create an array of length k from elements of arr such that its unfairness is minimized. Call that array arr. Unfairness of an array is calculated as

max(arr) - min(arr)

Where:
- max denotes the largest integer in arr. 
- min denotes the smallest integer in arr.

*/

/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
*/

function maxMin(k, arr) {
    // Write your code here
    let arrSorted = arr.sort((a,b) => a-b);
    let minDiff = (arrSorted[0+(k-1)] - arrSorted[0]);
    let minIndex = 0; 
        
    for (let i=1; i<arrSorted.length; i++) {
        if (((arrSorted.length) - i) >= k && (arrSorted[i + (k-1)] - arrSorted[i]) < minDiff) {
            minDiff = (arrSorted[i + (k-1)] - arrSorted[i]);
            minIndex = i;
        }
    }
    
    return minDiff;
  
}
