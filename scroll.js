const boxes = document.querySelectorAll('.card');
// checkboxes();
window.addEventListener('scroll', checkboxes);

function checkboxes() {
  const triggerBottom = window.innerHeight  / 5 *4;
  // console.log(triggerBottom);
  boxes.forEach((box) => {
    const BoxTop = box.getBoundingClientRect().top;
    // console.log(BoxTop);
    if (BoxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
