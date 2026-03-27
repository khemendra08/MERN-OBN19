
//destructuring an array

// let arr = [1,2,3,4,5,6]

// console.log(arr[0])
// console.log(arr[1])


// const[a,b,c,d,e] = arr
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// a = 99

//Nasted arrays
// let arr = [1,2,3,[4,5,6,[7,8,9,10,[11,12,1,13,"ANS"]]]]

// console.log(arr)
// console.log(arr.length)
// console.log(arr[3])

// let innerArr = arr[3]
// console.log(innerArr[3])

// console.log(arr[3][3])
// console.log(arr[3][3][4][3])

// let arr = [[1,2,3],[4,5,6],[7,8,9,10],[11,12,13,[14,15,16]]]

// let flattenedArr = arr.flat(Infinity)
// console.log(flattenedArr)

//why are string immutable


//string methods
// let str = "shbcklsvgfluhblfu"
// let email = "xyz@yahoo.com"
// let text = "hello ji"

// console.log(text.repeat(1))
// console.log(text.padEnd(13, "c"))
// console.log(text.padStart(20, "a"))
// console.log(text.trim().length)
// console.log(text.replace("l", "p"))
// console.log(replaceAll("l", "p"))
// console.log(text.trimEnd())
// console.log(text.trimStart())
// console.log(text.trim())
// console.log(str.charAt(12))
// console.log(str[2])
// console.log(str.toUpperCase())
// console.log(str.toLocaleLowerCase())
// console.log(str.concat("bchksbck"))
// console.log(str+"yroeiyt")
// console.log(str.endsWith("jkfhldh"))
// console.log(str.email.endsWith("@gmail.com"))
// console.log(email.startsWith("xyz"))
// console.log(email.includes("@",4))
// console.log(email.indexOf("aakhsdh"))
// console.log(email.lastIndexOf("o"))

// let str1 = "my-name-is-xyz"
// console.log(str.padEnd(20, "xyz"))
// console.log(str.slice(3))


//Object

const obj = {
    name:"xyz",
    age: 12,
    isPresent : true,

    sayHi : function(){
        console.log("hi"+obj.name)
    },
    sayHello : function(){
        console.log("hello"+this.name)

    }
}

obj.sayHi()
obj.sayHello()

// delete obj.isPresent
// console.log(obj)

//loop over objects -> fir-in-loop
// for(let key in obj){
//     console.log(key,obj[key])
// }

// console.log(obj)
// console.log(obj.name, obj.age, obj.isPresent)
// console.log(obj["age"])

// obj.age = 14
// // console.log(obj)
// obj["name"] = "abc"
// obj.city = "Delhi"
// obj["color"]= "red"
// console.log(obj)

