console.log("Script running...")
// Task 1: Button One Flow
// Select the first button
let b1 = document.querySelector("#buttonOne")


// Select the first p tag under that button
let p1 = document.querySelector("#textOne")

// Add an event listener to the button such that when it's clicked, the p tag text says "You guessed wrong"
b1.addEventListener("click", function (event){
  p1.textContent = "you guessed wrong"
})


// Task 2: Button Two Flow
// In index.html, add the IDs to the second button and p tag
// Select the second button and p tags
let b2 = document.querySelector("#b2")

let p2 = document.querySelector("#p2")





// Add an event listener to the second button such that when it's clicked, the p tag text is "You guessed right!"
b2.addEventListener("click", function (event){
  p2.textContent = "you guessed right"
})


// Task 3: Dog image flow
// Select the dog image
let i1 = document.querySelector("#dog")

// Add an event listener to the dog image such that when the mouse is over it, the image src becomes post-boop.png
// Yellow: You can do this on click

i1.addEventListener("mouseover", function (event){
  i1.src = "post-boop.png"
})


// Add an event listener to the dog image such that when the mouse is off it, the image src becomes pre-boop.jpeg
// Yellow: You can skip this

i1.addEventListener("mouseout", function (event){
  i1.src = "pre-boop.png"
})



// Task 4: Secret code flow
// Select the input
let h1 = document.querySelector("#h1")
h1.addEventListener("click", function (event){
  console.log("found me")
})




// Add an event listener to the input such that when a key is pressed, you console log the value
// Extra credit: check if the value is "racoon." If it is, add the racoon.jpg image to the div below (you will need to select it first)




