//Arrays

//Array declaration
let a = [1,"hlfg", true, undefined, null,function(){
    console.log("Hello World")
},[]]

//how to find the length of an array 
console.log(a.length) 
// accessing last index of an array
console.log(a.length-1)

//access function inside an array
a[5]()

//Another method to access the function inside an array 
let myFnFromArray = a[5]
console.log(myFnFromArray())


