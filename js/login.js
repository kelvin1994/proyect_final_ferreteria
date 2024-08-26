// Array de usuarios predefinidos
const users = [
    { username: 'kelvin', password: '123' },
    { username: 'user2', password: 'pass2' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada


    const username = document.getElementById('username').value.toLowerCase(); // Convierte a minúsculas
    const password = document.getElementById('password').value;

    // Verifica las credenciales
    const user = users.find(user =>
        user.username.toLowerCase() === username && // Convierte a minúsculas para la comparación
        user.password === password
    );
    
    const messageElement = document.getElementById('message');
    
    if (user) {
        // Credenciales correctas
        messageElement.textContent = '¡Inicio de sesión exitoso!';
        messageElement.className = 'alert alert-success'; 
        messageElement.style.display = 'block'; 
        
        // Redirige a la página index.html
        setTimeout(() => {
            window.location.href = '../pages/index.html';
        }, 500); 
    } else {
        // Credenciales incorrectas
        messageElement.textContent = 'Usuario o contraseña incorrectos.';
        messageElement.className = 'alert alert-danger'; 
        messageElement.style.display = 'block'; 
    }
});