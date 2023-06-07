var currentCard = 0;

    const button = document.querySelector(".card-text");
    const text = document.getElementById("text");
    const mindReader = {
    "pages" : ["I can read your mind.", "Pick a number from 11-99", "Add both digits together to get a new number", "Subtract your new number from the original number", "do later", "&" ],
    "render" : function() {
            var output = this.pages[currentCard];
            text.textContent = mindReader.pages[currentCard];
            document.querySelector(".card-title").textContent = output;
    }
};

function buttonClick() {
    currentCard = currentCard + 1 % mindReader.pages.length;
    mindReader.render();
}

button.addEventListener("click", buttonClick);

mindReader.render();

