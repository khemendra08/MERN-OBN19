//REDUCE HOF


// let arr = [1,2,3,4,5,6,7,8,9,10]
// const ans = arr.reduce((prev, curr) =>{
//     return prev + curr
// },0)

// console.log(ans)


//QUESTION1. : find maximum number using reduce HOF
// input: [5,1,9,3]
// output : 9

// let arr = [5,1,9,3]

// let max = arr.reduce((prev, curr) => {
//     //return Math.max(prev, curr)  //to find max element 
//     return Math.min(prev, curr)  //to find min element


// })
// console.log(max)




//QUESTION2. : count total element 
// let arr = ["a", "b", "c", "d"]
// let ans = arr.reduce((prev, curr) => {
//     return prev + 1

// },0)
// console.log(ans)



// ** QUESTION3 : count occurrences of element 
// let arr = ["a", "b", "a", "c", "b", "a"]

// let ans = arr.reduce((prev, curr) => {

//     if(prev.hasOwnProperty(curr)){
//         prev[curr] = prev[curr] + 1
//     }
//     else{
//         prev[curr] = 1
//     }
//     return prev

// }, {})
// console.log(ans)

//QUESTION4
//Flatten an array 
// let arr = [[1,2], [3,4], [5]]
// let ans = arr.reduce((prev, curr) => {

//     return [...prev, ...curr]

// })
// console.log(ans)


// Question5 : convert array to object 

// let arr = ["name", "age"]
// let obj = arr.reduce((prev, curr) => {
//     prev[curr] = null
//     return prev

// }, {})
// console.log(obj)

//QUESTION6: group numbers into even & odd 

//Method 1 -> with initial values 
// let arr = [1,2,3,4,5,5,6,7,7,8]
// let obj = arr.reduce((prev, curr) => {
//     if(curr % 2 == 0){
//         prev.even.push(curr)
//     }
//     else{
//         prev.odd.push(curr)
//     }
//     return prev

// },{
//     odd : [],
//     even : []
// })

// console.log(obj)

//Method 2 : with no initial value 
let arr = [1,2,3,4,5,5,6,7,7,8]
let obj = arr.reduce((prev, curr) => {
    if(curr % 2 == 0){

        if(prev.even){
            prev.even.push(curr)
        }
        else{
            prev.even = [curr]
            //prev.even.push(curr)
        }
      
    }
    else{

        if(prev.odd){
            prev.odd.push(curr)
        }
        else{
            prev.odd = [curr]
            //prev.odd.push(curr)
        }
        
    }
    return prev

},{
    // odd : [],
    // even : []
})

console.log(obj)




