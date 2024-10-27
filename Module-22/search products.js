function searchProducts(products, search)
{
    const matched = [];
    for(const product of products)
    {
        if(product.color.toLowerCase().includes(search.toLowerCase()))
        {
            matched.push(product);
        }
    }
    return matched;
}

const products = [
    {id:1, name: 'Xoami', price: 18000, camera: '12mp', color: 'Blue'},
    {id:2, name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {id:3, name: 'Oppo', price: 30000, camera: '12mp', color: 'blue'},
    {id:4, name: 'Iphone', price: 100000, camera: '12mp', color: 'Black'},
    {id:5, name: 'Walton', price: 31000, camera: '12mp', color: 'black'},
    {id:6, name: 'HTC', price: 27000, camera: '12mp', color: 'blue'},
]

const result = searchProducts(products, 'black');
console.log(result);