//* Development | The animation doesn't show
// const logo = document.getElementById("ehIbzR3jWBv1");
// logo.classList.add("active");
// document.body.style.backgroundColor = "#0f1012";
// logo.classList.remove("logo-fade");
// logo.classList.add("logo-static");
// document.getElementById("main").classList.add("show");

//* Production
window.scrollTo(0)
const logo = document.getElementById("ehIbzR3jWBv1");
logo.classList.add("active");
setTimeout(() => {
  logo.classList.add("logo-fade");
  setTimeout(() => {
    document.body.style.backgroundColor = "#0f1012";
    logo.classList.remove("logo-fade");
    logo.classList.add("logo-static");
    document.getElementById("main").classList.add("show");
  }, 3000);
}, 3000);

window.onload(() => window.scrollTo(0))
