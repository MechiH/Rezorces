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

export function colorPriority(priority) {
    for (let i = 0; i < priority.length; i++) {
        var TaskPriority = priority[i].getAttribute("data-priority");
        if (TaskPriority === "High") {
            priority[i].style.background = "#FF467E";
        } else if (TaskPriority === "Medium") {
            priority[i].style.background = "#FECD1A";
        } else {
            priority[i].style.background = "#83FFE6";
        }
    }
}
function getDayOrdinal(number) {
    let selector;

    if (number <= 0) {
        selector = 4;
    } else if ((number > 3 && number < 21) || number % 10 > 3) {
        selector = 0;
    } else {
        selector = number % 10;
    }

    return number + ["th", "st", "nd", "rd", ""][selector];
}
export function DateParser(dateValue) {
    const Days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
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
        Days[TodayDate.getDay()] +
        "<span>" +
        getDayOrdinal(TodayDate.getDate()) +
        "," +
        months[TodayDate.getMonth()] +
        "</span>"
    );
}
export function fadeOutEffect(fadeTarget) {
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.3;
        } else {
            clearInterval(fadeEffect);
            fadeTarget.style.display = "none";
        }
    }, 70);
}

export function ResponseListParser(item, response) {
    item.innerHTML = "";
    response.forEach((element) => {
        item.innerHTML +=
            '<div class="Todo">' +
            '<div class="priority" data-priority=' +
            element["priority"] +
            "></div>" +
            "<h2>" +
            element["task"] +
            "</h2>" +
            '<div class="edit" data-id=' +
            element["id"] +
            ">" +
            '<i class="las la-check-circle"></i>' +
            '<i class="las la-i-cursor"></i>' +
            '<i class="las la-truck-loading"></i>' +
            "</div>" +
            "</div>";
    });
}
