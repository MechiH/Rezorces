export function ajaxGetOrDelete(url, type, typeOfData, callback) {
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
export function closeGoal() {
    var caret = document.querySelectorAll(".caret");

    for (let i = 0; i < caret.length; i++) {
        if (
            !caret[i].parentNode.parentNode
                .querySelector(".Goaldescription")
                .classList.contains("none")
        ) {
            caret[i].click();
        }
    }
}
export function DateParser(dateValue) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const TodayDate = new Date(dateValue);
    return (
        months[TodayDate.getMonth()] +
        "  " +
        TodayDate.getDate() +
        "," +
        TodayDate.getFullYear()
    );
}
export function fadeOutEffect(fadeTarget) {
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.5;
        } else {
            clearInterval(fadeEffect);
            fadeTarget.style.display = "none";
        }
    }, 200);
}
export function ResponseParserAdd(item, response) {
    var innerContent = item.innerHTML;
    innerContent =
        '<div class="goal" data-id=' +
        response["id"] +
        ">" +
        '<div class="goalHeader">' +
        '<i class="lab la-deviantart spock"></i>' +
        '<p class="titleGoal">' +
        response["title"] +
        "</p>" +
        '<i class="las la-caret-down caret"></i>' +
        "</div>" +
        '<div class="Goaldescription none">' +
        '<div class="rowDesc">' +
        "<p>" +
        '<span class="dateGoal" data-date="' +
        response["date"] +
        '}">' +
        response["date"] +
        "</span>" +
        '<span class="descGoal">' +
        "" +
        response["description"] +
        "" +
        "</span>" +
        "</p>" +
        "</div>" +
        '<div class="rowEdit">' +
        '<i class="las la-i-cursor"></i><i class="las la-trash-alt"></i>' +
        "</div>" +
        "</div>" +
        "</div>" +
        innerContent;
    item.innerHTML = innerContent;
}
export function removeSubmitButton(submitButton) {
    parent = submitButton.parentNode;
    var clonedButton = submitButton.cloneNode(true);
    parent.insertBefore(clonedButton, submitButton);
    parent.removeChild(submitButton);
}
