const html = document.documentElement;
let position = 0;
window.addEventListener("scroll", (scroll) => {
  if (window.scrollY > position) {
      html.classList.add('down')
  } else {
    html.classList.remove('down')
  }
  position = window.scrollY;
});
