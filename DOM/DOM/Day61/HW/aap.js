const IncrementBtn = document.getElementById("inc")
const restBtn = document.getElementById("res")
const DecrementBtn = document.getElementById("dec")


// console.log(display.innerText)
// console.log(typeof display.innerText )

IncrementBtn.addEventListener("click",()=>{
    //innerText hamesha String return karta hai.
    //isli yaha typecasting krna pdega
    let curr = Number(display.innerText)
    curr++
    display.innerText = curr

})


restBtn.addEventListener("click",()=>{
    display.innerText = "0"
    
})


DecrementBtn.addEventListener("click",()=>{
    
    let curr = Number(display.innerText)
    if(curr == 0) return
    curr--
    display.innerText = curr

})