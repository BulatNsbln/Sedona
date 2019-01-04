let modal = document.querySelector(".module-search");
let button = document.querySelector(".search .button");

button.addEventListener("click", show);

function show(event) {
    event.preventDefault();
    modal.classList.toggle("hidden");
}


