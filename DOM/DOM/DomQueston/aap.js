const textarea = document.getElementById("text")
const heading = document.getElementById("heading")



// textarea.addEventListener("input", () =>{
//     heading.textContent = textarea.value.length
// })



textarea.addEventListener("input", (e)=>{
    let str = e.target.value
    if(str.length > 200) return

    heading.innerText = str.length
})