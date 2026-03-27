//Function

// function sayHi(name){
//     console.log(`Hello ${name}`)
// }

// sayHi("Alex")
// sayHi("Bhanu")

// sayHi()

// function Sum(a,b){
//     console.log(a+b)
// }
// Sum(12,44)
// Sum(100,465)


// function sayFullName(Firstname, Secondname=""){
//     console.log(`Welcome ${Firstname} ${Secondname}`)
// }
// sayFullName("Singh")
// sayFullName("Honey")
// sayFullName("Honey", "Singh")


//Write a function in which user take 2 input and print their sum
// function sum(){
//     var a = Number(prompt("Enter number 1"))
//     var b = Number(prompt("Enter number 2"))

//     // console.log(a+b)
//     // return a+b

// }

// let ans = sum()
// console.log(ans)
// console.log(sum())

//##
// function testingReturn(){
//     console.log("Hello")

//     // return "khgl"
//     // return 2345
//     // return false
// }
// console.log(testingReturn())//output hain: Hello , Undefined



//FUNCTIONAL EXPRESSION

// const myFn = function(age, name ="User"){
//     console.log("Hello from functional expression", age,name)
//     return "xyz"

// }

// function smaple(){
//     console.log("ok")
// }

// myFn(67, "Bhanu")
// console.log(myFn())
// let retVal = myFn()
// console.log(retVal)


//## ARROW FUNCTION
// const sayHi = (name = "User") => {
//     console.log("Hi", name)
//     return "Alex"
// }
// sayHi("Erik")
// console.log(sayHi())


// const sayHello = (name ="User") => console.log(`Hello ${name}`)
// sayHello("User")

// let consoleKaReturnVAlue = console.log()
// console.log(consoleKaReturnVAlue)
// console.log(console.log("Hello"))

//Question :
// function isEven(num){
//     if(num % 2 == 0){
//         return true
//     }else{
//         return false
//     }
// }

// let ans = isEven(90)
// console.log(ans)

// console.log(isEven(91))


//Question : find max of two numbers and return the greater number 
// const findMax = (a,b) => Math.max(a,b)

// function max(a, b){
//     return Math.max(a,b)

// }
// console.log(findMax(11,-9))
// console.log(max(99,1784))



//Question : 
function charCount(str)
{
    return str.length
}
console.log(charCount("uroghrau"))


const count = str=>str.length
console.log(count("uoghfpbfsvjdfvbn"))