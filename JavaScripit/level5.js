// if statements

let a = 10

// ternary operator
a%5===0 ? console.log("divisible") : console.log("not divisible")

//if 
if(a%5===0 ){
    console.log("divisible")
}else{
    console.log("not divisible")
}


const name = 'ram thapa'

//Q1. if length of name is greater than 5 console.log("short name is only valid")
//else "you are registered"


const password = '@hello123'


if(password[0]=== '@' && password[password.length - 1] === '3'){
    console.log("password is storng")
}else{
    console.log("passowrd is weak")
}
// // hint: console.log(password[0])
// //Q2 if the starting char is @, and last letter is 3, 
// // console.log("password is strong")
// //else print ("password is weak")


let b = Math.random()
console.log(b)

//Q3.  b greater or equals to 0.8, console.log(you are lucky),
// b is greater or equals  0.3 and less than 0.8 console.log("Good day")
// if b is less than 0.3 you are unlucky

if(b>= 0.8) console.log("you are lucky")
else if(b>=0.3 && b< 0.8)  console.log("good day")
else console.log("you are unlucky")


b>0.8 ? console.log("you are lucky"): console.log("you are unlucky")



b>=0.8 ? console.log('You are lucky') : 
            (b>=0.3 ? console.log('Good day') : console.log('You are unlucky'))



            // what is array and object in javascript?
            // different data types in js