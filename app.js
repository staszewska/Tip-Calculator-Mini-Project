const billInputValue = document.getElementById("bill");
const tipInputValue = document.getElementById("tip");
const button = document.querySelector("button");
const totalSum = document.querySelector(".total-sum");



button.addEventListener("click", function () {
    billValue = +billInputValue.value;
    tipValue = +tipInputValue.value;

    let result = billValue + (billValue * tipValue) / 100

    totalSum.textContent = `$${result}`
    
})