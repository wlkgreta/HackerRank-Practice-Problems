/*

PROBLEM: There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

*/


/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    // Write your code here
    let results = [];
    for (let i=0; i<queries.length; i++) {
        let integer = 0;
        for (let j=0; j<strings.length; j++) {
            if (queries[i] === strings[j]) {
                integer++;
            }
        }
        results.push(integer);
    }
    return results;   
}
