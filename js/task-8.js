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

let size = 30;

function createBoxes(amount) {
    amount = Number(input.value);
    console.log(amount);
    
    for (let i = 0; i < amount; i++) {
        
        const r = Math.floor(Math.random() * (256));
        const g = Math.floor(Math.random() * (256));
        const b = Math.floor(Math.random() * (256));
        const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

        let divEl = document.createElement('div');
        divEl.style.marginBottom = "10px";
        divEl.style.height = `${size + 10*i}px`;
        divEl.style.width = `${size + 10*i}px`;
        divEl.style.backgroundColor = color;
        divEl.style.borderWidth = "2px";
        divEl.style.borderColor = 'tomato';

        divEl.classList.add('new');
        container.appendChild(divEl);
    };
    input.value = "";
};

function destroyBoxes() {
    container.innerHTML = "";
};

createEl.addEventListener('click', createBoxes)
removeEl.addEventListener('click', destroyBoxes);
