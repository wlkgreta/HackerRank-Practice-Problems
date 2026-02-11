/*

PROBLEM: Given an array of integers, find the longest subset where the absolute difference between any two elements is less than or equal to 1.

*/

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    a.sort((a,b) => a-b);
    let result = 0;
    const length = a.length;
    
    for (let i=0; i<length - 1; i++) {
        let count = 1;
        for (let j=i+1; j<=length; j++) {
            let diff = Math.abs(a[i] - a[j]);
            if (diff < 2) {
                count++;
            }
        }
        
        if(count > result) {
            result = count;
        }
    }
    return result
}
