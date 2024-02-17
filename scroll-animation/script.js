const box = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBtn = (window.innerHeight / 5) * 4;

  box.forEach((boxes) => {
    const boxTop = boxes.getBoundingClientRect().top;

    if (boxTop < triggerBtn) {
      boxes.classList.add("show");
    } else {
      boxes.classList.remove("show");
    }
  });
}
