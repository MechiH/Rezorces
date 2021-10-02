import {
    ajaxPostOrPut,
    ajaxGetOrDelete,
    ResponseParserNoteList,
    GetContent,
    ContentRequest,
    editNoteContent,
    removeTextArea,
} from "./utilities.js";
var TextNoteArea = document.querySelector(".TextNoteArea");
var searchNotesInput = document.querySelector("#searchNotesInput");
var addNote = document.querySelector(".la-plus");
var addNotePopUp = document.querySelector(".addNotePopUp");
var closePopup = document.querySelector(".closePopup");
var saveNote = document.querySelector(".la-save");
var deleteNote = document.querySelector(".la-trash-alt");
var notesTitleList = document.querySelector(".notesTitleList");
var titleNewNote = document.querySelector("#titleNote");
var tagNewNote = document.querySelector("#tagNote");
var FirstNote = document.querySelector(".noteTitle");

var clickedIdNote = { id: FirstNote.getAttribute("data-id") };
let titleOfNote, tagOfNote, NoteInfos;
let searchValueNote;

FirstNote.className += " noteActive";
ContentRequest(TextNoteArea, clickedIdNote, FirstNote.getAttribute("data-id"));
GetContent(TextNoteArea, clickedIdNote);
editNoteContent(TextNoteArea, clickedIdNote);

addNote.addEventListener("click", function () {
    addNotePopUp.classList.toggle("none");
});
deleteNote.addEventListener("click", function () {
    let callback = (e) => {
        e.json().then(function (response) {
            callbackPack(response);
        });
    };
    ajaxGetOrDelete(
        "/deleteNote/" + clickedIdNote.id,
        "delete",
        "JSON",
        callback
    );
});

closePopup.addEventListener("click", function () {
    addNotePopUp.classList.toggle("none");
});

saveNote.addEventListener("click", function () {
    titleOfNote = titleNewNote.value;
    tagOfNote = tagNewNote.value;
    NoteInfos = { title: titleOfNote, tag: tagOfNote };
    let callback = (e) => {
        e.json().then(function (response) {
            removeTextArea(TextNoteArea);
            callbackPack(response);
        });
    };
    ajaxPostOrPut(NoteInfos, "/createNote", "POST", "JSON", callback);

    addNotePopUp.classList.toggle("none");
});

searchNotesInput.addEventListener("keyup", () => {
    let callback = (e) => {
        e.json().then(function (response) {
            callbackPack(response);
        });
    };
    if (searchNotesInput.value === "") {
        searchValueNote = "emptyString404-NotesRezorces";
    } else {
        searchValueNote = searchNotesInput.value;
    }
    ajaxGetOrDelete("/searchNote/" + searchValueNote, "get", "JSON", callback);
});

function callbackPack(response) {
    ResponseParserNoteList(notesTitleList, response);
    FirstNote = document.querySelector(".noteTitle");
    clickedIdNote = { id: FirstNote.getAttribute("data-id") };
    FirstNote.className += " noteActive";
    var TextNoteArea = document.querySelector(".TextNoteArea");
    GetContent(TextNoteArea, clickedIdNote);
    ContentRequest(
        TextNoteArea,
        clickedIdNote,
        FirstNote.getAttribute("data-id")
    );
    editNoteContent(TextNoteArea, clickedIdNote);
}

var burgerMenu = document.querySelector(".menuBurger");
var menuLayout = document.querySelector(".menuLayout");
burgerMenu.addEventListener("click", () => {
    menuLayout.classList.toggle("none");
});
