//Scope
//1. Block scope 

{
    var a = 10
    let b = 20
    const c = 30

    console.log(a,b,c) //accessible inside the block
}

console.log(a) // var is accessible outside the block
console.log(b) //let and const shows block scope, can't be accessed outside block, hence reference erroe

console.log(c) //let and const shows block scope, can't be accessed outside block, hence reference erroe

//FUNCTIONAL SCOPE 

function abc(){
    var a = 10
    let b = 20
    const c = 30

    console.log(a,b,c)

}
abc()
console.log(a) //can't access any of them outside the function as all of them shows  functional scope 
console.log(b)//can't access any of them outside the function as all of them shows  functional scope 
console.lof(c) //can't access any of them outside the function as all of them shows  functional scope 

