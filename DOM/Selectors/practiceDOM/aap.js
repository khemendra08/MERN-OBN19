
const cards = document.querySelectorAll(".card");

const colors = ["red", "green", "blue", "brown", "orange"];

cards.forEach((card, index) =>{
    card.style.backgroundColor = colors[index];
    card.textContent = `Card ${index+1}`;

    card.addEventListener("click", () =>{
        console.log(`you clicked Card ${index+1}`);
    });

});