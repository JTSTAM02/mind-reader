    var currentCard = 0;
    var button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const text = document.getElementById("newContent");
    const additionalContent = document.getElementById("additionalContent");
    const additionalText = document.getElementById("additionalText");
    const availableSymbols = ["1 - a", "2 - !", "3 - c", "4 - %", "5 - e", "6 - @", "7- $", "8 - ^", "9 - &"]

    function randomSymbol() {
        const chosenSymbol = Math.floor(Math.random() * availableSymbols.length);
        return availableSymbols[chosenSymbol];
    };
    const mindReader = {
    "text" : ["I can read your mind.", "Pick a number from 11-99.", "Add both digits together to get a new number", "Subtract your new number from the original number", availableSymbols, "&" ],
    "pages" : ["", "When you have your number, click next", "Example: 14 \n1 + 4 = 5 \nClick Next to Proceed", "Example: \n 14-5 = 9 \nClick Next to Proceed", "Find your new number. \nNote the symbol beside the number", "Your symbol is: \n&"],
    "render" : function() {
            var displayText = this.text[currentCard]; //
            var displayPages = this.pages[currentCard];
            document.querySelector(".card-title").textContent = displayText;
            document.querySelector(".newContent").textContent= displayPages; //

            if(currentCard=== 2 || currentCard === 3) {
                document.querySelector(".newContent").style.textAlign = "center";
            } else {
                document.querySelector(".newContent").style.textAlign = ""
            }


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