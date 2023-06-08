let currentCard = 0; // slide deck
var button1 = document.getElementById("button1"); //button to advance to next slide
const button2 = document.getElementById("button2"); //reset button
const text = document.getElementById("newContent"); // slide text
const additionalContent = document.getElementById("additionalContent");
const additionalText = document.getElementById("additionalText");
var availableSymbols = ["1 - a",
    "\n2 - !",
    "\n3 - c",
    "\n4 - %",
    "\n5 - e",
    "\n6 - @",
    "\n7- $",
    "\n8 - ^",
    "\n9 - &"];
function randomSymbol() {
    const chosenSymbol = Math.floor(Math.random() * availableSymbols.length); //
    return availableSymbols[chosenSymbol];
};
const mindReader = {
    "text": ["I can read your mind.", "Pick a number from 01-99.", "Add both digits together to get a new number", "Subtract your new number from the original number", "", "&"],
    "pages": ["", "When you have your number, click next", "Example: 14 \n1 + 4 = 5 \nClick Next to Proceed", "Example: \n 14-5 = 9 \nClick Next to Proceed", "Find your new number. \nNote the symbol beside the number", "Your symbol is: \n&"],
    "render": function () {
        var displayText = this.text[currentCard]; // gets current slide text
        var displayPages = this.pages[currentCard]; // gets current slide page

        document.querySelector(".card-title").textContent = displayText; // update slide text
        document.querySelector(".newContent").innerHTML = displayPages; // update slide page
        document.querySelector(".newContent").style.textAlign = "center";
        document.querySelector(".card-title").style.textAlign = "center";

        if (currentCard !== 0) {
            button1.textContent = "Next"; // update the button text
            additionalContent.style.display = "block"; //show extra text
            additionalText.style.display = "none";
        }
        // create ul with createElement
        // loop from 0-99
        // in loop, each i creates li with createElement
        // appendChild li to ul
        //after loop document.get symbols-container.appendChild("ul")
        if (currentCard === 4) {
            var ul = document.createElement("ul");
            var symbols = ["1 - !", "2 - @", "3 - #", "4 - $", "5 - %", "6 - ^", "7 - *", "8- a", "9- &"]
            for (var i = 0; i < symbols.length; i++) {
                var li = document.createElement("li");
                li.textContent = symbols[i];
                ul.appendChild(li);
            }
            var container = document.querySelector(".symbols-container");
            container.style.display = "flex";
            container.style.justifyContent = "center";
            container.appendChild(ul);
        } else {
            var container = document.querySelector(".symbols-container");
            container.style.display = "none";
            container.innerHTML = "";
        }
    }
};

function buttonClick() {
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
    console.log(currentCard);
    mindReader.render();
});
mindReader.render();