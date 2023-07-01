let playOnce = true;
const popupProjets1 = document.querySelector(".projet1");
const popupProjets2 = document.querySelector(".projet2");

window.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  // Popup projets
  if (scrollValue > 0.45) {
    popupProjets1.style.opacity = 1;
    popupProjets1.style.transform = "none";
    popupProjets2.style.opacity = 1;
    popupProjets2.style.transform = "none";
  }

  // Popup
  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});
