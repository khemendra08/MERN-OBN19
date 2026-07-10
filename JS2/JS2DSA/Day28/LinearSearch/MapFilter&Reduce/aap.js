//Map Filter and reduce 

//Map 
// let arr = [1,2,3,4,5]

// const ans = arr.map((item, index) => {
//     return item ** 2
// })
// console.log(ans)


//Question : add a new property isAdult to each user 
//input : {name:"Aman", age:17}
//.        {name:"Rahul", age:21}        
//output :  [
//.          {name:"Aman", age:17, isAdult:false},
//.          {name:"rahul", age:21,isAdult:true}
//.          ]

//solution
// let arr = [
//     {name:"Aman", age:17},
//     {name:"Rahul", age:21}
// ]

// let ans = arr.map((item) => {

//     //first method 
//     // item.isAdult = (item.age >18)
//     // return item

//     //2nd method 
//     return{
//         ...item,
//         isAdult :item.age>=18
//     }
// })
// console.log(ans)


//Question : flatten first name 
// input :
// [
//     {first:"Khemendra", last:"kumar"},
//     {first:"pankaj", last:"Yadav"}

// ]


// output :
// ["Khemendra Kumar", "Pankaj yadav"]

//solution 


//FILTER METHOD 
// let arr = [1,2,3,4,5,6]

// let ans = arr.filter((item) =>{
//     //return item % 2 == 0 //condition
//     return item % 2 != 0
// })
// console.log(ans)

//Question : return a number greater than 10
