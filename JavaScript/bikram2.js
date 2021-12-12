//1:
let arrayVacio = [];
//2
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//3
let arrayNumerosPares = [0, 2, 4, 6, 8];
//4
let arrayBidemensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];
//5
suma = (a, b) => {
  console.log(a + b);
};

function suma2(a, b) {
  return a + b;
}

//6
potenciacion = (a, b) => {
  a ^ b;
};

function potenciacion(a, b) {
  return a ^ b;
}

//7
separarPalabras = (string) => {
  let sol = [];
  return sol.push(string);
};

//8
repetirString = (arr, n) => {
  let concat = [];
  for (let i = 0; i < n; i++) {
    concat = concat.concat(arr);
  }
  return concat;
};
//9
//10
ordenarArray = (arr) => {
  return arr.sort(function (a, b) {
    return b - a;
  });
};
//11
obtenerPares = (arr) => {
  arrSol = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) arrSol.push(arr[i]);
  }
};
//12
pintarArray = (arr) => {
  let arr2 = ["["];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i]);
    if (i != arr.length - 1) {
      arr2.push(",");
    }
  }
  arr2.push("]");
  arr2 = arr2.join("");
  let solAlternativa = JSON.stringify(arr);
  console.log(arr2, solAlternativa);
};
pintarArray([0, 1, 2]);
//13
arrayMapi = (arr, callback) => {
  callback(arr);
};
function callback(arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i] * 2;
  }
}
arrayMapi([1, 2, 3], callback);

//14
eliminarDuplicador = (arr) => {
  let result = arr.filter((value, i) => {
    return arr.indexOf(value) === i;
  });
};
eliminarDuplicador([2, 4, 5, 5, 4, 1, 8, 2, 1, 2]);
//15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
//16
let holaMundo = ["hola", "mundo"];
//17
let loGuardoTodo = ["hola", "que", "3", ".3"];
//18
arraDeArrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "direccion"],
];
//19
multiplicacion = (a, b) => {
  console.log(a * b);
};
//20
division = (a, b) => {
  console.log(a / b);
};
//21
esPar = (n) => {
  return (result = n % 2 == 0 ? true : false);
};
//22
arrayFunciones = (arr) => {
  suma(arr[0], arr[1]);
  multiplicacion(arr[0], arr[1]);
};
//23
ordenarArray2 = (arr) => {
  return arr.sort(function (a, b) {
    return a - b;
  });
};
//24
obtenerPares = (arr) => {
  arrSol = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) arrSol.push(arr[i]);
  }
};
//25
sumarArray = (arr) => {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
};
//26
multiplicarArray = (arr) => {
  let multipliacion = 1;
  for (let i = 0; i < arr.length; i++) {
    multiplicacion *= arr[i];
  }
};
