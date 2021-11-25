const projects = document.querySelectorAll(".toggle-item");
const hide = document.querySelectorAll("#hide");

function unHide() {
  if (hide[0].classList.contains("hidden")) {
    for (let i = 0; i < projects.length; i++) {
      hide[i].classList.remove("hidden");
    }
  } else {
    for (let i = 0; i < projects.length; i++) {
      hide[i].classList.add("hidden");
    }
  }
}
