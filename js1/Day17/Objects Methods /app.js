
// const obj = {
//     Name : "Khemendra",
//     age : 22
// }

// Object.preventExtensions(obj)

// obj.city = "Delhi"
// obj["Country"] = "India"

// delete obj.age
// obj.Name = "hkbvlsv"
// console.log(obj)


//2.Methods : Seal method 

const obj = {
    name : "bkfhl",
    age : 33
}
Object.seal(obj)
delete obj.name
obj.city = "Delhi"
obj.age = 99
console.log(obj)


//3.freeze method
// const obj = {
//     name:"Khemendra ",
//     age : 22
// }

// Object.freeze(obj)

// delete obj.name
// obj.City = "Delhi"
// obj.age = 90

// console.log(obj)



