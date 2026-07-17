
//1: id selector 
const myBtn = document.getElementById("btn")
console.log(myBtn)

//2. tagname : selector
const myBtnusingTagName = document.getElementsByTagName("button");

console.log(myBtnusingTagName);


//3. classname selector
const myBtnusingClass = document.getElementsByClassName("box")
console.log(myBtnusingClass)

//4. query Selector :#Id

const myBtnusingQuerySelectorWithId = document.querySelector("#btn")
console.log(myBtnusingQuerySelectorWithId)

//querySelector() : .Class
const myBtnusingQuerySelectorWithClass = document.querySelector(".box")
console.log(myBtnusingQuerySelectorWithClass)

//querySelector():tag

const myBtnusingQuerySelectorWithTagName = document.querySelector("button")
console.log(myBtnusingQuerySelectorWithTagName)


const xyz = document.querySelector("#jgnfgs")
console.log(xyz)

//Query Selector All : #Id

const  QuerySelectorAllBtnWithId = document.querySelectorAll("#btn")
console.log(QuerySelectorAllBtnWithId)

//querySelecctorAll():with TagName
const  QuerySelectorAllBtnWithTagName  =  document.querySelectorAll("button")
console.log(QuerySelectorAllBtnWithTagName)


//querySelctorAll():with .class

const  QuerySelectorAllBtnWithClass = document.querySelectorAll(".box")
console.log(QuerySelectorAllBtnWithClass)

//querySelectorAll() : when nothing match : return NodeLiat[]
const abc = document.querySelectorAll(".duifhe")
console.log(abc)

















