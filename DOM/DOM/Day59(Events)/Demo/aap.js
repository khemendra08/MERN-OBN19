
const lighModebtn = document.getElementById("light")
const darkModebtn = document.getElementById("Dark")
const mainBox = document.getElementById("text")
const input = document.getElementById("ip")
const heading = document.getElementById("heading")




darkModebtn.addEventListener("click", ()=>{
    mainBox.style.backgroundColor = "black"
    mainBox.style.color = "white"
    
})  

lighModebtn.addEventListener("click", ()=>{
    mainBox.style.backgroundColor = "white"
    mainBox.style.color = "black"
    
})

// window.addEventListener("load" , ()=>{
//     //console.log("ok")
//     input.focus()
// })

input.addEventListener("focus", () => {
    input.style.width = "30%"

})

input.addEventListener("blur", () =>{
    input.style.width = "10%"
})



//"input" event will show live changes as you are typing 
// input.addEventListener("input", (e)=>{
//     //console.log(input.value)
//     //IMP**: (input.value) and (e.target.value) both will give the same result
//     console.log(e.target.value)//industry standard 

//     //imp**
//     heading.innerText = e.target.value
// })


//"change" Events fire jab "blur" event ho jata hain, mtlb input jab blur ho jata hain
input.addEventListener("change", (e) =>{
    heading.innerText = e.target.value
})


