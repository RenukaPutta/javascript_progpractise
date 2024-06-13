function Greetings(){
    console.log("HELLO")
}

Greetings()


function Sum(n1,n2){
return n1+n2
}
console.log(Sum(10,20))

function Largest(n2,n3){
    if(n3>n2){
console.log("n3 is greater")
return n3
    }
    else{
        console.log("n2 is greater")
        return n2
    }
}

Largest(33,43)



const ob1={
    name:"MIM",
    age:20,
    context:"WELCOME"
}

function randomob(Objectin){
    console.log(`hello ${Objectin.age}`)
    return

}

//randomob(ob1)

randomob({
    age:200
})

arrin=[10,20,30,40,50]

function ARRAYSUM(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}

ARRAYSUM(arrin)

///addTwo(5)
///const addTwo = function(num){
    //return num + 2
//}


//we cannot call the function when it is called before the function declaratipn