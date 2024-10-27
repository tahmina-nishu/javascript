function getMin(numbers)
{   
    let min = numbers[0];
    for(const num of numbers)
    {
        min = Math.min(min,num);
    }
    return min;
}

const prices = [20000, 16000, 50000, 12000];
let maxPrice = getMin(prices);
console.log('Cheapest price is : ' + maxPrice);