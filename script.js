// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const eagle = document.getElementById('eagle');
    const clickCount = document.getElementById('clickCount');
    const resetButton = document.getElementById('resetButton');
    const customButton = document.getElementById('customButton');
    let count = 0;

    eagle.addEventListener('click', () => {
        count++;
        clickCount.textContent = count;
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        clickCount.textContent = count;
    });

    customButton.addEventListener('click', () => {
        alert('Кастомная кнопка нажата!');
    });
});