const formulario = document.getElementById('validacion');
const inputs = document.querySelectorAll('#validacion input');

const expresiones = {
    nombre: /^[A-Za-z\s]{1,20}$/,
    apellido: /^[A-Za-z\s]{1,20}$/,
    usuario: /^[a-zA-Z0-9\_\-]{1,10}$/,
    zip: /^[0-9]{4,}$/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-])[A-Za-z\d!@#$%^&*()_\-]{8,}$/, // 8 caracteres como mínimo
};

const validarFormulario = (e) => {
    const input = e.target;
    switch (input.name) {
        case 'nombre':
            validarCampo(expresiones.nombre, input);
            break;
        case 'apellido':
            validarCampo(expresiones.apellido, input);
            break;
        case 'usuario':
            validarCampo(expresiones.usuario, input);
            break;
        case 'zip':
            validarCampo(expresiones.zip, input);
            break;
        case 'password':
            validarCampo(expresiones.password, input);
            break;
    }
};

const validarCampo = (expresion, input) => {
    if (expresion.test(input.value)) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
});