//DAY2 : Datatypes

// var a = 32
// var b = -10
// var c = 99.95

// console.log(a)
// console.log(n)
// console.log(c)
// console.log(typeof (a))
// console.log(typeof (b))
// console.log(typeof (c))
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)

//Most of the datatype ke upr inbuilt function hote h 
//inbuilt function on number datatype


//string 
// var a = 'fjkgl'
// var b = "abcvjd"
// var c = `cow`
// var d = '5823905206'
// console.log(a)
// console.log(b)
// console.log(c)

// var naam = "Ankit "
// var age = 16
// console.log(`My name is ${naam} and my age is ${age}`)

//String method : since string is a primitive datatype (it is immutable we cannot change the original data)
//string method ek value return krta h original data m change nhi krta h ,original data m change nhi krskte isliye 
//ek nyi copy bnaa ke bhej raha h or us copy ko hmne ek variable m stoe krwaaya 
var s = "Hello World"
var s2 = "How are you"

console.log(s.toLowerCase())

var lcAns = s.toLowerCase()
console.log(lcAns)

console.log(s.toUpperCase())
console.log(s.includes("h"))
console.log(s.includes(" "))
console.log(s.concat(s2))
console.log(s.concat(" ").concat(s2))

var temp = s.concat(" ")
var ans = temp.concat(s2)
console.log(temp)
console.log(ans)
