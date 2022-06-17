let mensajeIncorrecto = "Respuesta Incorrecta. vuelve a intentarlo!"
let mensajeCorrecto = "Corrécto! Siguiente pregunta";
let respuesta = ["align-text", "center", "color","font-size","border-radius","width"];
let pregunta;
let pregunta1 = [
  "Que propiedad usamos para alinear texto:\n\n◉ align-items\n◉ text-align\n◉ align-text\n",
  "Que valor usamos para alinear al centro:\n\n◉ center\n◉ start\n◉ end\n",
  "Que propiedad usamos para asignar color a una fuente:\n\n◉ background-color\n◉ color-style\n◉ color\n",
  "Que propiedad usamos para asignarle tamaño a una fuente:\n\n◉ font-color\n◉ font-size\n◉ font-style\n",
  "Que propiedad usamos para redondear bordes:\n\n◉ border-style\n◉ border-color\n◉ border-radius\n",
  "Que propiedad usamos para asignarle  ancho a un elemento:\n\n◉ height\n◉ large\n◉ width\n"
];

function preguntas() {
  for (let i = 0; i <=5; i++) {
    pregunta = prompt(pregunta1[i]);
    pregunta = pregunta.toLowerCase();
    while (pregunta != respuesta[i]) {
      alert(mensajeIncorrecto);
      pregunta = prompt(pregunta1[i]);
      pregunta = pregunta.toLowerCase();
      console.log("#" + i + "//" + pregunta + " :No Valida" + "//" + "respuesta incorrecta: " + respuesta[i] + "//" + mensajeIncorrecto);
    }

    if (pregunta == respuesta[i]) {
      alert(mensajeCorrecto);
      console.log("#" + i + "//" + pregunta + " :Valida" + "//" + mensajeCorrecto);
    }
  }
}

function Saludo() {
  let IngresarNombre = prompt("Ingresa tu Nombre");
  alert("Hola " + IngresarNombre + " , Bienvenido!\nEste es un test sencillo sobre propiedades CSS\nDebes elegir y escribir una de las tres opciones de cada pregunta\nSi aciertas pasas a la siguiente pregunta\n\nCOMENCEMOS!");
}


Saludo();

preguntas();

alert ("Felicitaciones!! Finalizaste el test!!");