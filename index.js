let getMainBox = document.querySelector(".boxes");
let getMainImage = document.querySelector("#main-image");
let getMainSection = document.querySelector(".inner-section");
let getCodingArea = document.querySelector(".coding_area");
let getBackground = document.querySelector(".background");
const editor = () => {
  let getHtml = document.querySelector("#html");
  let getCss = document.querySelector("#css");
  let getJs = document.querySelector("#js");
  let getOutput = document.querySelector("#code");

  // getting the values of editor
  let htmlVal = getHtml.value;
  let cssVal = getCss.value;
  let jsVal = getJs.value;

  getOutput.contentDocument.body.innerHTML = `${htmlVal} <style>${cssVal}</style> `;
  getOutput.contentWindow.eval(jsVal);
};
editor();

getMainImage.addEventListener("click", () => {
  getMainSection.classList.toggle("inner-active");
});
let getFirst = document.querySelector("#first");
let getSecond = document.querySelector("#second");
let getThird = document.querySelector("#third");

getFirst.addEventListener("click", () => {
  getMainBox.classList.add("reverse");
  getCodingArea.classList.add("second");
  getMainBox.classList.remove("first-one");
  getCodingArea.classList.remove("first");
  getCodingArea.classList.remove("coding_area");
  getMainImage.classList.add("main-rotate1")
  getMainImage.classList.remove("main-rotate2")
  getMainImage.classList.remove("main-rotate3")

});
getSecond.addEventListener("click", () => {
  getMainBox.classList.remove("reverse");

  getCodingArea.classList.remove("second");
  getMainBox.classList.remove("first-one");
  getCodingArea.classList.remove("first");
  getCodingArea.classList.add("coding_area");
  getMainImage.classList.add("main-rotate3")
  getMainImage.classList.remove("main-rotate1")
  getMainImage.classList.remove("main-rotate2")


});
getThird.addEventListener("click", () => {
  getMainImage.classList.add("main-rotate2")
  getMainImage.classList.remove("main-rotate1")
  getMainImage.classList.remove("main-rotate3")
  getMainBox.classList.add("first-one");
  getCodingArea.classList.add("first");
  getCodingArea.classList.remove("coding_area");
});
