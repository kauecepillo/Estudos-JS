const currentNumberWrapper = document.getElementById("currentNumber");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
var currentNumber = 0;

function plus() {
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }     
    
};

function menus() {
   if (currentNumber > 0) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }    
    // if (currentNumber < 0) {
    //     currentNumberWrapper.style.color="red";
    // }
};

increment.addEventListener("click", plus)
decrement.addEventListener("click", menus)