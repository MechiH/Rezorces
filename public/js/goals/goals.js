import {
    ajaxPostOrPut,
    ajaxGetOrDelete,
    closeGoal,
    DateParser,
    fadeOutEffect,
    ResponseParserAdd,
    removeSubmitButton,
} from "./utilities.js";

var addGoal = document.querySelector(".GoalsBoard__icon");
var newGoalForm = document.querySelector(".addGoalForm");
var closeGoalForm = document.querySelector(".closeForm");
var formTitle = document.querySelector("#formTitle");
var TitleInputGoal = document.querySelector("#TitleInputGoal");
var DateInputGoal = document.querySelector("#DateInputGoal");
var DescInputGoal = document.querySelector("#DescInputGoal");
var bodyGoals = document.querySelector(".body");

addGoal.addEventListener("click", function () {
    var submitButton = document.querySelector("#submitButton");
    closeGoal();
    TitleInputGoal.value = "";
    DescInputGoal.value = "";
    DateInputGoal.value = "";
    newGoalForm.classList.remove("none");
    formTitle.innerHTML = "New Goal";
    submitButton.addEventListener("click", function () {
        var data = {
            title: TitleInputGoal.value,
            desc: DescInputGoal.value,
            date: DateInputGoal.value,
        };
        let callback = (e) => {
            e.json().then(function (response) {
                removeSubmitButton(submitButton);
                ResponseParserAdd(bodyGoals, response);
                callbackSetup();
                newGoalForm.classList.add("none");
            });
        };
        ajaxPostOrPut(data, "/createGoal", "POST", "JSON", callback);
    });
});
closeGoalForm.addEventListener("click", function () {
    newGoalForm.classList.add("none");
});
function callbackSetup() {
    var goalHeader = document.querySelectorAll(".goalHeader");
    var caret = document.querySelectorAll(".caret");
    var editGoal = document.querySelectorAll(".la-i-cursor");
    var deleteGoal = document.querySelectorAll(".la-trash-alt");
    var dateGoal = document.querySelectorAll(".dateGoal");

    for (let i = 0; i < goalHeader.length; i++) {
        goalHeader[i].style.height = "100%";
    }
    for (let i = 0; i < editGoal.length; i++) {
        editGoal[i].addEventListener("click", function () {
            var goal = editGoal[i].parentNode.parentNode.parentNode;
            var goalTitle = goal.querySelector(".titleGoal");
            var goalDesc = goal.querySelector(".descGoal");
            var goalDate = goal.querySelector(".dateGoal");
            formTitle.innerText = "Edit Goal";
            TitleInputGoal.value = goalTitle.innerHTML;
            DateInputGoal.value = goalDate.getAttribute("data-date");
            DescInputGoal.value = goalDesc.innerHTML.split(/\s+/).join(" ");
            closeGoal();
            newGoalForm.classList.remove("none");
            submitButton.addEventListener("click", function () {
                var data = {
                    id: goal.getAttribute("data-id"),
                    title: TitleInputGoal.value,
                    desc: DescInputGoal.value,
                    date: DateInputGoal.value,
                };
                let callback = (e) => {
                    e.json().then(function (response) {
                        removeSubmitButton(submitButton);
                        goalTitle.innerHTML = response["title"];
                        goalDesc.innerHTML = response["description"];
                        goalDate.innerHTML = DateParser(response["date"]);
                        newGoalForm.classList.add("none");
                    });
                };
                ajaxPostOrPut(data, "/editGoal", "PUT", "JSON", callback);
            });
        });
    }
    for (let i = 0; i < deleteGoal.length; i++) {
        deleteGoal[i].addEventListener("click", function () {
            var goal = deleteGoal[i].parentNode.parentNode.parentNode;
            let callback = (e) => {
                e.json().then(function (response) {
                    goal.querySelector(".caret").click();
                    fadeOutEffect(goal);
                });
            };
            ajaxGetOrDelete(
                "/deleteGoal/" + goal.getAttribute("data-id"),
                "delete",
                "JSON",
                callback
            );
        });
    }
    for (let i = 0; i < caret.length; i++) {
        caret[i].addEventListener("click", function () {
            var goal = caret[i].parentNode.parentNode;
            var goalDesc = goal.querySelector(".Goaldescription");
            var heightGoal = getComputedStyle(goal).height;
            var heightPercentage =
                Math.ceil(
                    (100 * parseFloat(heightGoal)) /
                        parseFloat(getComputedStyle(goal.parentNode).height)
                ) + "%";
            if (heightPercentage == "15%") {
                goalHeader[i].style.height = null;
                goal.style.height = "60%";
            } else {
                goal.style.height = "15%";
                setTimeout(() => {
                    goalHeader[i].style.height = "100%";
                }, 350);
            }
            caret[i].classList.toggle("open");
            if (goalDesc.classList.contains("none")) {
                setTimeout(() => {
                    goalDesc.classList.remove("none");
                }, 350);
            } else {
                goalDesc.classList.add("none");
            }
        });
    }
    for (let i = 0; i < dateGoal.length; i++) {
        dateGoal[i].innerHTML = DateParser(dateGoal[i].innerHTML);
    }
}
callbackSetup();
var burgerMenu = document.querySelector(".menuBurger");
var menuLayout = document.querySelector(".menuLayout");
burgerMenu.addEventListener("click", () => {
    menuLayout.classList.toggle("none");
});
