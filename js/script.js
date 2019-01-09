let modal = document.querySelector(".module-search");
let button = document.querySelector(".search .button");

button.addEventListener("click", show);

function show(event) {
    event.preventDefault();
    modal.classList.toggle("hidden");
}


let resultParent = document.querySelector(".search-item-wrapper .result");
let resultChildren = document.querySelector(".search-item-wrapper-children .result");

let buttonPlusParent = document.querySelector(".search-item-wrapper .plus");
let buttonMinusParent = document.querySelector(".search-item-wrapper .minus");

let buttonPlusChild = document.querySelector(".search-item-wrapper-children .plus");
let buttonMinusChild = document.querySelector(".search-item-wrapper-children .minus");

buttonPlusParent.addEventListener("click", function (event) {
    event.preventDefault();
    resultParent.innerHTML++;
});

buttonMinusParent.addEventListener("click", function (event) {
    event.preventDefault();
    resultParent.innerHTML--;
});

buttonPlusChild.addEventListener("click", function (event) {
    event.preventDefault();
    resultChildren.innerHTML++;
});

buttonMinusChild.addEventListener("click", function (event) {
    event.preventDefault();
    resultChildren.innerHTML--;
});



