function chauchat(cargador) {
  let contadorDisparos = 0;
  for (let i = 0; i < cargador.length; i++) {
    let pillada = Math.random() * 10;

    if (contadorDisparos == 2) {
      contadorDisparos = 0;
      console.log("Pium!");
      console.log(" ");
    } else {
      console.log("Pium!");
      contadorDisparos++;
    }

    if (contadorDisparos > 0 && pillada < 2) {
      console.log("Illo, me he quedao pillá!");
      break;
    }
  }
}
let cargador = ["!Pium", "!Pium", "!Pium", "!Pium"];

chauchat(cargador);
