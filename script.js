//Menu responsive
const btn = document.getElementById("menu-toggle");
const menu = document.querySelector('.nav-links');
const lines = btn.querySelectorAll(".line");
const cls = { open: "open", close: "close" };
let btnClass = cls.open;

btn.addEventListener("click", () => {
  if (btn.classList.contains(cls.open)) {
    btn.classList.remove(btnClass);
    btnClass = cls.close;
    menu.classList.remove('nav-active')
  } else if (btn.classList.contains(cls.close)) {
    menu.classList.add('nav-active')
    btn.classList.remove(btnClass);
    btnClass = cls.open;
  }

  void btn.offsetWidth;
  btn.classList.add(btnClass);
});
