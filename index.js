let index = 0;
let imgwidth = 500;
let positionvalue = 0;

let Prebtn = document.querySelector(".prev");
let Nexbtn = document.querySelector(".next");
let imgbox = document.querySelector(".images");

function next() {
  if (index < 3) {
    Prebtn.disabled = false;
    positionvalue -= imgwidth;
    imgbox.style.transform = `translateX(${positionvalue}px)`;
    index += 1;
  }
  if (index === 3) {
    Nexbtn.disabled = true;
  }
}

function pre() {
  if (index > 0) {
    Nexbtn.disabled = false;
    positionvalue += imgwidth;
    imgbox.style.transform = `translateX(${positionvalue}px)`;
    index -= 1;
  }
  if (index === 0) {
    Prebtn.disabled = true;
  }
}

function render() {
  Prebtn.disabled = true;
  Nexbtn.addEventListener("click", next);
  Prebtn.addEventListener("click", pre);
}

render();
