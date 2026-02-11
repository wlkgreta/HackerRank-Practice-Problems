/*

PROBLEM: Given a square matrix, calculate the absolute difference between the sums of its diagonals.

*/

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    const n = arr.length;
    let primary = 0;
    let secondary = 0;
    for (let i=0; i< n; i++) {
        for (let j=0; j< n; j++) {
            if (i === j) {
                primary += arr[i][j];
            }
            if (i + j === n -1) {
                secondary += arr[i][j];
            }
        }
    }
    return Math.abs(primary - secondary);
}
