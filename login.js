document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    loginForm?.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple email and password validation
        if (email === 'user@alx.com' && password === 'password123') {
            errorMessage.textContent = '';
            alert('Login successful');
            // Redirect to the new page
            window.location.href = 'https://tyronespace.me/';
        } else {
            errorMessage.textContent = 'Invalid email or password';
        }
    });

    const logoutButton = document.getElementById('logoutButton');

    logoutButton?.addEventListener('click', function (event) {
        event.preventDefault();
        alert('You have been logged out');
        window.location.href = 'index.html'; // Redirect to the login page
    });
});

// Function to toggle settings menu
function settingsMenuToggle() {
    const settingsMenu = document.getElementById('settingsMenu');
    settingsMenu.classList.toggle('settings-menu-height');
}
