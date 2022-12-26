// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.




const inputEl = document.getElementById('validation-input');
inputEl.addEventListener('blur', onBlurBorderColor);
function onBlurBorderColor(event) {
    let inputValue = event.currentTarget.value;
    if (inputValue.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    if (inputEl.value.length === 0) {
        inputEl.classList.remove('valid');
        inputEl.classList.remove('invalid');
    }
    if (inputEl.value.length !== Number(inputEl.dataset.length) && inputEl.value.length !== 0) {
        inputEl.classList.add('invalid');
    }
}