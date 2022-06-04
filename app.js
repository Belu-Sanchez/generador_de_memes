const input = document.getElementById('input');
const renderText = document.getElementById('render-text');

input.addEventListener('input', (event ) => {
    const textoIngresado = event.target.value;
    renderText.innerHTML = textoIngresado;
})