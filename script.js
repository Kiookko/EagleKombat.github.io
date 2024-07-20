document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Загрузка ресурсов
    const playerImage = new Image();
    playerImage.src = 'player.png';

    // Игровой цикл
    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Рендеринг игрока
        ctx.drawImage(playerImage, canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100);

        requestAnimationFrame(gameLoop);
    }

    playerImage.onload = () => {
        gameLoop();
    };

    // Обработка ввода
    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':
                // Действие при нажатии вверх
                break;
            case 'ArrowDown':
                // Действие при нажатии вниз
                break;
            case 'ArrowLeft':
                // Действие при нажатии влево
                break;
            case 'ArrowRight':
                // Действие при нажатии вправо
                break;
        }
    });
});
