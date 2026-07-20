
// const box = document.getElementById("box")

// let p1 = document.createElement("p")
// p1.innerText = "Hello World form p1"

// let p2 = document.createElement("p")
// p2.innerText = "Hello World from p2"

// let p3 = document.createElement("p")
// p3.innerText = "Hello World form p3"

// box.appendChild(p1, p2, p3) //older way don't. allow multiple element to pass at once 
// box.append(p1, p2, p3) //newer way allow multiple parameter pass at once and also allow string to pass

// box.append("Hello World")



const box = document.getElementById("box")
const list = document.getElementById("list")

//how to remove HTML element forom js 
box.remove()


// box.setAttribute("class", "dabba")
// box.setAttribute("hjdvj","jkdvkld")
// box.setAttribute("style","background-Color:brown")

// console.log(box.getAttribute("style"))
// console.log(box.getAttribute("class"))
const fruits = [
    "Apple", 
    "Banana", 
    "Cherry", 
    "Date", 
    "Elderberry", 
    "Fig", 
    "Grape"
];

let count = 1

for(let item of fruits){

    let li = document.createElement("li")
    li.innerText = item
    li.setAttribute("class", "items")
    li.setAttribute("id", count)
    count++
    list.append(li)
}



