const counterValue = document.getElementById("counterValue");
let incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const decrementBtn = document.getElementById("decrementBtn");

let count = 0;

incrementBtn.onclick = function() {
    count++;
    counterValue.textContent = count;
};

resetBtn.onclick = function() {
    count = 0;
    counterValue.innerText = count;
};

decrementBtn.onclick = function() {
    count--;
    counterValue.textContent = count;
};