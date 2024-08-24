
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('../pages/login.html')) {

        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', function(event) {
                event.preventDefault();
  
                localStorage.setItem('authenticated', 'true');
                window.location.href = '../pages/index.html'; 
            });
        }
    } else if (window.location.pathname.endsWith('index.html')) {

        if (!localStorage.getItem('authenticated')) {
            window.location.href = '../pages/login.html'; 
        }
        const logoutButton = document.getElementById('logout');
        if (logoutButton) {
            logoutButton.addEventListener('click', function() {
                localStorage.removeItem('authenticated');
                window.location.href = '../pages/login.html'; 
            });
        }
    }
});