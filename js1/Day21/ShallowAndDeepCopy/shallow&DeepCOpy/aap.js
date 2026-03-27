
// let car = {
//     color: "red",
//     tyres: 4,
//     brand: "MS"
// }



// //no new object is created , both variable (car and car2) point the same object in memory
// let car2  = car // Shallow copy 
//  console.log(car2)

// //changing one affects both
// car2.color = "Blue"
// console.log(car.color)
// console.log(car2.color)


//Shallow copy concept 

// let car = {
     
//      tyres: 4,
//      brand: "MS",
//      colors: ["Black","white","red","blue"]
// }

// let arr = [1,2,3,true,false,"gsk"]

//shallow copy
// let car2 ={
//     ...car
// }

// car2.colors.push("pink")
// console.log(car)
// console.log(car2)//the color pink reflect in both car and  car2 bcz colors array is non primitive
//and refrence of colors array address is shared in both objects (car , car2) 


// const jsonCar = JSON.stringify(car)
// console.log(car)
// console.log(typeof(car))//object
// console.log(typeof(jsonCar))//string
// console.log(jsonCar.slice(3))

// const jsonArr = JSON.stringify(arr)
// console.log(arr)
// console.log(typeof(jsonArr))//string
// console.log(jsonArr.toLocaleUpperCase())

// let dataFromBackend = JSON.stringify(car)
// console.log(dataFromBackend)//string

// const usableData = JSON.parse(dataFromBackend)
// console.log(usableData)//object


//DEEP COPY 
// let person1 = {
//     naam : "ABC",
//     age : 10, 
//     language: ["hindi", "english"]
// }

//we can make shallow copy using 2 ways 
// let person2 = person1
// let person2 = {...person1}

// let str = JSON.stringify(person1)

// let person2 = JSON.parse(str)//ye actually m deep copy h 

// person2.language.push("Maithili")

// console.log(person1)
// console.log(person2)

//second method to make DEEP COPY
//let person2 = structuredClone(person1)//deep copy 
//let person2 = JSON.parse(JSON.stringify(person1))//deep copy

// person2.language.pop()
// console.log(person1)
// console.log(person2)

//shallow copy 

// let o1 = {a:1}
// let o2 = {b:2}
// let o3 = {c:45}

// let o1kaDusraVariable = Object.assign(o1,o2,o3,{name:"guidgf"})
// console.log(o1)
// console.log(o1kaDusraVariable)

//let person2 = Object.assign({}, person1)
// let person2 = {}
// Object.assign(person2, person1)

// person2.language.pop()

// console.log(person1)
// console.log(person2)


//HOw to get function inside a deep copy 

let person1 = {
    naam : "ABC",
    age : 10, 
    language: ["hindi", "english"],
    sayHi : function(){
        console.log("HELLO")
    }
}

//let person2 = structuredClone(person1)// error dega 

let person2 = JSON.parse(JSON.stringify(person1))// error nhi dega pr function v show nhi krega 

//we have to do it manually 
person2.sayHi = function(){
    console.log("HELLO")
}
console.log(person1)
console.log(person2)




