document.addEventListener("DOMContentLoaded", function() {
    const trigger = document.querySelector(".language-trigger");
    const popup = document.querySelector(".language-popup");
  
    trigger.addEventListener("click", function() {
      popup.classList.toggle("show");
    });
  
    document.addEventListener("click", function(event) {
      if (!event.target.closest(".language-trigger")) {
        popup.classList.remove("show");
      }
    });
  });