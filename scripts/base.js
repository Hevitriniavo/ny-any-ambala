document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.querySelector(".jc-b-flex");
    const ul = document.querySelector(".navigation__items");
    const burger = document.createElement("div");
  
    burger.classList.add("burger");
    burger.innerHTML = "☰";
    navContainer.appendChild(burger);
  
    burger.addEventListener("click", () => {
      ul.classList.toggle("show");
    });
  });
  