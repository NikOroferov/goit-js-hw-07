// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const rangeEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

rangeEl.addEventListener('change', (event) => {
    textEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
});