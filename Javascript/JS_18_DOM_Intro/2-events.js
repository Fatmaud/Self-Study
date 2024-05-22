//? METHOD-1 (SADECE JAVASCRİPT TE YAZILAN YOL) 1.yol
//?---------------------------------------------------------------

//********** onmouseover, onmouseout */

const js = document.querySelector("#js");
const body = document.querySelector("#badi");

js.onmouseover = () => {
  body.style.backgroundColor = "pink";
}; //"js burada merhaba yazisinin id si, ona refer ediyor"
//onmouseover-üzerine mouse ile gelince style de verilen etki görünecek.

js.onmouseout = () => {
  body.style.backgroundColor = "red";
};

//*********** onclick-ondoubleclick */

const bir = document.querySelector(".bir");
const iki = document.querySelector(".iki");

bir.onclick = () => {
  bir.src = "./img/logo2.png";
  iki.src = "./img/js_logo.png";
};

iki.onclick = () => {
  bir.src = "./img/js_logo.png";
  iki.src = "./img/logo2.png";
};

iki.ondblclick = () => {
  iki.src = "./img/bir.jpeg";
};

//*********** onclick-ondoubleclick */
const button = document.querySelector("#btn");
button.onclick = () => {
  badi.style.backgroundImage = "linear-gradient(to right, purple, gray";
  document.querySelector("#par").style.fontSize = "40px";
  button.textContent = "TIKLANDI";
};

// ? METHOD-2 (sadece JAVASCRIPT te yazılır- addEventListener())  2.yol
// ? ---------------------------------------------------------------

button.addEventListener("click", () => {
  badi.style.backgroundImage = "linear-gradient(to right, purple, gray";
  document.querySelector("#par").style.fontSize = "40px";
  button.textContent = "TIKLANDI";
});

//?METHOD-3 (HTML-INLINE)
//?---------------------------------------------------------------
// /* <h1 onmouseover="style.color='blue' " onmouseout="style.color='yellow' "> */------inline oldugu icin html üzerinde yaptik
