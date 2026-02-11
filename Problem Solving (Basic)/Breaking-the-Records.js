/*

PROBLEM: Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

*/

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let maxScore = scores[0];
    let minScore = scores[0];
    let maxBreaks = scores.reduce((result, current) => {
        if(maxScore < current) {
            result++;
            maxScore = current;
        }
        return result;
    }, 0);
    
    let minBreaks = scores.reduce((result, current) => {
        if (minScore > current) {
            result++;
            minScore = current;
        }
        return result;
    }, 0);
    return [maxBreaks, minBreaks];
}
