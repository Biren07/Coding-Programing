const products = [
  { id: 1, name: 'Laptop', price: 1200, category: 'Electronics', inStock: true,},
  { id: 2, name: 'T-Shirt', price: 25, category: 'Clothing', inStock: true ,},
  { id: 3, name: 'Headphones', price: 150, category: 'Electronics', inStock: false, },
  { id: 4, name: 'Book', price: 15, category: 'Books', inStock: true,},
  { id: 5, name: 'Mouse', price: 30, category: 'Electronics', inStock: true, },
  { id: 6, name: 'Jeans', price: 60, category: 'Clothing', inStock: false, },
];

// Create a new array of just the product names.
const arr= products.map((item)=>item)
console.log(arr)
// Create a new array of objects containing only id and name of each product.
const brr=products.map(({id,name})=>`Product id ${id} and Product name ${name}`)
console.log(brr)
// Generate a new array where each product price is increased by 10%.
const crr= products.map(products=>({...products,
    price:products.price+products.price*10/100,
}));
console.log(crr)
// Create a new array with product names converted to uppercase.
const drr=products.map(product=>({
    ...product,name:product.name.toUpperCase(),
}))
console.log(drr)
// Add a new key discountedPrice with a 20% discount applied to each product.
const err=products.map
(product=>({
    ...product,discount:product.price*20/100,
}))
console.log(err)
// Map over the products to return an array of strings in the format: "Product: [name], Price: [price]".
const  frr= products.map(product=>`Produuct:${[product.name]} , Price:${[product.price]}`)
console.log(frr)
// Return an array where the category name is prefixed with "Category: ".
const grr=products.map(product=>({...product,category:`Category:${product.category}`}))
console.log(grr)
// Create a new array of objects containing name and inStock status.
const  hrr=products.map(product=>({
    name:`${product.name}`,
    inStock:`${product.inStock}`,
}))
console.log(hrr)
// Add a new key isPremium where true if the price > 100, else false.
const irr= products.map(product=>({...product,isPremium:product.price>100}
))
console.log(irr)
// Convert the product objects to an array of arrays   (e.g., [id, name, price, category, inStock]).
const jrr= products.map(({ id, name, price, category, inStock }) => 
  [id, name, price, category, inStock]
);
console.log(jrr)