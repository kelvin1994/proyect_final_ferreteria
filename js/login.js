const users = [
    { username: 'kelvin', password: '123' },
    { username: 'user2', password: 'pass2' }
];
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value.toLowerCase();
    const password = document.getElementById('password').value;
    const user = users.find(user =>
        user.username.toLowerCase() === username && 
        user.password === password
    );
    if (user) {
        Swal.fire({
            icon: 'success',
            title: '¡Inicio de sesión exitoso!',
            text: 'Serás redirigido a la página principal.',
            timer: 2000,
            showConfirmButton: false
        }).then(() => {
          
            window.location.href = '../pages/index.html';
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario o contraseña incorrectos.',
            confirmButtonText: 'Aceptar'
        });
    }
});
