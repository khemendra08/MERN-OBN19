


function sayhi(){
    console.log("Hello World")
}

function sayHi2(){
    console.log("Hello ji")
}

//default export
// module.exports = sayhi
// module.exports = sayHi2

//named export
module.exports = {
    sayhi , sayHi2
}
console.log(module)