//EVENTS :An event in JavaScript is something that happens in the browser that your code can respond to—such as a button click,
//  a key press, a form submission, or a page finishing loading.

//External events 
//step 1.  : A Node is selected by using some kind of Selecctors
const box = document.getElementById("box")
 
//step 2;

// box.addEventListener("click",   ()=>{
//     console.log("Btn Clicked   ")
// })

function boxClickHandler(){
    console.log("ok")
}

box.addEventListener(' click', boxClickHandler)
