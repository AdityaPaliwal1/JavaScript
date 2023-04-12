let reset = document.querySelector(".reset");
let increament = document.getElementById("inc");
let decreament = document.getElementById("dec");
let counter = document.querySelector(".counter");
let curvalue = 0;


increament.addEventListener('click', () => {
    curvalue++;
    counter.innerHTML = curvalue;
});

decreament.addEventListener('click', () => {
    curvalue--;
    counter.innerHTML = curvalue;
});

reset.addEventListener('click', () => {
    curvalue = 0;
    counter.innerHTML = curvalue;
});

