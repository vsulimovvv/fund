// * ==== Show Filters
export default function showFilters() {
  const menuBtn = document.querySelector(".catalog__filter-btn");
  const menu = document.querySelector(".catalog__side");
  const body = document.querySelector("body");
  const overlay = document.querySelector(".overlay");

  if (menuBtn) {
    menuBtn.addEventListener("click", (e) => {
      menu.classList.toggle("active");
      overlay.classList.toggle("active");
      body.classList.toggle("no-scroll");
    });

    overlay.addEventListener("click", (e) => {
      menu.classList.remove("active");
      overlay.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  }
}
