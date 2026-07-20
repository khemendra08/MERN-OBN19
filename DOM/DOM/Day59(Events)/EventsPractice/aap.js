const lightMode = document.getElementById("light")
const darkMode = document.getElementById("dark")
const box = document.getElementById("text")
const input = document.getElementById("in")
const heading = document.getElementById("heading")




lightMode.addEventListener("click", () =>{
    box.style.backgroundColor = "white"
    box.style.color = "black"
    
})


darkMode.addEventListener("click", () =>{
    box.style.backgroundColor = "black"
    box.style.color = "white"
})

input.addEventListener("focus", () =>{
    input.style.width = "30%"

})

input.addEventListener("blur", ()=>{
    input.style.width = "10%"
})

input.addEventListener("change", (e)=>{
    heading.innerText = e.target.value
})




