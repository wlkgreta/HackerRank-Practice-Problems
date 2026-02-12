/*

PROBLEM: Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

- Its length is at least 6.
- It contains at least one digit.
- It contains at least one lowercase English character.
- It contains at least one uppercase English character.
- It contains at least one special character. The special characters are: !@#$%^&*()-+
- She typed a random string of length n in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

*/

/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const numbers = /\d/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const upperCase = /[A-Z]/.test(password);
    const specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
    let minChar = 0;
    
    if (!numbers) {
        minChar += 1;
    } 
    if (!lowerCase) {
        minChar += 1;
    } 
    if (!upperCase) {
        minChar += 1;
    } 
    if (!specialCharacters) {
        minChar += 1;
    }
    
    if ((n + minChar) >= 6) {
        return minChar;
    } else {
        return 6 - n;  
    } 
    
}