document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
  
    var inputData = document.getElementById("inputData").value;
    var resultContainer = document.getElementById("result");
  
    resultContainer.textContent = "Datos ingresados: " + inputData;
  });