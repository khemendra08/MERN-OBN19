
//1: id selector 
const myBtn = document.getElementById("btn")
console.log(myBtn)

//2. tagname : selector
const myBtnusingTagName = document.getElementsByTagName("button");

console.log(myBtnusingTagName);


//3. classname selector
const myBtnusingClass = document.getElementsByClassName("box")
console.log(myBtnusingClass)

//4. query Selector 

const myBtnusingQuerySelectorWithId = document.querySelector("#btn")
console.log(myBtnusingQuerySelectorWithId)


const myBtnusingQuerySelectorWithClass = document.querySelector(".box")
console.log(myBtnusingQuerySelectorWithClass)


const myBtnusingQuerySelectorWithTagName = document.querySelector("button")
console.log(myBtnusingQuerySelectorWithTagName)


const xyz = document.querySelector("#jgnfgs")
console.log(xyz)

//Query Selector All

const  QuerySelectorAllBtnWithId = document.querySelectorAll("#btn")
console.log(QuerySelectorAllBtnWithId)


const  QuerySelectorAllBtnWithTagName  =  document.querySelectorAll("button")
console.log(QuerySelectorAllBtnWithTagName)

const  QuerySelectorAllBtnWithClass = document.querySelectorAll(".box")
console.log(QuerySelectorAllBtnWithClass)

 
const abc = document.querySelectorAll(".duifhe")
console.log(abc)

















