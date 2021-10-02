export function ajaxGetOrDelete(url, type, typeOfData, callback) {
    var loader = document.querySelector("#tea");
    loader.style.display = "block";
    let _token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
    const myHeaders = new Headers();
    myHeaders.append("X-CSRF-Token", _token);
    myHeaders.append("Content-Type", typeOfData);

    fetch(url, {
        method: type,
        headers: myHeaders,
    }).then((response) => {
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

        callback(response);
    });
}
export function ajaxPostOrPut(dataToSend, url, type, typeOfData, callback) {
    let _token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
    const myHeaders = new Headers();
    myHeaders.append("X-CSRF-Token", _token);
    myHeaders.append("Content-Type", typeOfData);

    fetch(url, {
        method: type,
        headers: myHeaders,
        body: JSON.stringify({ data: dataToSend }),
    }).then((response) => {
        callback(response);
    });
}

export function ResponseParserNoteList(item, response) {
    item.innerHTML = "";
    response.forEach((element) => {
        item.innerHTML +=
            '  <div class="noteTitle" data-id=' +
            element["id"] +
            ">" +
            '<i class="lab la-connectdevelop"></i>' +
            "<p>" +
            element["title"] +
            "</p>" +
            " </div>";
    });
}
export function GetContent(TextNoteArea, clickedIdNote) {
    var NoteTitle = document.querySelectorAll(".noteTitle");
    for (let i = 0; i < NoteTitle.length; i++) {
        NoteTitle[i].onclick = function () {
            let id = this.getAttribute("data-id");
            ContentRequest(TextNoteArea, clickedIdNote, id);
            var current = document.getElementsByClassName("noteActive");
            current[0].className = current[0].className.replace(
                " noteActive",
                ""
            );
            this.className += " noteActive";
        };
    }
}
export function ContentRequest(TextNoteArea, clickedIdNote, id) {
    let callback = (e) => {
        e.json().then(function (response) {
            TextNoteArea.innerText = response["content"];
            clickedIdNote.id = response["id"];
        });
    };
    ajaxGetOrDelete("/getNote/" + id, "get", "JSON", callback);
}

export function editNoteContent(TextNoteArea, clickedIdNote) {
    TextNoteArea.addEventListener("keyup", function () {
        var NoteContentAndId = {
            content: TextNoteArea.innerText,
            id: clickedIdNote.id,
        };
        let callback = (e) => {
            e.json().then(function (response) {
                // console.log(response);
            });
        };
        ajaxPostOrPut(
            NoteContentAndId,
            "/editNoteContent",
            "PUT",
            "JSON",
            callback
        );
    });
}
export function removeTexetAreaEventListener(TextNoteArea, clickedIdNote) {
    TextNoteArea.removeEventListener(
        "keyup",
        function () {
            var NoteContentAndId = {
                content: TextNoteArea.innerText,
                id: clickedIdNote.id,
            };
            let callback = (e) => {
                e.json().then(function (response) {
                    // console.log(response);
                });
            };
            ajaxPostOrPut(
                NoteContentAndId,
                "/editNoteContent",
                "PUT",
                "JSON",
                callback
            );
        },
        true
    );
}
export function removeTextArea(TextNoteArea) {
    parent = TextNoteArea.parentNode;
    var newTextNoteArea = document.createElement("div");
    newTextNoteArea.classList.add("TextNoteArea");
    newTextNoteArea.setAttribute("contenteditable", "true");
    parent.insertBefore(newTextNoteArea, TextNoteArea);
    parent.removeChild(TextNoteArea);
}
