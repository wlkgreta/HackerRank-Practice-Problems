/*

PROBLEM: Given two arrays of integers, find which elements in the second array are missing from the first array.

The brr array is the orginal list.

Notes

- If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same. If that is not the case, then it is also a missing number.
- Return the missing numbers sorted ascending.
- Only include a missing number once, even if it is missing multiple times.
- The difference between the maximum and minimum numbers in the original list is less than or equal to 100.

*/






/*
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

function missingNumbers(arr, brr) {
    // Write your code here
    let counts = {};
    let result = [];

    // Count frequencies of num in brr
    for (let num of brr) {
        counts[num] = (counts[num] || 0) + 1;
    }

    // Subtract frequencies based on the shorter array arr
    for (let num of arr) {
        counts[num]--;
    }

    // Any number with a count > 0 is missing or occurs less frequently
    for (let num in counts) {
        if (counts[num] > 0) {
            result.push(Number(num));
        }
    }

    return result.sort((a, b) => a - b);
}
