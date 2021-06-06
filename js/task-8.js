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
    for (let i = 1; i <= Number(input.value); i++) {
        const r = Math.floor(Math.random() * (256));
        const g = Math.floor(Math.random() * (256));
        const b = Math.floor(Math.random() * (256));
        const color = '#' + r.toString(16) + g.toString(16) + b.toString(16); 
        console.log(r);
        console.log(g);
        console.log(b);
        console.log(color);
        let divEl = document.createElement('div');
        divEl.style.marginBottom = "10px";
        divEl.style.height = `${i * 30}px`;
        divEl.style.width = `${i * 30}px`;
        divEl.style.backgroundColor = color;
        divEl.style.borderWidth = "2px";
        divEl.style.borderColor = 'tomato';
        divEl.classList.add('new');
        container.appendChild(divEl);
    };
    input.value = "";
})

removeEl.addEventListener('click', (e) => {
    container.innerHTML = "";
});

