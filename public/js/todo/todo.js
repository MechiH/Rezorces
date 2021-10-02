import {
    ajaxGetOrDelete,
    ajaxPostOrPut,
    colorPriority,
    DateParser,
    fadeOutEffect,
    ResponseListParser,
} from "./utilities.js";

var priority = document.querySelectorAll(".priority");
var ListOfTodos = document.querySelector(".ListOfTodos");
// --Task Crud
var addTask = document.querySelector(".addTaskButton");
var saveTask = document.querySelector(".la-save");
var addTaskPopUp = document.querySelector(".addTaskPopUp");
var closePopup = document.querySelector(".closePopup");
// --Edit Task
var TitleFormEdit = document.querySelector("#TitleFormEdit");
var editButtonTask = document.querySelector(".la-feather");
// -- Request Data
var calendarInput = document.querySelector("#calendarInput");
var taskContent = document.querySelector("#taskContent");
var taskPriority = document.querySelector("#taskPriority");
var taskDate = document.querySelector("#taskDate");

// ---------------------------------------------------------

// -- Priority color
colorPriority(priority);

// -- Task Form
addTask.addEventListener("click", function () {
    editButtonTask.classList.add("none");
    saveTask.classList.remove("none");
    TitleFormEdit.innerHTML = "New Task";
    taskContent.value = "";
    taskPriority.value = "";
    taskDate.value = "";
    addTaskPopUp.classList.remove("none");
});
closePopup.addEventListener("click", function () {
    addTaskPopUp.classList.add("none");
});
saveTask.addEventListener("click", function () {
    var data = {
        task: taskContent.value,
        priority: taskPriority.value,
        date: taskDate.value,
    };
    let callback = (e) => {
        e.json().then(function (response) {
            ResponseListParser(ListOfTodos, response);
            CallbackSetup();
            addTaskPopUp.classList.add("none");
        });
    };
    ajaxPostOrPut(data, "/createTodo", "POST", "JSON", callback);
});

// -- Calendar select
calendarInput.addEventListener("change", function () {
    let callback = (e) => {
        e.json().then(function (response) {
            ResponseListParser(ListOfTodos, response);
            CallbackSetup();
        });
    };
    const value = calendarInput.value;
    ajaxGetOrDelete("/todoByDate/" + value, "get", "JSON", callback);
    DayDate.innerHTML = DateParser(value);
});
// --Callback Set up
function CallbackSetup() {
    var priority = document.querySelectorAll(".priority");
    TaskEdit();
    colorPriority(priority);
}
// -- Edit Task
TaskEdit();
function TaskEdit() {
    // -- Task Edit
    var checkTask = document.querySelectorAll(".edit .la-check-circle");
    var editTask = document.querySelectorAll(".edit .la-i-cursor");
    var deleteTask = document.querySelectorAll(".edit .la-truck-loading");
    for (let i = 0; i < checkTask.length; i++) {
        checkTask[i].addEventListener("click", function () {
            var clickedId = this.parentNode.getAttribute("data-id");
            let callback = (e) => {
                e.json().then(function (response) {
                    var priority = checkTask[i].parentNode.parentNode
                        .querySelector(".priority")
                        .getAttribute("data-priority");

                    checkTask[i].parentNode.parentNode
                        .querySelector("h2")
                        .classList.add("barred-" + priority);
                    fadeOutEffect(checkTask[i].parentNode.parentNode);
                });
            };
            ajaxGetOrDelete("/checkTodo/" + clickedId, "get", "JSON", callback);
        });
        editTask[i].addEventListener("click", function () {
            var clickedId = this.parentNode.getAttribute("data-id");
            editButtonTask.classList.remove("none");
            saveTask.classList.add("none");
            TitleFormEdit.innerHTML = "Edit Task";

            let callbackGet = (e) => {
                e.json().then(function (response) {
                    addTaskPopUp.classList.remove("none");
                    taskContent.value = response["task"];
                    taskPriority.value = response["priority"];
                    taskDate.value = response["date"];
                });
            };
            ajaxGetOrDelete(
                "/getTodo/" + clickedId,
                "get",
                "JSON",
                callbackGet
            );

            editButtonTask.addEventListener("click", function () {
                var data = {
                    id: clickedId,
                    task: taskContent.value,
                    priority: taskPriority.value,
                    date: taskDate.value,
                };
                let callbackPost = (e) => {
                    e.json().then(function (response) {
                        ResponseListParser(ListOfTodos, response);
                        CallbackSetup();
                        addTaskPopUp.classList.add("none");
                    });
                };
                ajaxPostOrPut(data, "/editTodo", "PUT", "JSON", callbackPost);
            });
        });
        deleteTask[i].addEventListener("click", function () {
            var clickedId = this.parentNode.getAttribute("data-id");
            let callback = (e) => {
                e.json().then(function (response) {
                    fadeOutEffect(deleteTask[i].parentNode.parentNode);
                });
            };
            ajaxGetOrDelete(
                "/deleteTodo/" + clickedId,
                "delete",
                "JSON",
                callback
            );
        });
    }
}

// --Burger Menu Declarations
var burgerMenu = document.querySelector(".menuBurger");
var menuLayout = document.querySelector(".menuLayout");
// -- head Menu
var DayDate = document.querySelector(".DayDate");
// -- Burger Menu
burgerMenu.addEventListener("click", () => {
    console.log(menuLayout.classList.contains("none"));
    if (menuLayout.classList.contains("none")) {
        menuLayout.classList.remove("none");
    } else {
        menuLayout.classList.add("none");
    }
});
// -- DateDisplay Head intial
DayDate.innerHTML = DateParser(Date.now());
// -- Filter Select
var filter = document.querySelector(".filter .la-ellipsis-v");
var filterMenu = document.querySelector(".ChooseFilter");
filter.addEventListener("click", () => {
    filterMenu.classList.toggle("none");
    filterMenu.classList.toggle("swing-in-left-bck");
});
