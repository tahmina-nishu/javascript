function shoppingTotal(items)
{
    let total = 0;
    for(const product of products)
    {
        total += product.quantity * product.price;
    }
    return total;
}

const products = [
    {name: 'shampoo', price: 300, quantity: 2},
    {name: 'chiruni', price: 100, quantity: 1},
    {name: 'shirt', price: 700, quantity: 2},
    {name: 'pant', price: 1200, quantity: 1}
]

const totalCost = shoppingTotal(products);
console.log(totalCost);