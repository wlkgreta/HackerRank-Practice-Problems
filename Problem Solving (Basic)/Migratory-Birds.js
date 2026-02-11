/*

PROBLEM: Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

*/

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    let ones = 0;
    let twos = 0;
    let threes = 0;
    let fours = 0;
    let fives = 0;
    let arrOrder = arr.sort((a,b) => a-b);
    let newArray = [0];
    
    for (let i=0; i < arrOrder.length; i++) {
        switch(arrOrder[i]) {
            case 1:
                ones++;
                break;
            case 2:
                twos++;
                break;
            case 3:
                threes++;
                break;
            case 4:
                fours++;
                break;
            case 5:
                fives++;
                break;
        }
    }    
    newArray.push(ones, twos, threes, fours, fives);
    console.log(newArray);
    
    let max = newArray[1];
    for (let i=2; i<newArray.length; i++) {
        if (newArray[i] > max) {
            max = newArray[i];
        } 
    }  
    console.log(newArray.indexOf(max));
    return newArray.indexOf(max);
}
    