// RGB
const r = document.getElementById("r");
const g = document.getElementById("g");
const b = document.getElementById("b");

document.getElementById("generateRGB").onclick = () => {
  if (!r.value || !g.value || !b.value) {
    alert("Você deve preencher todos os campos para gerar uma cor!");
  } else {
    verifRGB(r);
    verifRGB(g);
    verifRGB(b);
    let rgb = `rgb(${r.value}, ${g.value}, ${b.value})`;
    changeBgColor(rgb);
  }
};

document.getElementById("clearRGB").onclick = () => {
  r.value = null;
  g.value = null;
  b.value = null;
};

function verifRGB(input) {
  input.addEventListener(input, () => {
    const value = input.value;
    if (isNaN(value)) {
      // Se o valor inserido não é um número, remove o último caractere inserido
      input.value = value.slice(0, -1);
    } else if (value < 0 || value > 255) {
      // Se o valor inserido está fora do intervalo desejado, define o valor do input para o limite mais próximo
      input.value = Math.min(Math.max(parseInt(value), 0), 255);
    }
  });
}

// HEX
const inputHEX = document.getElementById("hex");

inputHEX.addEventListener("input", () => {
  if (inputHEX.value.startsWith("#")) {
    inputHEX.maxLength = 7;
  } else {
    inputHEX.maxLength = 6;
  }
});

document.getElementById("generateHEX").onclick = () => {
  if (!inputHEX.value) {
    alert("Você deve preencher o campo para gerar uma cor!");
  } else {
    if (/^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(inputHEX.value)) {
      if (inputHEX.value.startsWith("#")) {
        changeBgColor(inputHEX.value);
      } else {
        changeBgColor("#" + inputHEX.value);
      }
    }
  }
};

document.getElementById("clearHEX").onclick = () => (inputHEX.value = null);

// Change Background Color
const background = document.getElementById("background");

function changeBgColor(color) {
  background.style.backgroundColor = color;
}

const myInput = document.getElementById("myInput");

myInput.addEventListener("input", () => {
  const value = myInput.value;
  if (isNaN(value)) {
    myInput.value = value.slice(0, -1);
  } else if (value < 0 || value > 255) {
    myInput.value = Math.min(Math.max(parseInt(value), 0), 255);
  }
});
