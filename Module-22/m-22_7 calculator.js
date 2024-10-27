function add(n1, n2)
{
    return n1 + n2;
}
function subtract(n1, n2)
{
    return n1 - n2;
}
function multiply(n1, n2)
{
    return n1 * n2;
}
function divide(n1, n2)
{
    return n1 / n2;
}

function calculator(a, b, operation)
{
    if(operation === 'add')
        return add(a, b);

    else if(operation === 'subtract')
        return subtract(a, b);

    else if(operation === 'multiply')
        return multiply(a, b);

    else if(operation === 'divide')
        return divide(a, b);
    
    else
        return "Only add, subtract, multiply & divide are allowed";
}

let result = calculator(5, 7, 'add');
console.log(result);

result = calculator(5, 7, 'subtract');
console.log(result);

result = calculator(5, 7, 'multiply');
console.log(result);

result = calculator(5, 7, 'divide');
console.log(result);