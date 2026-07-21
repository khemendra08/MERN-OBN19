const outer = document.getElementById("outer")
const middle = document.getElementById("middle")
const inner = document.getElementById("inner")

//event Bubbling : "usecapture" bydefault "false" hota hain
// outer.addEventListener("click", () =>{
//     console.log("Outer click")
// })

// middle.addEventListener("click", () =>{
//     console.log("Middle click")
// })

// inner.addEventListener("click", () =>{
//     console.log("Inner click")
// })


//event capturing : "usecapture" true hota hain 
outer.addEventListener("click", () =>{
    console.log("Outer click")
},true)

middle.addEventListener("click", () =>{
    console.log("Middle click")
},true)

inner.addEventListener("click", () =>{
    console.log("Inner click")
},true)







