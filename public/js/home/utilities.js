export function ajax(dataToSend, url, type, typeOfData, callback) {
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
// Html Paser
export function ResponseParserSearch(item, response) {
    item.innerHTML = "";
    response.forEach((element) => {
        item.innerHTML +=
            ' <div class="resource">' +
            '<div class="title">' +
            '<i class="fa fa-google-wallet" aria-hidden="true"></i>' +
            "<h3> <a href=" +
            element["Link"] +
            ">" +
            element["Title"] +
            "</a></h3>" +
            "</div>" +
            '<div class="tags">' +
            '<div class="tag">' +
            element["Tags"] +
            "</div>" +
            "</div>" +
            "</div>";
    });
}
