document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
  
    var inputData = document.getElementById("inputData").value;
    var inputData2 = document.getElementById("peliculas").value;
    var resultContainer = document.getElementById("result");    
    var resultContainer2 = document.getElementById("result2");
    resultContainer.textContent = "Sr(a): " + inputData;
    resultContainer2.textContent = "Su Pelicula es: " + inputData2;
  });
