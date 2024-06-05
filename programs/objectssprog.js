//creating objects-{}

const ob1={
name:"Rithvikaa",
Age:19,
email:"HEllo@gmail.com",
mobile:1329468900
}

console.log(ob1)

console.log(ob1.name)
console.log(ob1["mobile"])

//exp2
const mim=Symbol("helloworld")

//if we want to access the variable outside the object
const ob2={
    name:"Mim",
    Age:19,
    [mim]:"welcome",
    email:"mim@gmail.com",
    mobile:1329468900
}

console.log(ob2)
console.log(ob2[mim])



ob2.email="mim@chagtp.com"
//Object.freeze(ob2)
ob2.email="mim22@chagtp.com"

console.log(ob2.email)

//function

ob2.greeting=function(){
    console.log("HI people")
}

console.log(ob2.greeting())

//interpolation
ob2.sendoff=function(){
    console.log(`BYE, ${this.name}`)
}

console.log(ob2.sendoff())