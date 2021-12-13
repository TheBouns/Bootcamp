const pregunta = {
  titulo: "¿A quién ha doblado más veces Constantino Romero?",
  respuestas: [
    {
      label: "Clint Eastwood",
      id: "clint-eastwood",
      name: "actor",
      value: "clint-eastwood",
    },
    {
      label: "James Earl",
      id: "james-earl",
      name: "actor",
      value: "james-earl",
    },
    {
      label: "Roger Moore",
      id: "roger-moore",
      name: "actor",
      value: "roger-moore",
    },
    {
      label: "William Shatner",
      id: "william-shatner",
      name: "actor",
      value: "william-shatner",
    },
    {
      label: "Arnold Schwarzenegger",
      id: "arnold-schwarzenegger",
      name: "actor",
      value: "arnold-schwarzenegger",
    },
  ],
};

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  //le asignamos una variable a la funcion imprimeunarespuesta.
  let unica = imprimeUnaRespuesta(pregunta);
  newHTML += imprimeTodasLasRespuestas(unica);

  return newHTML;
}

function imprimeTitulo(titulo) {
  return `<p>${titulo.titulo}</p>`;
}
//partimos el array que nos llega en 2 e iteramos para imprimir en html los resultado cada label con su input.
function imprimeTodasLasRespuestas(unica) {
  let input = unica[0];
  let label = unica[1];
  let div = [];
  for (let i = 0; i < input.length; i++) {
    div.push(label[i], input[i]);
  }
  console.log(div.join("+"));
  return div.join("");
}
//aqui pusheamos ambas funciones a un array
function imprimeUnaRespuesta(respuesta) {
  let arr = [];
  arr.push(imprimeInput(respuesta));
  arr.push(imprimeLabel(respuesta));
  console.log(arr);
  return arr;
}
//metemos dentro de un array los label para la construccion del form
function imprimeLabel(respuesta) {
  let label = respuesta.respuestas;
  let arr = [];
  for (let i = 0; i < label.length; i++) {
    let res = label[i].label;
    let id = label[i].id;
    arr.push(`<label for = "${id}" >${res}</label>`);
  }
  return arr;
}
//Partiendo de respuesta creamos un array para pushear los diferentes inputs.
function imprimeInput(respuesta) {
  let label = respuesta.respuestas;
  let arr = [];
  for (let i = 0; i < label.length; i++) {
    let name = label[i].label;
    let id = label[i].id;
    let value = label[i].value;
    arr.push(`<input id="${id}" name="actor" type="radio" value="${value}" >`);
  }
  return arr;
}
function boton() {
  alert("Gracias por elegir");
}

document.getElementById("contenedorPreguntas").innerHTML =
  imprimePregunta(pregunta);
