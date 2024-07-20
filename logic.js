// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const eagleButton = document.getElementById('eagleButton');
    const clickCount = document.getElementById('clickCount');
    const resetButton = document.getElementById('resetButton');
    let count = 0;

    eagleButton.addEventListener('click', () => {
        count++;
        clickCount.textContent = count;
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        clickCount.textContent = count;
    });
});
