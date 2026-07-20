//HOw to change the style (CSS) of HTML elements

//using first method : node.style
//second method is setAttribute

const text = document.getElementById("text")
const nav = document.getElementById("nav")
//console.log(text)

// text.style.backgroundColor = "brown"
// text.style.border = "2px solid green"

nav.style.display = "flex"
nav.style.backgroundColor = "brown"
nav.style.border = "2px solid green"

