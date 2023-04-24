// HEX
const hex = document.getElementById('hex');

// Verifica se o input está vazio
const generateHEX = document.getElementById("generateHEX")
generateHEX.onclick = () => {
  if (!hex.value) {
    alert("Preencha o campo para gerar uma cor HEX")
  } else {
    generateBgHEX(hex.value)
    const modalHEX = bootstrap.Modal.getOrCreateInstance('#modalHEX')
    modalHEX.hide()
  }
}

// Valida os caracteres válidos
hex.addEventListener('input', function () {
  let inputValue = hex.value;
  const validCharacters = /^[0-9a-fA-F]+$/;

  if (inputValue === '' || inputValue[0] !== '#') {
    inputValue = '#' + inputValue.replace(/[^0-9a-fA-F]+/g, '').slice(0, 6);
    hex.value = inputValue;
  } else if (inputValue.length > 7) {
    hex.value = inputValue.slice(0, 7);
  } else if (!validCharacters.test(inputValue.slice(1))) {
    hex.value = '#' + inputValue.slice(1).replace(/[^0-9a-fA-F]+/g, '');
  }
});

// Limpa os inputs
const clearHEX = document.getElementById("clearHEX")
clearHEX.onclick = () => hex.value = ""

// Define a cor do background
const bgHEX = document.getElementById("background")
function generateBgHEX(color) {
  bgHEX.style.backgroundColor = color
  hex.value = ""
}
