// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const container = document.getElementById("boxes");
const input = document.querySelector('input');
const createEl = document.querySelector('#controls button[data-action="render"]');
const removeEl = document.querySelector('#controls button[data-action="destroy"]');


createEl.addEventListener('click', () => {
    console.log(Number(input.value));
    for (let i = 0; i < Number(input.value); i++) {
        let divEl = document.createElement('div');
        divEl.classList.add('new');
        container.appendChild(divEl);
    }
})

removeEl.addEventListener('click', () => {
    console.log(container.childElementCount);
    for (let i = 0; i < container.childElementCount; i++) {
        let divEl = document.querySelector('.new');
        container.removeChild(divEl);
    };
});

console.log(container);
// input.addEventListener('change', (elem) => {
//     elem.preventDefault();
//     console.log(input.value);
//     create.addEventListener('click', onCreateBoxes(input.value));
// });

// remove.addEventListener('click', destroyBoxes(1));


// function destroyBoxes(amount) {
//     for (let i = 0; i < amount; i++) {
//         container.removeChild(div);
//     }
// };