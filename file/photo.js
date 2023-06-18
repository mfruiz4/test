document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".fade-in-out img");
    var textElement = document.getElementById("text-photo");
    var textArray = ["Te amo", "Nuestra primera cena en un restaurante","", "La primera vez que te dije mi amor el 13/06/2022 hace un año", "Y sin duda extrañaré tus stickers y tu ternura"];
    var index = 0;
  
    function fadeOut(element) {
      element.style.opacity = 0;
    }
  
    function fadeIn(element) {
      element.style.opacity = 1;
    }
  
    function showNextImage() {
      var currentImage = images[index];
      fadeOut(currentImage);
      index = (index + 1) % images.length;
      var nextImage = images[index];
      fadeIn(nextImage);
    }
  
    function showNextText() {
      textElement.textContent = textArray[index];
      index = (index + 1) % textArray.length;
    }
  
    // Iniciar la animación
    setInterval(function() {
      showNextImage();
      showNextText();
    }, 8000);
  });
  