/*

PROBLEM: Sorting is useful as the first step in many different tasks. The most common task is to make finding things easier, but there are other uses as well. In this case, it will make it easier to determine which pair or pairs of elements have the smallest absolute difference between them.

*/

/*
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
    let sortedArr = arr.sort((a,b) => a-b);
    let pairs = [];
    
    for (let i=0; i<sortedArr.length; i++) {
        let number = sortedArr[i+1] - sortedArr[i];
        let difference = Math.abs(number); 
        
        if (pairs.length === 0) {
            pairs.push(sortedArr[i], sortedArr[i+1]);
        } else if (difference === (pairs[1] - pairs[0])) {
            pairs.push(sortedArr[i], sortedArr[i+1]);
        } else if (difference < (pairs[1] - pairs[0])){
            pairs = [];
            pairs.push(sortedArr[i], sortedArr[i+1]);
        } else {
            console.log('this is not the smallest difference');
        }
    }
    return pairs;    
}   
