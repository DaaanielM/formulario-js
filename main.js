const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', validarForm);

function validarForm(e) {
	e.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;
	if (name === '' || email === '' || message === '') {
		const msg = document.getElementById('msg');
		msg.textContent = 'Todos los campos son obligatorios';
	} else {
		formulario.submit();
		formulario.reset();
	}
}
