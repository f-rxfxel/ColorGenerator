// RGB
const r = document.getElementById("r");
const g = document.getElementById("g");
const b = document.getElementById("b");
const rgb = [r, g, b]

// Verifica se o input está vazio
const generateRGB = document.getElementById("generateRGB")
generateRGB.onclick = () => {
  if (!r.value || !g.value || !b.value) {
    alert("Preencha todos os campos para gerar uma cor RGB")
  } else {
    generateBgRGB(`rgb(${r.value}, ${g.value}, ${b.value})`)
    const modalRGB = bootstrap.Modal.getOrCreateInstance('#modalRGB')
    modalRGB.hide()
  }
}

// Valida os caracteres válidos
rgb.forEach(input => {
  input.addEventListener("input", () => {
    const value = input.value;
    if (isNaN(value)) {
      input.value = value.slice(0, -1);
    } else if (value < 0 || value > 255) {
      input.value = Math.min(Math.max(parseInt(value), 0), 255);
    }
  })
});

// Limpa os inputs
const clearRGB = document.getElementById("clearRGB")
clearRGB.onclick = () => rgb.forEach(input => input.value = "");

// Define a cor do background
const bgRGB = document.getElementById("background")
function generateBgRGB(color) {
  bgRGB.style.backgroundColor = color
  rgb.forEach(input => input.value = "");
}
