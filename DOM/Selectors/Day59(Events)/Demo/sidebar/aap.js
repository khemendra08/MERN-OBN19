const sidebar = document.getElementById("side")
const hiddenElement = document.getElementById("hide")



sidebar.addEventListener("mouseenter", ()=>{
    sidebar.style.width = "20vw"

    for(let item of hiddenElement){
        item.style.display = "block"
    }
})

sidebar.addEventListener("mouseleave", ()=>{
    sidebar.style.width = "5vw"

    for(let item of hiddenElement){
        item.style.display = "none"
    }
})




