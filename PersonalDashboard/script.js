// Counter variable
let count = 0;

// Grab HTML elements
const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Add click events
incrementBtn.onclick = () => countEl.textContent = ++count;
decrementBtn.onclick = () => countEl.textContent = --count;
resetBtn.onclick = () => countEl.textContent = count = 0;
