
//Question 1 solution
// const myName = document.getElementById("box");

// myName.innerHTML = "Khemendra Kumar"
// console.log(myName)

//Question 2 solution
//myName.style.visibility = "visible";

//Question3 
// myName.style.color = "brown";
// myName.style.backgroundColor = "sky blue";
// myName.style.padding = "20px";
// myName.style.fontSize = "30px";
// myName.style.fontFamily = "italic";
// myName.style.animation = "shadow 2s infinite"


//question 4 
// myName.innerText = "<h2>Hello World</h2>"

//question 5 
// myName.innerHTML = "<h2>Hello World</h2>"


//Question 6
// const div = document.getElementById("box2")
// div.innerHTML = "<strong>This text is bold.</strong>";


//question 7**IMP**
// const parent = document.getElementById("parent")

// const removeButton = document.createElement("button")

// removeButton.textContent = "Remove Paragraph"

// parent.appendChild(removeButton)


//Question 8 :When that button is clicked, remove #box2 using:div.remove();
// const parent = document.getElementById("parent")

// const div = document.getElementById("box2")
// const removeButton = document.createElement("button")
// removeButton.textContent = "Remove paragraph"

// parent.appendChild(removeButton)
// removeButton.addEventListener("click", () =>{
//     div.remove()
// })


//Question 9
// Create three <p> elements in JavaScript. Give them the text:
// “JavaScript”
// “DOM”
// “Practice”
// Append all three into #parent.

// const parent = document.getElementById("parent")
// const p1 = document.createElement("p")
// p1.textContent = "JavaScript"

// const p2 = document.createElement("p")
// p2.textContent = "DOM"

// const p3 = document.createElement("p")
// p3.textContent = "Practice"

// parent.appendChild(p1)
// parent.appendChild(p2)
// parent.appendChild(p3)


//Question  10;Create an <img> element using createElement(). Set its src, alt, width, and append it to #parent.

// const parent = document.getElementById("parent")
// const image = document.createElement("img")
// image.src = "https://picsum.photos/300/200";
// image.alt = "Random practice image";
// image.width = 300
// parent.appendChild(image)


//Question 11 : 
// Create a list:
// Create <ul>
// Create five <li> elements in a loop
// Put "Task 1" to "Task 5" inside them
// Append the list to #parent

// const parent = document.getElementById("parent")
// const ul = document.createElement("ul")
// for(let i = 1; i <= 5; i++ ){
//     const li = document.createElement("li");
//     li.textContent = `Tasl ${i}`
//     ul.appendChild(li)
// }
// parent.appendChild(ul)


//Question 12:IMP
const parent = document.getElementById("parent")

//Create the card 
const profileCard = document.createElement("div")
profileCard.className = "profile-card"

//styling 
profileCard.style.padding = "24px";
profileCard.style.width = "280px";
profileCard.style.borderRadius = "16px";
profileCard.style.backgroundColor = "#ffffff";
profileCard.style.boxShadow = "0 8px 22px rgba(0, 0, 0, 0.2)";
profileCard.style.textAlign = "center";
profileCard.style.transition = "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.5s ease";
profileCard.style.padding = "20px";
profileCard.style.border = "2px solid black";
profileCard.style.width = "250px";



//create heading 
const heading = document.createElement("h2")
heading.textContent = "Khemendr"

//create paragraph 
const paragraph = document.createElement("p")
paragraph.textContent = "Learning DOM Manipulation"

//creating background button 
const backgroundButton = document.createElement("button")
backgroundButton.textContent = "change Background"

backgroundButton.style.margin = "8px";
backgroundButton.style.padding = "10px 14px";
backgroundButton.style.border = "none";
backgroundButton.style.borderRadius = "8px";
backgroundButton.style.backgroundColor = "#2563eb";
backgroundButton.style.color = "white";
backgroundButton.style.cursor = "pointer"


//create remove button
const removeButton = document.createElement("button")
removeButton.textContent = "Remove profile"

removeButton.style.margin = "8px";
removeButton.style.padding = "10px 14px";
removeButton.style.border = "none";
removeButton.style.borderRadius = "8px";
removeButton.style.backgroundColor = "#dc2626";
removeButton.style.color = "white";
removeButton.style.cursor = "pointer";

// Add heading, paragraph, and buttons inside the card
profileCard.appendChild(heading);
profileCard.appendChild(paragraph);
profileCard.appendChild(backgroundButton);
profileCard.appendChild(removeButton);

//Add card inside #parent
parent.appendChild(profileCard)

profileCard.addEventListener("mouseenter", () => {
  profileCard.style.transform = "translateY(-8px)";
  profileCard.style.boxShadow = "0 16px 30px rgba(0, 0, 0, 0.3)";
});

profileCard.addEventListener("mouseleave", () => {
  profileCard.style.transform = "translateY(0)";
  profileCard.style.boxShadow = "0 8px 22px rgba(0, 0, 0, 0.2)";
});



// Change background on click
backgroundButton.addEventListener("click", () =>{
    profileCard.style.backgroundColor = "lightblue";

    profileCard.animate(
    [
      { transform: "scale(1) rotate(0deg)" },
      { transform: "scale(1.06) rotate(2deg)" },
      { transform: "scale(1) rotate(0deg)" }
    ],
    {
      duration: 500,
      easing: "ease-in-out"
    }
  );
});

// Remove entire card on click
removeButton.addEventListener("click", () =>{
    profileCard.remove()
})



































