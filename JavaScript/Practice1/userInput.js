let age;
age = prompt("Please enter your age:");
alert("You are " + age + " years old!");
let username;
document.getElementById("submitBtn").onclick = function() {
    username = document.getElementById("usernameInput").value;
    document.getElementById("greetingMessage").innerText = "Hello, " + username + " (" + age + ")! Welcome!";
};