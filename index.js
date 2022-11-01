const body = document.querySelector("body");

const btn = document.querySelector("button");
let soloItem = document.getElementById("test");

soloItem.style.backgroundColor = "red";

let pressed = 0;
function func() {
  pressed++;
  console.log(pressed);

  if (pressed == 1) {
    let myInterval = setInterval(function () {
      let first = Math.floor(Math.random() * 256) + 1;
      let second = Math.floor(Math.random() * 256) + 1;
      let third = Math.floor(Math.random() * 256) + 1;
      for (let i = 0; i < rowItems.length; i++) {
        rowItems[i].style.backgroundColor = `rgb(${first},${second},${third})`;
      }
      if (pressed == 2) {
        pressed = 0;
        clearInterval(myInterval);
      }
    }, 300);
  }
}

btn.addEventListener("click", func);

const rowItems = document.getElementsByClassName("item2");
for (let i = 0; i < rowItems.length; i++) {
  rowItems[i].addEventListener("mouseover", func1);
  rowItems[i].addEventListener("mouseout", func1Break);
}

let pressed1 = 0;
function func1Break() {
  pressed1 = 1;
}

function func1() {
  let myInterval = setInterval(function () {
    console.log(pressed);
    let first = Math.floor(Math.random() * 256) + 1;
    let second = Math.floor(Math.random() * 256) + 1;
    let third = Math.floor(Math.random() * 256) + 1;
    for (let i = 0; i < rowItems.length; i++) {
      rowItems[i].style.backgroundColor = `rgb(${first},${second},${third})`;
    }
    if (pressed1 > 0) {
      pressed1 = 0;
      clearInterval(myInterval);
    }
  }, 300);
}
