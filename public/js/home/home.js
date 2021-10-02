import { ajax, ResponseParserSearch } from "./utilities.js";

var addButton = document.querySelector(".addButton Button");
var header = document.querySelector(".header");
var body = document.querySelector(".body");
var addForm = document.querySelector(".newResource");
var closeButton = document.querySelector(".fa-times");
var searchInput = document.querySelector("#searchInput");
var burgerMenu = document.querySelector(".menuBurger");
var menuLayout = document.querySelector(".menuLayout");
// --- toggle class none
function toggleNone() {
    header.classList.toggle("none");
    body.classList.toggle("none");
    addForm.classList.toggle("none");
}
// --- ajax function general use

// --- Switching view and addForm
addButton.addEventListener("click", () => {
    toggleNone();
});

closeButton.addEventListener("click", () => {
    toggleNone();
});
// --- Search Input key Press
searchInput.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        var searchValue = searchInput.value;
        var callback = (e) => {
            e.json().then(function (response) {
                ResponseParserSearch(body, response);
            });
        };
        ajax(searchValue, "/search", "POST", "JSON", callback);
    }
});
// --- open menu
burgerMenu.addEventListener("click", () => {
    menuLayout.classList.toggle("none");
});
