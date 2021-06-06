// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', (event) => {
    if (inputEl.value.length === Number(inputEl.dataset.length) && !inputEl.getAttribute('class')) {
        inputEl.classList.add("valid");
    } else if (inputEl.value.length === Number(inputEl.dataset.length) && inputEl.classList.contains("valid")) {
    } else if (inputEl.value.length === Number(inputEl.dataset.length) && inputEl.classList.contains("invalid")) {
        inputEl.classList.replace("invalid", "valid");
    } else if (inputEl.value.length !== Number(inputEl.dataset.length) && inputEl.classList.contains("valid")){
        inputEl.classList.replace("valid", "invalid");
    } else {
        inputEl.classList.add("invalid");
    }
});

// inputEl.addEventListener('blur', (event) => {
//     console.log(event.currentTarget);
//     console.log(inputEl.value.length, Number(inputEl.dataset.length));
//     if (inputEl.value.length === Number(inputEl.dataset.length)) {
//         if (!inputEl.getAttribute('class')) {
//             inputEl.classList.add("valid");            
//         } else if (inputEl.classList.contains("invalid")) {
//             inputEl.classList.replace("invalid", "valid");
//         };
//     } else {
//         if (inputEl) {
            
//         }
//         inputEl.classList.replace("valid", "invalid")
//     }
// })