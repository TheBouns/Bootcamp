let anchor = document.getElementsByTagName("a");
for (let i = 0; i < anchor.length; i++) {
  anchor[i].addEventListener("click", function (event) {
    event.preventDefault();
  });
}
let imagen = document.getElementsByTagName("img");
imgRandom(imagen);
function imgRandom(imagen) {
  for (let i = 0; i < imagen.length; i++) {
    imagen[i] = addEventListener("click", function (event) {
      event.target.src = `assets/magic-${
        Math.floor(Math.random() * 6) + 1
      }.gif`;
    });
  }
}
let paragraph = document.getElementsByTagName("p");
paragraphChanges(paragraph);
function paragraphChanges(paragraph) {
  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i] = addEventListener("click", function (event) {
      event.target.style.color = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
      event.target.style.background = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
    });
  }
}

let artSec = [
  ...document.getElementsByTagName("article"),
  ...document.getElementsByTagName("section"),
];
changesArticleSection(artSec);
function changesArticleSection(artSec) {
  for (let i = 0; i < artSec.length; i++) {
    artSec[i] = addEventListener("click", function (event) {
      event.target.style.background = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
    });
  }
}
