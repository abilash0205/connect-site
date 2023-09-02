//! Scroll Bar Update
const bodyEl = document.body;
const barEl = document.querySelector(".bar");
const updateBar = () => {
  let scrollBar =
    (window.scrollY / (bodyEl.scrollHeight - window.innerHeight)) * 100;
  barEl.style.width = `${scrollBar}%`;
  requestAnimationFrame(updateBar);
};
updateBar();

//! Contact Form Submission Code
const scriptURL = "https://script.google.com/macros/s/AKfycbzmg8-o8_oCTs-ya-A8cyXCmhwJHTYI0lmORwQNV53E0xByUb--g042oiPicFhPdMX6NQ/exec";
const form = document.forms["submit-to-google-sheet"];
const submitMsg = document.getElementById("confirmMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      submitMsg.innerHTML = "Contact details sent to Admin";
      setTimeout(() => {
        submitMsg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
