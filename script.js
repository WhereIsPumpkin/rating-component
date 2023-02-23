const main = document.querySelector('.box');
const thank = document.querySelector('.hidden');

const submit = document.getElementById("btn");
const rates = document.querySelectorAll(".rate");
const actualNum = document.getElementById("number");
submit.addEventListener("click", () =>{
    main.classList.add("hide");
    thank.classList.remove("hide");
})

rates.forEach((rating) => {
    rating.addEventListener("click", () => {
        rates.forEach((r) => r.classList.remove("active"));
        rating.classList.add("active");
        actualNum.innerHTML = rating.innerHTML;
    })
})


