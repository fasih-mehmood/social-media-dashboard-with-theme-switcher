const body = document.querySelector("body");
const toggler = document.querySelector(".color-mode");
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  enableDark();
  toggler.checked = true;
} else {
  disableDark();
  toggler.checked = false;
};

function enableDark() {
  body.classList.add("dark");
};

function disableDark() {
  body.classList.remove("dark");
};

toggler.addEventListener("click", () => {
  toggler.checked ?
    enableDark() : disableDark();
})