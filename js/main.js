    var currentCard = 0;
    var button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const text = document.getElementById("newContent");
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
    "text" : ["I can read your mind.", "Pick a number from 11-99.", "Add both digits together to get a new number", "Subtract your new number from the original number", availableSymbols, "&" ],
    "pages" : ["", "When you have your number, click next", "Example: 14 \n1 + 4 = 5 \nClick Next to Proceed", "Example: \n 14-5 = 9 \nClick Next to Proceed", "Find your new number. \nNote the symbol beside the number", "Your symbol is: \n&"],
    "render" : function() {
            var displayText = this.text[currentCard]; //
            var displayPages = this.pages[currentCard];
            document.querySelector(".card-title").textContent = displayText;
            document.querySelector(".newContent").innerHTML= displayPages; //
            document.querySelector(".newContent").style.textAlign = "center";
            document.querySelector(".card-title").style.textAlign = "center";
        if(currentCard !== 0) {
            button1.textContent = "Next";
            additionalContent.style.display = "block";
            additionalText.style.display = "none";
        }
    }
};

function buttonClick() {
    currentCard = currentCard + 1 ; //
    mindReader.render();
}
button1.classList.add("btn-circle");
button2.classList.add("btn-circle");
button1.addEventListener("click", buttonClick);
button2.addEventListener("click", function() {
    currentCard = 0;
    console.log(currentCard);
    mindReader.render();
});
mindReader.render();