/*

PROBLEM: Given an array of stick lengths, use 3 of them to construct a non-degenerate triangle with the maximum possible perimeter. Return an array of the lengths of its sides as 3 integers in non-decreasing order.

If there are several valid triangles having the maximum perimeter:

1. Choose the one with the longest maximum side.
2. If more than one has that maximum, choose from them the one with the longest minimum side.
3. If more than one has that maximum as well, print any one them.

If no non-degenerate triangle exists, return [-1].

*/

/*
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

function maximumPerimeterTriangle(sticks) {
    // Write your code here
    sticks.sort((a, b) => a - b);
    console.log(sticks);
    let triangles = [];
    for (let i=1; i<sticks.length - 1; i++) {
        if(sticks[i-1] + sticks[i] > sticks[i+1] ) {
            triangles.push([sticks[i-1], sticks[i], sticks[i+1]]);
            console.log(triangles);
        }
    }
    return triangles.pop() || [-1];
}
