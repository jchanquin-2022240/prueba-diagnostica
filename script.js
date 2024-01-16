let options = {
    Iniciar: [
      "Arbol",
      "Computadora",
      "Television",
      "Casa",
      "Felicidades",
      "Chamalito",
      "Guitarra",
      "Playa",
      "Escuela",
      "Electricidad",
      "Lapiz",
      "Moto",
      "Teclado",
      "Sandia",
      "Enfermo",
      "cuaderno",
      "pantalon",
      "monitor",
      "silla",
      "cuadro",
      "tarea",
      "pista",
      "Pedro",
      "corazon",
      "carrera"
    ]
  };
  
  //contar
  let winCount = 0;
  let count = 0;
  
  let chosenWord = "";
  
  //Mostrar botones de opción
  const displayOptions = () => {
    optionsContainer.innerHTML += `<h3>Juego Horcado</h3>`;
    let buttonCon = document.createElement("div");
    for (let value in options) {
      buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
  };

