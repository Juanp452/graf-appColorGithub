// Referencias
const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');

const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');

const colorPicker = document.getElementById('colorPicker');
const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');

function componentToHex(c) {
  const hex = parseInt(c, 10).toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function clamp(val) {
  let num = parseInt(val, 10);
  if (isNaN(num) || num < 0) return 0;
  if (num > 255) return 255;
  return num;
}

function updateColor() {
  const r = redRange.value;
  const g = greenRange.value;
  const b = blueRange.value;

  const rgbColor = `rgb(${r}, ${g}, ${b})`;

  // Aplicar el color directamente al recuadro
  colorBox.style.backgroundColor = rgbColor;

  // Código Hexadecimal
  const hex = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`.toUpperCase();
  hexCode.textContent = hex;

  // Sincronizar Color Picker
  colorPicker.value = hex;
}

function handleSliderInput(slider, inputField) {
  inputField.value = slider.value;
  updateColor();
}

function handleNumberInput(inputField, slider) {
  let val = clamp(inputField.value);
  inputField.value = val;
  slider.value = val;
  updateColor();
}

function handleColorPickerInput() {
  const hex = colorPicker.value;
  
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  redRange.value = r;
  redInput.value = r;
  greenRange.value = g;
  greenInput.value = g;
  blueRange.value = b;
  blueInput.value = b;

  updateColor();
}

// Event Listeners
redRange.addEventListener('input', () => handleSliderInput(redRange, redInput));
greenRange.addEventListener('input', () => handleSliderInput(greenRange, greenInput));
blueRange.addEventListener('input', () => handleSliderInput(blueRange, blueInput));

redInput.addEventListener('input', () => handleNumberInput(redInput, redRange));
greenInput.addEventListener('input', () => handleNumberInput(greenInput, greenRange));
blueInput.addEventListener('input', () => handleNumberInput(blueInput, blueRange));

colorPicker.addEventListener('input', handleColorPickerInput);

// Inicialización
document.addEventListener('DOMContentLoaded', updateColor);