 
const dabba = document.getElementById("box")

const div = document.getElementById("box2")

// console.dir() //shows all property of object
// console.dir(dabba)

// dabba.innerText = "Hello ji from js"

// dabba.innerHTML = "abcde"

// dabba.textContent = "g;jwa"

//what is the difference b/w .innerText, .innerHTML, .textContent

// dabba.innerText = "Hello World"

//i waana add a HTML tag inside  div 
// dabba.innerText = "<h1>Hello World</h1>" //as a string append hoga 
// dabba.innerHTML = "<h1>Hello World</h1>" // o/p: Hello World

// console.log(dabba.innerText)
// console.log(dabba.innerHTML)


//4th : How to deleat a text inside from html tag
// console.log(div)
// div.remove()


//5. in order to create a HTML tag in js 

const parent = document.getElementById("parent") // to inform HTML ki ye tag jaana kaha chahiye

const mySpane = document.createElement("span") //1. span create kiya joki empty h 

mySpane.innerHTML = "hello from span made through js"//2. span ke andar  kuch inner HTML ya text daala 

parent.appendChild(mySpane)//3. span ko append kiya parent ke andar






 





