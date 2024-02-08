var sq1 = document.getElementById("sq1");
var sq2 = document.getElementById("sq2");
var sq3 = document.getElementById("sq3");
var sq4 = document.getElementById("sq4");
var sq5 = document.getElementById("sq5");
var sq6 = document.getElementById("sq6");
var sq7 = document.getElementById("sq7");
var sq8 = document.getElementById("sq8");
var sq9 = document.getElementById("sq9");
var sq10 = document.getElementById("sq10");
var sq11 = document.getElementById("sq11");
var sq12 = document.getElementById("sq12");
var sq13 = document.getElementById("sq13");
var sq14 = document.getElementById("sq14");
var sq15 = document.getElementById("sq15");
var sq16 = document.getElementById("sq16");


var selectedSquare = null;
var matches = 0
var guesses = 0 

function moveMade(element) {
    if (selectedSquare === null) {
        // First square clicked
        selectedSquare = element;
        element.style.backgroundColor = element.dataset.color
    } else {
        guesses+=1
        element.style.backgroundColor = element.dataset.color
        if (selectedSquare.id !== element.id) {
            if (selectedSquare.dataset.color === element.dataset.color) {
                // Matching pair
                selectedSquare.style.visibility = 'hidden';
                element.style.visibility = 'hidden';
                selectedSquare = null;
                matches+=1;

                if (matches === 8){
                    alert("you won! it took you " + guesses + " guesses to get 8 matches!" )
                }
            } else {
                // No match, reset colors after a delay
                setTimeout(function () {
                    selectedSquare.style.backgroundColor = 'grey';
                    element.style.backgroundColor = 'grey';
                    selectedSquare = null; // Reset selectedSquare for the next pair
                }, 500);
            }
        }
    }
}


sq1.addEventListener("click", function() {
    moveMade(sq1)
});
sq2.addEventListener("click", function() {
    moveMade(sq2)
});
sq3.addEventListener("click", function() {
    moveMade(sq3)
});
sq4.addEventListener("click", function() {
    moveMade(sq4)
});
sq5.addEventListener("click", function() {
    moveMade(sq5)
});
sq6.addEventListener("click", function() {
    moveMade(sq6)
});
sq7.addEventListener("click", function() {
    moveMade(sq7)
});
sq8.addEventListener("click", function() {
    moveMade(sq8)
});
sq9.addEventListener("click", function() {
    moveMade(sq9)
});
sq10.addEventListener("click", function() {
    moveMade(sq10)
});
sq11.addEventListener("click", function() {
    moveMade(sq11)
});
sq12.addEventListener("click", function() {
    moveMade(sq12)
});
sq13.addEventListener("click", function() {
    moveMade(sq13)
});
sq14.addEventListener("click", function() {
    moveMade(sq14)
});
sq15.addEventListener("click", function() {
    moveMade(sq15)
});
sq16.addEventListener("click", function() {
    moveMade(sq16)
});
