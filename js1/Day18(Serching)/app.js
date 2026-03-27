//1. Linear search without function

// let arr = [999, 10 , -5, 16, 4, 6]
// let target = 6
// let ans = -1 

// for(let i =0; i< arr.length; i++){
//     if(arr[i] == target){
//         ans = i
//         break
//     }
// }
// console.log(ans)
//2. Linear search with function


//3. Linear search when we have to return the boolean 


//Question : find objects 
// function findObject(arr, targetId){
//     // for(let item of arr){
//     //     if(item.id == targetId){
//     //         return item
//     //     }
//     // }


//     for(let i =0; i < arr.length; i++){
//         if(arr[i].id == targetId){
//             return arr[i]
//         }
//     }

 
//     return {}


// }

// const users = [
//     {id: 1 , name :"Aman"},
//     {id: 2, name : "Riya"},
//     {id: 3 , name :"Shubham"},
//     {id: 4, name: "Neha"}

// ];
// findObject(users, 3)

//Queston: Find all user from delhi
// Return all user whose city  = delhi using linera search 

// function findCity(arr, city){

// }

// const user = [
//     {id:1, name :"Aman", city :"Delhi"},
//     {id:2, name: "Riya", city:"Mumbai"},
//     {id:3, name : "Karan", city: "Delhi"},
//     {id:4, name: "Neha", city:"Pune"}
// ]
// console.log(findCity());

//Question

// function findUsers(arr){
//     for(let item of arr){
//         if(item.age >25 && item.city == "Delhi"){
//             return item
//         }
//     }
//     return {}


// }

//second veriation : in case we have to retuen the multiple element 
// function findUsers(arr){
//     let ans = []
//     for(let item of arr ){
//         if(item.age > 26 && item.city == "Delhi"){
//             ans.push(i)
//         }
//     }


// }

// const users1 = [
//     {id:1, name: "Aman",age: 22, city : "Delhi"},

//     {id: 2 , name:"Riya",age:28, city:"Mumbai"},

//     {id:3, name:"Karan",age:30, city:""}
// ];
// console.log(findUsers(users1));


//questions 




const products = [{ id: 1, name: "iPhone", price: 80000 },
  { id: 2, name: "Laptop", price: 65000 },
  { id: 3, name: "Headphones", price: 3000 },
  { id: 4, name: "Monitor", price: 12000 },
  { id: 5, name: "Keyboard", price: 2000 },
  { id: 6, name: "Smart Watch", price: 15000 }
];

