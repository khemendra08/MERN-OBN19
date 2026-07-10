//Bubble Sort

//Unoptimised
// let arr = [5,4,3,2,1]

// for(let i =0; i < arr.length-1; i++){
    

//     for(let j =0; j < arr.length-1; j++){
//         console.log("ok")

//         if(arr[j] > arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr)


//Optimized 
// let arr = [10, 2,3,4,5,6]

// for(let i = 0; i < arr.length-1; i++){

//     let isSorted = true

//     for(let j =0; j < arr.length-1-i; j ++){

//         if(arr[j] > arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp

//             isSorted = false
//         }
//     }
//     if(isSorted == true){
//         break
//     }
// }
// console.log(arr)



//Question : Sort the object on the basic on age 
let arr = [
   {
    name: "Shubh",
    age: 45
   },

   {
    name: "Amar",
    age : 5

   },

   {name: "Divya",
   age: 4
   },

   {
    name: "Ravi",
    age: 20

   },

   {
    name: "Sidhi",
    age: 1
    
   }

   
]

for(let i = 0; i < arr.length-1; i++){

    let isSorted = true

    for(let j =0; j < arr.length-1-i; j ++){

        if(arr[j].age > arr[j+1].age){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp

            isSorted = false
        }
    }
    if(isSorted == true){
        break
    }
}
console.log(arr)


