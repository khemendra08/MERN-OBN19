

function abc(name , age){
    
    console.log(`Hello i m ${name} and my age is ${age}`)

    return "hkfbljkb"
}
console.log(abc("Subh", 12))


//Higher order function and callback function 

//yeh hof function ek function ko return kr raha hain ye isliye ek HOF hain
function hof(){

    const fn = () =>{
        console.log("Hello from returned function")
    }
    return fn
}

// const returnedfn = hof()
// returnedfn()
//hof()()

//this hof2 accepting the function  so it is a HOF 
function hof2(cb){
    cb()
}


hof2(() =>{//this is the callback function
    console.log("Hello from the passed function")
})



//ye function ek function accept bhi kr raha hain or ek function return bhi kr raha hain 
function hof3(cb){
    cb()
    return () => {

    }
}

