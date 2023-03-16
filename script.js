// RGB
const r = document.getElementById("r");
const g = document.getElementById("g");
const b = document.getElementById("b");

document.getElementById("generateRGB").onclick = () => {
  if (!r.value || !g.value || !b.value) {
    alert("Você deve preencher todos os campos para gerar uma cor!");
  } else {
    let rgb = `rgb(${r.value}, ${g.value}, ${b.value})`;
    changeBgColor(rgb);
  }
};

document.getElementById("clearRGB").onclick = () => {
  r.value = null;
  g.value = null;
  b.value = null;
};

// HEX
const inputHEX = document.getElementById("hex");

document.getElementById("generateHEX").onclick = () => {
  if (!inputHEX.value) {
    alert("Você deve preencher o campo para gerar uma cor!");
  } else {
    if (inputHEX.value.at(0) == "#") {
      changeBgColor(inputHEX.value);
    } else {
      let hex = "#" + inputHEX.value;
      changeBgColor(color);
    }
  }
};

document.getElementById("clearHEX").onclick = () => (inputHEX.value = null);

// Change Background Color
const background = document.getElementById("background");

function changeBgColor(color) {
  background.style.backgroundColor = color;
}

// function trocacor() {
//     background.style.backgroundColor = 'rgb(240, 43, 60)'
// }