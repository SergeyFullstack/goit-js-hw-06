// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputRangeEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');
const fontSizeChange = ({ currentTarget }) => textEl.style.fontSize = `${currentTarget.value}px`;

inputRangeEl.addEventListener('input', fontSizeChange);

