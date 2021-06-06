// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputEl = document.getElementById('name-input');
console.log(inputEl);
const spanEl = document.getElementById('name-output')
console.log(spanEl);

inputEl.addEventListener('input', () => { !inputEl.value ?  spanEl.textContent = 'незнакомец' : spanEl.textContent = inputEl.value});

// inputEl.addEventListener('blur', (event) => {
//     if (!inputEl.value) {
//         spanEl.textContent = 'незнакомец';
//     } else {
//         spanEl.textContent = inputEl.value;
//     };    
// });