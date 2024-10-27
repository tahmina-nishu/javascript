/*
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/

function getSmallest(numbers)
{   
    let min = numbers[0];
    for(const num of numbers)
    {
        min = Math.min(min,num);
    }
    return min;
}

const heights2 = [167, 190, 120, 165, 137];
let minHeight = getSmallest(heights2);
console.log('Minimum height is : ' + minHeight);