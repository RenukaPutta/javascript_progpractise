// primitive datatypes

//7types -string-call by value which is  the value changes will be done in copy
//number,boolean,undefined,null,symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
//symbol is used to give a unique value to the id

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


//non primitive
//array

let m=[1,2,3,4]

//objects-they can be of anytype

let ob={
    k:"2",
    No:1,
    mm:false
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(myFunction)
//typeof for null is an object