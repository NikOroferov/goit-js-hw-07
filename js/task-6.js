// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const dataInput = document.querySelector('#validation-input');


dataInput.addEventListener("blur", onDataInput);

function onDataInput(event) {
    const inputValue = event.currentTarget.value;

    if (inputValue.length === Number(dataInput.dataset.length)) {
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.add("valid");
    } else {
        event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");
    };
};