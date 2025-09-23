/*
console.log("Hello, World!");
window.alert("Welcome to my website!");
document.getElementById("h2").textContent = "This is a heading added by JavaScript.";

let name = window.prompt("What's your name?");
console.log("My name is " + name);
let age = 22;
console.log("I am " + age + " years old.");
let netWorth = 1000000000; // in USD
console.log(`My net worth is ${netWorth} USD.`);
let isMarried = false;
console.log("Am I married? " + isMarried);
let hobbies = ["Reading", "Traveling", "Business", "Making money", "Solving problems", "Learning new things", "Helping others", "Spending time with family", "Playing sports"];
console.log("My hobbies include: " + hobbies.join(", "));

document.getElementById("submitBtn").onclick = function() {
    let userNetWorth = document.getElementById("networth").value;
    if(userNetWorth) {
        console.log("User's net worth is: " + userNetWorth + " USD.");
        window.alert("Thank you for submitting your net worth of " + userNetWorth + " USD.");

        if(userNetWorth >= 1000000000) {
        document.getElementById("h1.1").textContent = "Hello Billionaire!";
        } else if(userNetWorth >= 1000000) {
            document.getElementById("h1.1").textContent = "Hello Millionaire!";
        } else if(userNetWorth >= 1000) {
            document.getElementById("h1.1").textContent = "Hello Thousandaire!";
        } else {
            document.getElementById("h1.1").textContent = "Hello Broke! Work Hard! You can do it! Inshallah!";
        }
    }
}
*/
