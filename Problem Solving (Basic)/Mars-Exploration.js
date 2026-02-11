/*

PROBLEM: A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, s, determine how many letters of the SOS message have been changed by radiation.

*/

/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    // Write your code here
    let counter = 0;
    let sArray = s.match(/.{3}/g);
    let goodArray = [];
    let wrongArray = [];
    for(let i=0; i<sArray.length; i++) {
            if (sArray[i] === 'SOS') {
                goodArray.push(sArray[i]);
            } else if(sArray[i] !== 'SOS') {
                wrongArray.push(sArray[i]);
            }
    }
    
    wrongArray.map((message) => {
        if (message[0] !== 'S') {
            counter+=1;
        }
        if(message[1] !== 'O') {
            counter+=1;
        }
        if(message[2] !== 'S') {
            counter+=1;
        }
    });
    
    return counter;
}
