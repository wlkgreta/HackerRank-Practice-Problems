/*

PROBLEM: A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

*/

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Write your code here
    let set = [...new Set(s.toLowerCase())];
    if (set.join().match(/[a-z]/g).length === 26) {
        return 'pangram';
    } else {
        return 'not pangram';
    }
}