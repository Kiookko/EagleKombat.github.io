document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.main-nav a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(tab.getAttribute('href'));

            tabContents.forEach(tc => tc.classList.remove('active'));
            target.classList.add('active');
        });
    });

    // Установим активной первую вкладку по умолчанию
    tabContents[0].classList.add('active');
});

function showMore() {
    alert('Показать больше информации о новости.');
}
