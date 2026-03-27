
//Day 20



// function sum(...nums){
//     let sum =0
//     for(let item of arr){
//         sum += item
//     }
//     console.log(sum)
    

// }


// function tellPosition(first, second, third, ...extras){
//     console.log(`first is ${first}`)
//     console.log(`second is ${second}`)

//     console.log(`third is ${third}`)
//     console.log(`Consolation ${extras.join(", ")}`)


// }

// tellPosition("Amit", "Bhanu", "Ashish","Subhash","Suraj","Priti","Shubham")


// let n = 22
// let arr = ["Even","odd"]
// console.log(arr[n%2])

//Destructuring an objects 
// let obj = {
//     name : " xyz",
//     age: 22,
//     city: "Delhi"
// }

// console.log(obj.name, obj.age, obj.city)
// console.log(obj["name"], obj["age"], obj["city"])

// const {name: naam, age:Umar, city:jagah,address} = obj
// console.log(naam, Umar, jagah, address)


// const {name, ...something} = obj
// console.log(name)
// console.log(something)


//Spread operator 
// let arr = [1,2,3,4,5,6]
// console.log(...arr)

// let a1 = [1,2,3,4,5,6,7]
// let a2 = [11,12,13,14,25,26]

// let ans = a1.concat(a2)
// let ans = a2.concat(a1)
// let ans = [...a1, ...a2]
// let ans = [...a2, ...a1]
// let ans = [12,13,45,...a1, ...a2,45,6,78]
// console.log(ans)


// let copy = [...arr]
// console.log(copy)


//Spread operator in case of objects
let obj1 = {
    name:"xyz",
    age :32, 
    city: "Delhi",
    sayHi : () =>{
        console.log("ok")
    }

}

let obj2 = {
    address : "kggjen",
    country: "INdia",
    car: "BMW",
    name: "abc"

}

let obj3 = {
    ...obj1,
    ...obj2,
    color: "red",
    language: "JS",
    name: "Khemendra"

}

let copy = {
    ...obj1
}
console.log(obj3)
console.log(copy)

