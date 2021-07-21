  var addButton = document.querySelector(".addButton Button");
    var header = document.querySelector(".header");
    var body = document.querySelector(".body");
    var addForm = document.querySelector(".newResource");
    var closeButton = document.querySelector(".fa-times");

    function toggleNone() {
      header.classList.toggle("none");
      body.classList.toggle("none");
      addForm.classList.toggle("none");
    }

    addButton.addEventListener("click", () => {
      toggleNone();
    });
    closeButton.addEventListener("click", () => {
      toggleNone();
    });