/*//Different types of inputs
const checkboxBtn = document.getElementById("checkboxBtn");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const subscribeResult = document.getElementById("subscribeResult");
const paymentResult = document.getElementById("paymentResult");
const submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function() {
    if (checkboxBtn.checked) {
        subscribeResult.textContent = "You have subscribed!";
    } else {
        subscribeResult.textContent = "You have not subscribed!";
    }

    if (visaBtn.checked) {
        paymentResult.textContent = "You have selected Visa as your payment method.";
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = "You have selected MasterCard as your payment method.";
    } else if (paypalBtn.checked) {
        paymentResult.textContent = "You have selected PayPal as your payment method.";
    } else {
        paymentResult.textContent = "You have to select a payment method.";
    }
}
    */
