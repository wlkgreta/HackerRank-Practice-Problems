/*

PROBLEM: HackerLand University has the following grading policy:

- Every student receives a grade in the inclusive range from 0 to 100.
- Any grade less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's grade according to these rules:

- If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
- If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

*/

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    for (let i=0; i<grades.length; i++) {
        const one = grades[i] + 1;
        const two = grades[i] + 2;
        if(one % 5 === 0 && grades[i] < 100 && grades[i] >= 38) {
            grades[i] = one;
            console.log(grades);
        } else if (two % 5 === 0 && grades[i] < 100 && grades[i] >= 38) {
            grades[i] = two;
            console.log(grades);
        } else if (grades[i] <= 37 || grades[i] === 100) {
            console.log('no rounding');
        } 
    } 
    return grades;
}