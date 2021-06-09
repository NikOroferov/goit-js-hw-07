// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const dataInput = document.querySelector('#validation-input');


dataInput.addEventListener("blur", onDataInput);

function onDataInput(event) {
    function updateClass(addClass, remClass) {
        event.currentTarget.classList.remove(remClass);
        event.currentTarget.classList.add(addClass);
    };

    if (event.currentTarget.value.length === Number(dataInput.dataset.length)) {
        updateClass("valid", "invalid");
    } else {
        updateClass("invalid", "valid");
    };
};
