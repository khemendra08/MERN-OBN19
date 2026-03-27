
//Day 17 of js
// const obj = {
//     name : "ABC",
//     age : 34,
//     idPresent : true,
//     sayHi : ()=>{
//         console.log("Hello user")
//     },
//     address : {
//         city: "Delhi",
//         Country: "India"
//     }



// }

// console.log(obj.age)
// obj.sayHi()
// console.log(obj.address.city, obj.address.Country)
// console.log(obj["address"] ["city"])
// console.log(typeof obj);

//imp:*** To check whetherb the object has given property
//Ans: 1. obj.hasOwnProperty()
//2. 

// const obj = {
//     Name : "Khemendra",
//     From : "Bihar",
//     age : 24,
//     isPresent : true 

// }

// console.log(obj.hasOwnProperty("xyz"))
// console.log(obj.hasOwnProperty("address"));

// const obj = {
//     name : "",
//     age : 0,
//     isPresent : true 
// }

// if(obj.age){

// }else{
//     obj.age = 99
// }
// console.log(obj)


//Question: **imp: count number of zeros, negitive and positive and return the ans in onjects form 

// let arr = [0,-1,-2,4,0,-3,7,0]

// function solve(arr){

//     let zeros = 0
//     let positive = 0
//     let negative =0

//     for(let item of arr){
//         if(item === 0) zeros++
//         else if(item < 0) negative++
//         else if(item > 0) positive++
//     }

//     return {zeros, negative, positive}

// }
// console.log(solve(arr));


//Question: You have given a string you have to check whether the given string is in upper case or in lower case

// let str = "a"

//Method 1
// if(str >= "A" && str <= "Z"){
//     console.log("Uppercase")
// }else if(str >= "a" && str <= "z"){
//     console.log("Lowercase")
    
// }

//Method 2 

// if(str.toUpperCase() == str){
//     console.log("uppercase")
    
// }else if(str.toLowerCase() == str){
//     console.log("Lowercase")
    
// }

//Questions : count the total number of upper case and lower case elsemnt in the given string and return the ans in the 
// object form 

// let str = "aBcd_efgh2IJ"

// function solve(str){

//     let Uppercase = 0
//     let Lowercase = 0
//     let SpecialChar = 0

//     
//     for(let item of str){
//         if(item >= "A" && item <= "Z"){
//             Uppercase++

//         }else if(item >= "a" && item <= "z"){
//             Lowercase++

//         }else{
//             SpecialChar++
//         }
//     }

//     // return {Uppercase, Lowercase, SpecialChar}
//     return{
//         UppercaseCount: Uppercase,
//         LowerCaseCount : Lowercase,
//         SpecialCharCount : SpecialChar
//     }

// }
// console.log(solve(str))

//count the frequency of the individual char  in the string 
//Mrthods1

// let str = "abcdabc"
// let ans = {}

// for(let item of str ){

//     if(ans.hasOwnProperty(item)){
//         ans[item] = ans[item]+1
//     }else{
//         ans[item] = 1
//     }
// }
// console.log(ans)













