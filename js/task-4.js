// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const valueEl = document.getElementById('value');
console.log(valueEl);

const incBtnEl = document.querySelector('[data-action="increment"]');
const decBtnEl = document.querySelector('[data-action="decrement"]')

let counterValue = 0;

incBtnEl.addEventListener('click', () => {
    valueEl.textContent = counterValue + 1;
    counterValue++;
});

decBtnEl.addEventListener('click', () => {
    valueEl.textContent = counterValue - 1;
    counterValue--;
})