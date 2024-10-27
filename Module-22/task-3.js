/*
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

function calculateTotal(laptop, tablet, mobile)
{
    var laptopPrice = 35000 ;
    var tabletPrice = 15000 ;
    var mobilePrice = 20000 ;

    totalPrice = (laptop * laptopPrice) + (tablet * tabletPrice) + (mobile * mobilePrice);

    return totalPrice;
}

console.log(calculateTotal(2,2,1));