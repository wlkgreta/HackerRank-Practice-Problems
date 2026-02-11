/*

PROBLEM: There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

*/

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    ar.sort((a,b) => a - b);
    let matchesArr = [];
    let nonMatches = [];
    for (let i=0; i < ar.length; i++) {
        do {
            ar[0] === ar[1] ? matchesArr.push(ar.splice(0,2)) : nonMatches.push(ar.splice(0,1));
        } while (ar.length >= 3);
    }
    return matchesArr.length;
}
