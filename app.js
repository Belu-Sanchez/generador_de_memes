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

const textTopInput = document.getElementById('text-top-input');
const topBox = document.getElementById('top-box');
const textBottomInput = document.getElementById('text-bottom-input');
const bottomBox = document.getElementById('bottom-box');

const transparentBackground = document.getElementById('transparent-background');

const masterBox = document.getElementById('master-box'); 
const inputUrl = document.getElementById('input-url');

const brightnessRange = document.getElementById('brightness-range-input');
const opacityRangeInput = document.getElementById('opacity-range-input');
const contrastRangeInput = document.getElementById('contrast-range-input');
const blurRangeInput = document.getElementById('blur-range-input');
const grayscaleRangeInput = document.getElementById('grayscale-range-input');
const sepiaRangeInput = document.getElementById('sepia-range-input');
const hueRotationRangeInput = document.getElementById('hue-rotation-range-input');
const sturarionRangeInput = document.getElementById('sturarion-range-input');
const invertRangeInput = document.getElementById('invert-range-input');


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

// **********************************************************
// click boton sin texto y ocultar mostrar box-white && text
// **********************************************************

textTopInput.addEventListener('click', ()=>{
    topBox.classList.toggle('oculto');
    topText.classList.toggle('oculto');
})

textBottomInput.addEventListener('click', ()=>{
    bottomBox.classList.toggle('oculto');
    bottomText.classList.toggle('oculto');
})

// **********************************************************
// click boton fondo transparente y ocultar mostrar box-black 
// **********************************************************

transparentBackground .addEventListener('click', ()=>{
    topBox.classList.toggle('oculto');
    bottomBox.classList.toggle('oculto');
 })


// **********************************************************
// Mostrar imagen
// **********************************************************

inputUrl.addEventListener('input', (event) => {
    const  mostrarImage = event.target.value;
    masterBox.style.backgroundImage = `url(${mostrarImage})`
})

// **********************************************************
// Filtros imagen -
// **********************************************************

brightnessRange.addEventListener('input', (event) => {
    const brightnessImage = event.target.value;
    masterBox.style.filter = `brightness(${brightnessImage})`
})

opacityRangeInput.addEventListener('input', (event) => {
    const opacityRangeImage = event.target.value;
    masterBox.style.filter = `opacity(${opacityRangeImage})`
})

contrastRangeInput.addEventListener('input', (event) => {
    const contrastRangeImage = event.target.value;
    masterBox.style.filter = `contrast(${contrastRangeImage}%)`
})

blurRangeInput.addEventListener('input', (event) => {
    const blurRangeImage = event.target.value;
    masterBox.style.filter = `blur(${blurRangeImage}px)`
})

grayscaleRangeInput.addEventListener('input', (event) => {
    const grayscaleRangeImage = event.target.value;
    masterBox.style.filter = `grayscale(${grayscaleRangeImage}%)`
})

sepiaRangeInput.addEventListener('input', (event) => {
    const sepiaRangeImage = event.target.value;
    masterBox.style.filter = `sepia(${sepiaRangeImage}%)`
})

hueRotationRangeInput.addEventListener('input', (event) => {
    const  hueRotationRangeImage = event.target.value;
    masterBox.style.filter = `hue-rotate(${hueRotationRangeImage}deg)`
})

sturarionRangeInput.addEventListener('input', (event) => {
    const  sturarionRangeImage = event.target.value;
    masterBox.style.filter = `saturate(${sturarionRangeImage}%)`
})


invertRangeInput.addEventListener('input', (event) => {
    const  invertRangeImage = event.target.value;
    masterBox.style.filter = `invert(${invertRangeImage})`
})

// **********************************************************
// Filtro imagen - INPUT COLOR
// **********************************************************

const typeColor = document.getElementById('type-color');
const blackBox = document.getElementById('black-box');

typeColor.addEventListener('input', (event) =>{
    const filterTypeColor = event.target.value;
    blackBox.style.background = filterTypeColor
})



// **********************************************************
// Reset Filtros imagen - INCOMPLETO
// **********************************************************

//const imageFilter = document.getElementById('image-filter');
//const resetButton = document.getElementById('reset-button');

// resetButton.addEventListener('click', ()=>{
//     const resetFilter = event.target.value;
//     imageFilter.reset(resetFilter)
// })

//document.getElementById('image-filter').reset()