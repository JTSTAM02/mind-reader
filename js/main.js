var currentCard = 0;

    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const text = document.getElementById("newContent");
    const additionalContent = document.getElementById("additionalContent");
    const additionalText = document.getElementById("additionalText");

    const mindReader = {
    "text" : ["I can read your mind.", "Pick a number from 11-99", "Add both digits together to get a new number", "Subtract your new number from the original number", "do later", "&" ],
    "pages" : [""],
    "render" : function() {
            var output = this.text[currentCard]; //
            document.querySelector(".card-title").textContent = output; //


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