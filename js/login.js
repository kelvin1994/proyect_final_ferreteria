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

    if (user) {
        // Credenciales correctas
        Swal.fire({
            icon: 'success',
            title: '¡Inicio de sesión exitoso!',
            text: 'Serás redirigido a la página principal.',
            timer: 2000,
            showConfirmButton: false
        }).then(() => {
            // Redirige a la página index.html después de que se cierra el Swal
            window.location.href = '../pages/index.html';
        });
    } else {
        // Credenciales incorrectas
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario o contraseña incorrectos.',
            confirmButtonText: 'Aceptar'
        });
    }
});
