

//Add ul in html using js 
const parent = document.getElementById("list")
// console.log(list)
// console.dir(list)

// const listItem1 = document.createElement("li")
// listItem1.innerText = "Apple"

// const listItem2 = document.createElement("li")
// listItem2.innerText = "banana"

// parent.appendChild(listItem1)
// parent.appendChild(listItem2)


//Add using classname
// const parent = document.getElementsByClassName("xyz")
// const list = parent[0]

//Destructuring 
// const [myList] = parent

// console.log(list)
// console.log(myList)


//Add element in html using for-of loop
// const body = document.getElementsByTagName("body")
// console.log(body)
// let parent = document.createElement("ol")

let data = ["apple", "orange", "banana", "graps"]

for(let item of data){
    let li = document.createElement("li")
    li.innerText = item
    parent.append(li)

}

// body[0].append(parent)