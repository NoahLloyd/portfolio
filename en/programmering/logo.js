//* Development | The animation doesn't show
// const logo = document.getElementById("ehIbzR3jWBv1");
// logo.classList.add("active");
// document.body.style.backgroundColor = "#0f1012";
// logo.classList.remove("logo-fade");
// logo.classList.add("logo-static");
// document.getElementById("main").classList.add("show");

//* Production
  
const logo = document.getElementById("ehIbzR3jWBv1");
logo.classList.add("active");
document.body.style.overflow = 'hidden'
setTimeout(() => {
  logo.classList.add("logo-fade");
  setTimeout(() => {
    document.body.style.backgroundColor = "#0f1012";
    logo.classList.remove("logo-fade");
    logo.classList.add("logo-static");
    document.body.style.overflow = 'auto'
    document.getElementById("main").classList.add("show");
  }, 3000);
}, 3000);

