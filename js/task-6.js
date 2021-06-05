// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.getElementById('validation-input');
console.log(inputEl);

inputEl.addEventListener('blur', (e) => {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add("valid");
    }
    else {
        inputEl.classList.add("invalid");
    }
});