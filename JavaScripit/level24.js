const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Book", category: "Books", price: 25, inStock: true },
  { id: 3, name: "Headphones", category: "Electronics", price: 150, inStock: false },
  { id: 4, name: "Notebook", category: "Stationery", price: 5, inStock: true },
  { id: 5, name: "Tablet", category: "Electronics", price: 300, inStock: true },
  { id: 6, name: "Pen", category: "Stationery", price: 2, inStock: true },
  { id: 7, name: "Keyboard", category: "Electronics", price: 75, inStock: false },
  { id: 8, name: "Novel", category: "Books", price: 15, inStock: true },
  { id: 9, name: "Mouse", category: "Electronics", price: 25, inStock: true },
  { id: 10, name: "Ruler", category: "Stationery", price: 1, inStock: true },
];

// Find the average price of all products in the "Electronics" category that are in stock. (Combine filter and reduce)  
const arr=products.filter((products)=>{
    return products.category==="Electronics" && products.inStock===true
})
const avg=arr.reduce((acc,products)=>{
    return acc+products.price
},0)/arr.length
console.log(avg)
// Create an array of strings. Each string should be formatted like this:  "Product Name (Category): Price - Status".  Only include products that are either "Books" or "Stationery". (Combine filter and map)
const brr=products.filter((products)=>{
    return products.category==="Books" || products.category==="Stationery"
})  
const crr=brr.map((products)=>{
    return `${products.name} (${products.category}): ${products.price} - ${products.inStock ? "In Stock" : "Out of Stock"}`
})
console.log(crr)

// Calculate the total value of all "Electronics" products in stock (price * quantity). Assume a default quantity of 1 for each product if quantity property does not exist. (Combine filter, map, and reduce)
const drr=products.filter((products)=>{
    return products.category==="Electronics" && products.inStock===true
}).reduce((acc,product)=>{
    return acc+product.price*(product.quantity || 1)
},0)
console.log(drr)

// Create a new array of objects. Each object should contain the product name, category, and a boolean property "isAffordable". "isAffordable" should be true if the product's price is less than the average price of all products in the same category. (Combine map, filter, and reduce - requires a nested calculation)
const err= products.map((product)=>{
    const avgPrice=products.filter((p)=>{
        return p.category===product.category
    }).reduce((acc, p)=>{
        return acc+p.price
    },0)/products.filter((p)=>{
        return p.category===product.category
    }).length
    return {
        name: product.name,
        category: product.category,
        isAffordable: product.price<avgPrice
    }
})
console.log(err)

// Create a function that takes a category as an argument and returns an array of product names in that category, sorted alphabetically. If the category does not exist, return an empty array. (Combine filter, map, and sort - which can be used within the map or separately).
function getProduct(category)
{
    const grr= products.filter((product)=>{
        return product.category===category
    }).map((product)=>{
        return product.name
    }).sort()
    return grr.length>0?grr:[];
}
console.log(getProduct("Electronics"))

// Create a "shopping cart" array.  It's an array of product IDs.  Write code that calculates the total price of the items in the cart.  Handle cases where a product ID might not exist in the products array (in which case, ignore it). (Combine filter, map, and reduce)
const shoppingcart=[1,3,5,6,2]
const hrr=shoppingcart.map(id=>products.find((product)=>product.id===id
    )).filter(Boolean)
.reduce((acc, curr)=> acc+curr.price,0)
console.log(hrr)

// Create a function that takes an array of categories as an argument and returns a single object.  The keys of this object should be the categories, and the values should be the number of products in each category that are in stock. (Combine filter and reduce)

// Create a new array of objects. Each object should represent a category.  Each category object should have a "name" property (the category name) and a "totalValue" property (the sum of the prices of all products in that category). (Combine filter, map, and reduce)

// Find the product with the longest name in the "Books" category. If there are multiple products with the same longest name, return the first one encountered. (Combine filter and reduce)

// Create a function that takes a number (price) as an argument. Return an array of all product names that are in stock and have a price less than or equal to the provided price.  Sort the array alphabetically. (Combine filter, map, and sort)