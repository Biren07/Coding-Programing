const users = [
  { firstName: "john", lastName: "Biden", age: 26, city: "New York", isActive: true, purchases: [10, 20, 30] },
  { firstName: "jimmy", lastName: "cob", age: 75, city: "Los Angeles", isActive: false, purchases: [5, 15] },
  { firstName: "sam", lastName: "lewis", age: 18, city: "Chicago", isActive: true, purchases: [25] },
  { firstName: "Ronald", lastName: "Mathew", age: 26, city: "Houston", isActive: true, purchases: [10, 10, 10, 10] },
  { firstName: "Alice", lastName: "Johnson", age: 32, city: "New York", isActive: false, purchases: [] },
];

//  using The filter :-

// Create a new array containing only users who are active (isActive is true) and are older than 25.
 const arr= users.filter((user)=>{if(user.isActive===true)
   if(user.age>=25)
   {
    return user
   }
 })
 console.log(arr)

// Create a new array containing only users who live in "New York" or "Chicago".
const brr= users.filter((user)=>{if(user.city==='New York' || user.city==='Chicago')
{
    return user
}
})
console.log(brr)

// Create a new array containing only users whose first name starts with the letter "j" (case-insensitive).
const crr= users.filter((user)=>{if(user.firstName[0]==='j')
{
    return user
}
})
console.log(crr)
// Create a new array containing only users who have made more than two purchases (check the length of the purchases array).
const drr= users.filter((user)=>{if(user.purchases.length>=2)
{
    return user
}
})
console.log(drr)

// Create a new array containing only users who have made at least one purchase of more than 20.
console.log('Hello ')
const err= users.filter((user)=>{
    return user.purchases.some((purchase)=>purchase>20)
})
console.log(err)

// Create a new array containing only users who are not active and are younger than 30.
const  frr= users.filter((user)=>{
    if(user.isActive===false)
    {
        if(user.age>=30)
        {
            return user
        }
    }
})
console.log(frr)

// Create a new array containing only users whose last name contains the letter "o" (case-insensitive).
const grr= users.filter((user)=>{
    if(user.lastName.toLowerCase().includes('o'))
    {
        return user
    }
})
console.log(grr)
// Create a new array containing only users who live in a city that is not "New York" and have made at least one purchase.
const hrr= users.filter((user)=>{
    if(user.city!='New York')
    {
    if(user.purchases.length>=1)
    {
        return user
    }
    }
})
console.log("Hello Birendra ")
console.log(hrr)

// Create a new array containing only users whose total purchases sum to more than 50. (You'll need to use reduce inside the filter callback).
const irr= users.filter((user)=>{
    const sumPurchase=user.purchases.reduce((sum,purchase)=>sum+purchase,0);
    return sumPurchase>50;
})
console.log("Dhami")
console.log(irr)
// Create a new array containing only users whose first name is longer than 4 characters and who have made no purchases.
const jrr= users.filter((user)=>{
    if(user.firstName.length>=4)
    {
        if(user.purchases.length==0)
            {
             return user   
            }
    }
})
console.log("Hello Sir")
console.log(jrr)