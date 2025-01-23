//strings and number

let password = 'hello@12345'

//Q1. find length of password
console.log(password.length)
//Q2. check if password contains @, expected output is true
console.log(password.includes('@'))

//Q3. replace @ with - and console.log the output
// console.log(password.replace('@','-'))

//Q4[HARD]. console.log the reverse of the string
console.log(password.split('').reverse())

//Q5[HARD]. for the reversed string, only output number 
console.log( parseInt(password.split('').reverse().join('')))


let name = 'kaylin khanal'
//output should be 'lin khanal'
console.log(name.substring(3))





// Array