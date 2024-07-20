// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const clickButton = document.getElementById('clickButton');
    const clickCount = document.getElementById('clickCount');
    const resetButton = document.getElementById('resetButton');
    let count = 0;

    clickButton.addEventListener('click', () => {
        count++;
        clickCount.textContent = count;
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        clickCount.textContent = count;
    });
});
