function getSmallest(numbers)
{   
    let max = numbers[0];
    for(const num of numbers)
    {
        max = Math.max(max,num);
    }
    return max;
}

const heights = [65, 66, 68, 72, 78, 60, 65, 66,80];
let maxHeight = getSmallest(heights);
console.log('Maximum height is : ' + minHeight);