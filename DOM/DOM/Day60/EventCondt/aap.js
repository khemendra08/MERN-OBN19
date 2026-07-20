const titleBar = document.getElementById("title")
const DescBar = document.getElementById("disc")
const addbtn = document.getElementById("btn")
const cardContainer = document.getElementById("right")



addbtn.addEventListener("click", ()=>{

    //handle empty inputs
    if(!titleBar.value || !DescBar.value){
        alert("please enter both the fields")
        return
    }

    //creat a card 
    const card = document.createElement("article")

    card.addEventListener("click", () => {
        card.remove()
    })


    //card.innerText = `${titleBar.value} ---- ${DescBar.value}`

    const titleContainer = document.createElement("h2")
    titleContainer.innerText = titleBar.value

    const DescContainer = document.createElement("p")
    DescContainer.innerText = DescBar.value

    //titleContainer or DescContainer card m aa gyi h
    card.append(titleContainer, DescContainer)

    card.style.backgroundColor = "white"
    card.style.width = "100%"
    card.style.padding = "10px 5px"
    card.style.borderRadius = "10px"

    //card ko right m add krne ka kaam krega
    cardContainer.append(card)


    titleBar.value = ""
    DescBar.value = ""
})