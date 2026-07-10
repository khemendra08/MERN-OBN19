//Every & Some 


//SOME METHOD 
// let arr = [1,1,3,5,7,9,2]

// let ans = arr.some((item, index) => {
//     return item % 2 == 0
// })

// let ans2 = arr.every((item) => {
//     return item % 2 == 0
// })
// console.log(ans)
// console.log(ans2)



//questions : Check if any user is under 18

const students = [
    {name: "A", marks: [70,80,60]},
    {name: "B", marks: [88, 92, 79]},
    {name: "C", marks : [50, 60, 65]}
];

// let ans = students.some((item) => {
//     let isPresent = false 
//     for(let val of item.marks){
//         if(val >90){
//             isPresent = true
//         }
//     }
//     return isPresent
// })

//2nd method 
let ans = students.some((item) => {

    return item.marks.some((val)=>{
        return val > 90
    })
})
console.log(ans)