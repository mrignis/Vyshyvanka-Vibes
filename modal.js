// Отримуємо посилання на бургер-кнопку та модальне вікно
var openModalButton = document.getElementById("openModalButton");
var myModal = document.querySelector(".mymodal");

// Додаємо обробник кліку на бургер-кнопку
openModalButton.addEventListener("click", function() {
  // Додаємо або видаляємо клас "active" для бургер-меню та модального вікна при кліку
  openModalButton.classList.toggle("active");
  myModal.classList.toggle("active");
});

// Додаємо обробник кліку на модальне вікно для закриття (опціонально)
myModal.addEventListener("click", function(event) {
  if (event.target === myModal) {
    openModalButton.classList.remove("active");
    myModal.classList.remove("active");
  }
});
