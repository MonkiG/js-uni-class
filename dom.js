// DOM: DOCUMENT OBJECT MODEL
// API DEL NAVEGADOR QUE PERMITE MANIPUAL EL ARBOL DE HTML
// const $h1 = document.querySelector("h1");
// console.log($h1);

// const $section = document.querySelector(".content");

// const $button = document.querySelector(".btn");

const $form = document.querySelector("form");
const $body = document.querySelector("body");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  let showSpan = false; //Variable banderas

  formData.entries().forEach(([key, value]) => {
    if (value == "") {
      showSpan = true;
    }
  });

  if (showSpan) {
    $body.insertAdjacentHTML("beforeend", "<span>No campos vacios</span>");
  }
});

$body.style.backgroundColor = "blue";
