//1. find the largest element 
// let arr = [1,3,6,8,2,2,1]
// let largest = arr[0]
// for(let i =1; i < arr.length; i++){
//     if(arr[i] > largest){
//         largest = arr[i]
//     }
// }
// console.log("largest Element :", largest)


// /2.find the smallest element 
// let arr = [1,3,6,8,2,2,1]
// let smallest = arr[0]
// for(let i =1; i < arr.length; i++){
//     if(arr[i] < smallest ){
//         smallest = arr[i]
//     }
// }
// console.log("smallest element :", smallest)

//3. find second largest element
// let arr = [1,3,6,8,2,2,1]
// let largest = -Infinity
// let Slargest = -Infinity 

// for(let i =0; i < arr.length; i++){
//     if(arr[i] > largest){
//         Slargest = largest
//         largest = arr[i]
//     }else if(arr[i] > Slargest && arr[i] !== largest){
//         Slargest = arr[i]

//     }
// }
// console.log("Second largets element is :", Slargest)


//4.find the  second smallest element 
// let arr = [3,6,8,2,2,1]
// let smallest = Infinity
// let Ssmallest = Infinity

// for(let i =0; i < arr.length; i++){
//     if(arr[i] < smallest){
//         Ssmallest = smallest
//         smallest = arr[i]
//     }else if(arr[i] < Ssmallest && arr[i] !== smallest){
//         Ssmallest = arr[i]

//     }
// }
// console.log("Second smallest is :", Ssmallest)


//5.Reverse an array 
let arr = [3,6,8,2,2,1]
let ans = []
for(let i = arr.length-1; i>= 0; i--){
    ans.push_back(arr[i])
}
console.log(ans)
