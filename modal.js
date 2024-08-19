document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('user-agreement-modal');
    const acceptBtn = document.getElementById('accept-agreement');

    // Check if the user has already accepted the agreement
    if (!localStorage.getItem('agreementAccepted')) {
        modal.classList.remove('hidden');
    }

    // When the user accepts the agreement
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('agreementAccepted', 'true');
        modal.classList.add('hidden');
    });
});
