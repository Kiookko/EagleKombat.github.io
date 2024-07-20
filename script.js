// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const clicksbutton = document.getElementById('clicksbutton');
    const clickCount = document.getElementById('clickCount');
    const resetButton = document.getElementById('resetButton');
    let count = 0;

    clicksbutton.addEventListener('click', () => {
        count++;
        clickCount.textContent = count;
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        clickCount.textContent = count;
    });
});
