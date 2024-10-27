/*
Find the friend with the smallest name.
const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

function getSmallest(names)
{   
    var smallestLength = Infinity;
    let smallest = '';
    
    for(const name of names)
    {
        var len = name.length;
        if(smallestLength > len)
        {
            smallestLength = len;
            smallest = name;
        }
    }
    return smallest;
}

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallestName = getSmallest(names);
console.log('Smallest name is : ' + smallestName);