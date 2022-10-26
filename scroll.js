const boxes = document.querySelectorAll('.card');
// checkboxes();
const event = window.addEventListener('scroll', checkboxes);
function checkboxes() {
  const triggerBottom = (window.innerHeight * 5) / 4;
  // console.log(triggerBottom);
  boxes.forEach((box) => {
    const BoxTop = box.getBoundingClientRect().top;
    // console.log(BoxTop);
    if (BoxTop < triggerBottom) {
      boxes.classList.add('show');
    } else {
      boxes.classList.remove('show');
    }
  });
}
