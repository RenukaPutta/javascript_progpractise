let user={
name:"Renu",
Age:19,
Greetings:function(){
    console.log(`${this.name}, Welcome to this page`)
}

}
//user.Greetings()

user.name='Mim'

user.Greetings()

console.log(this)


// function chai(){
//     let username="satya"
//     console.log(`${this.username},hi`)
// }
// chai()

//arrow function
let chai = () =>{
    let username="satya"
    console.log(`${this.username},hi`)
}
chai()

//if we use {} we should use return keyword or else if we use () we dont need any return keyword


let m =(num1,num2) => {
    return num1+num2
}

console.log(m(1111,1000));

//---------------------------
let n=(k1,k2) =>(k1+k2)
console.log(n(17,31));