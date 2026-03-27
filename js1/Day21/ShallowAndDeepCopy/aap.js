//sahllow and Deep Copy




// let dataFromBackend = JSON.stringify(car)
// console.log(dataFromBackend)

// const usableData = JSON.parse(dataFromBackend)
// console.log(usableData)


//Deep copy
// let person1 = {
//     name: "ANC",
//     age: 10,
//     language : ["english", "hindi"]

// }

//shallow copy 
// let person2 = person1
// let person2 = {...person1}


// let str = JSON.stringify(person1)
// let person2 = JSON.parse(str)

// person2.language.push("marathi")

// console.log(person1)
// console.log(person2)

// Second method for deep copy

let person1 = {
    name: "Abc",
    age: 13,
    language : ["hindi", "engliosh"],
    sayHi : function(){
        console.log("Hello")
    }
    

}

// let person2 = structuredClone(person1)
// let person2 = Object.assign({}, person1)
// let person2 = {}
// Object.assign(person2, person1)

// let person2 = JSON.parse(JSON.stringify(person1))
// person2.sayHi = function(){
//     console.log("Hello")
// }

// person2.language.pop()
// console.log(person1)
// console.log(person2)



