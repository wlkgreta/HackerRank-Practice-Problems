/*

PROBLEM: Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i < j  and ar[i] + ar[j]  is divisible by k.

*/

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let integer = 0;
    for(let i=0; i<=n; i++) {
        for(let j=i+1; j<=n; j++) {
            let sum = ar[i] + ar[j];
            if(sum % k === 0) {
                integer ++;
                console.log(`${integer} unique pairs found!`);
            } else {
                console.log(`no pair was found`);
            }
        }
    }
    return integer;
}
