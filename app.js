const textTopTextarea = document.getElementById('text-top-textarea');
const topText = document.getElementById('top-text');
const textBottomTextarea = document.getElementById('text-bottom-textarea');
const bottomText = document.getElementById('bottom-text');

const textIcon = document.getElementById('text-icon');
const asideText = document.getElementById('aside-text');
const btnXtext = document.getElementById('btn-x-text')

const imageIcon = document.getElementById('image-icon');
const btnXimage = document.getElementById('btn-x-image');
const asideImage = document.getElementById('aside-image');

// *********************************************
// modificar el texto top y bottom
// *********************************************

textTopTextarea.addEventListener('input', (event)=>{
    const textoIngresado =  event.target.value;
    topText.innerHTML = textoIngresado
})

textBottomTextarea.addEventListener('input', (event) =>{
    const textoIngresado =  event.target.value;
    bottomText.innerHTML = textoIngresado
})
// *********************************************
// click boton texto y ocultar mostrar aside
// *********************************************

textIcon.addEventListener('click', ()=>{
    asideText.classList.remove('oculto')
    asideImage.classList.add('oculto')
})

btnXtext.addEventListener('click', ()=>{
    asideText.classList.add('oculto')
})

// *********************************************
// click boton imagen y ocultar mostrar aside
// *********************************************


imageIcon.addEventListener('click', ()=>{
    asideImage.classList.remove('oculto')
    asideText.classList.add('oculto')
})

btnXimage.addEventListener('click', ()=>{
    asideImage.classList.add('oculto')
})
