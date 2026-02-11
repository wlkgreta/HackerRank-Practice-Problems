/*

PROBLEM: Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

- The length of the segment matches Ron's birth month, and,
- The sum of the integers on the squares is equal to his birth day.

Determine how many ways she can divide the chocolate.

*/

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */
        
function birthday(s, d, m) {
    // Write your code here
    let combinations = 0;
    if(s.length < m) {
        return `not possible`;
    }
    for(let i=0; i<s.length; i++) {
        let array = [s[i]];
        for(let j=1; j<m && i+j<s.length; j++) { 
            array.push(s[i+j]);
        } 
        const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
        if(sum === d && array.length === m) {
            combinations++;
        }       
    }
    return combinations;
        
}
