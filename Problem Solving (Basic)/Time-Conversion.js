/*

PROBLEM: Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

*/

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let lastTwo = s.substring(8);
    let fullTime = s.substring(0, 8);
    let times = fullTime.split(':');
    
    if(lastTwo === 'PM') {
        if(times[0] != '12') {
            times[0] = parseInt(times[0]) + 12;
        }
    } else {
        if (times[0] === '12') {
            times[0] = '00';
        }
    }
    
    return times.join(':');
}
