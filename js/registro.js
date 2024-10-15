document.getElementById('form-registro').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío del formulario
    
    // Obtener los valores de los campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMsg = document.getElementById('error-msg');

    // Resetear el mensaje de error
    errorMsg.textContent = '';

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        errorMsg.textContent = 'Las contraseñas no coinciden';
        return;
    }

    // Validaciones adicionales podrían ir aquí (como validar el formato del correo)

    // Simular un registro exitoso
    alert('Registro exitoso. Bienvenido, ' + email);

    // Redirigir a la página principal o perfil
    window.location.href = 'index.html';
});
