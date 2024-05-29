const questionBtns = document.querySelectorAll(".question-btn");

questionBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.parentElement.parentElement.classList.toggle("show-text");
  });
});