let currentCard = 0; // slide deck
let isFirstSlide = true; // flag to track if it's the first slide
var button1 = document.getElementById("button1"); // button to advance to the next slide
const button2 = document.getElementById("button2"); // reset button
const text = document.getElementById("newContent"); // slide text
const additionalContent = document.getElementById("additionalContent");
const additionalText = document.getElementById("additionalText");
const numbers = [];
const availableSymbols = [];

// Generate the list of symbols
for (let i = 0; i <= 99; i++) {
  if (i === 9) {
    numbers.push("9: ");
    availableSymbols.push("&");
  } else {
    numbers.push(i + ": ");
    availableSymbols.push(String.fromCharCode(0x2460 + i));
  }
}

const mindReader = {
  "text": ["I can read your mind.", "Pick a number from 01-99.", "Add both digits together to get a new number", "Subtract your new number from the original number", "Find your new number.", "&"],
  "pages": ["", "When you have your number, click next", "Example: 14 \n1 + 4 = 5 \nClick Next to Proceed", "Example: \n 14-5 = 9 \nClick Next to Proceed", "Note the symbol beside the number", "Your symbol is: \n&"],
  "render": function () {
    var displayText = this.text[currentCard]; // gets current slide text
    var displayPages = this.pages[currentCard]; // gets current slide page

    document.querySelector(".card-title").textContent = displayText; // update slide text
    document.querySelector(".newContent").innerHTML = displayPages; // update slide page
    document.querySelector(".newContent").style.textAlign = "center";
    document.querySelector(".card-title").style.textAlign = "center";

    if (currentCard !== 0) {
      button1.textContent = "Next"; // update the button text
      additionalContent.style.display = "block"; // show extra text
      additionalText.style.display = "none";
    }

    if (currentCard === 0 && !isFirstSlide) {
      button2.style.display = "none"; // hide the reset button on the first slide if it's the first time
    } else {
      button2.style.display = "block";
    }

    if (currentCard === 4) {
      var ul = document.createElement("ul");
      for (let i = 0; i < availableSymbols.length; i++) {
        var li = document.createElement("li");
        li.textContent = numbers[i] + availableSymbols[i];
        ul.appendChild(li);
      }

      var container = document.querySelector(".symbols-container");
      container.style.display = "flex";
      container.style.justifyContent = "center";
      container.innerHTML = ""; // Clear previous content
      container.appendChild(ul);
    } else {
      var container = document.querySelector(".symbols-container");
      container.style.display = "none";
      container.innerHTML = "";
    }
  }
};

function buttonClick() {
  if (currentCard === 0 && isFirstSlide) {
    isFirstSlide = false; // set the flag to false after the first slide
    localStorage.setItem("isFirstSlide", JSON.stringify(isFirstSlide)); // store the flag state in local storage
    button2.style.display = "none"; // show the reset button after the first slide
  }

  currentCard = currentCard + 1; // move to the next slide
  if (currentCard == mindReader.pages.length) {
    currentCard = 0;
  }
  mindReader.render(); // render updated slide
}

button1.classList.add("btn-circle");
button2.classList.add("btn-circle");

button1.addEventListener("click", buttonClick);
button2.addEventListener("click", function () {
  currentCard = 0;
  mindReader.render();
});

// Retrieve the flag state from local storage
const storedFirstSlide = localStorage.getItem("isFirstSlide");
if (storedFirstSlide !== null) {
  isFirstSlide = JSON.parse(storedFirstSlide);
}

mindReader.render();
