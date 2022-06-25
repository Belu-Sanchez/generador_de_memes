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

const masterBox = document.getElementById('master-box-img'); 
const inputUrl = document.getElementById('input-url');

const brightnessRange = document.getElementById('brightness-range-input');
const opacityRangeInput = document.getElementById('opacity-range-input');
const contrastRangeInput = document.getElementById('contrast-range-input');
const blurRangeInput = document.getElementById('blur-range-input');
const grayscaleRangeInput = document.getElementById('grayscale-range-input');
const sepiaRangeInput = document.getElementById('sepia-range-input');
const hueRotationRangeInput = document.getElementById('hue-rotation-range-input');
const saturationRangeInput = document.getElementById('sturarion-range-input');
const invertRangeInput = document.getElementById('invert-range-input');

const resetButton = document.getElementById('reset-button');

const colorFondoInput = document.getElementById('color-fondo-input');
const colorFondoLabel = document.getElementById('color-fondo-label');
const blackBox = document.getElementById('black-box');

const typeColorText = document.getElementById('type-color-text');


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
// IMAGEN - URL Mostrar imagen
// **********************************************************

inputUrl.addEventListener('input', (event) => {
    const  mostrarImage = event.target.value;
    masterBox.style.backgroundImage = `url(${mostrarImage})`
})

// **********************************************************
// IMAGEN - Filtro imagen - INPUT COLOR
// **********************************************************

colorFondoInput.addEventListener('input', (event) =>{
    const filterTypeColor = event.target.value;
    blackBox.style.background = filterTypeColor
    colorFondoLabel.innerHTML = `${filterTypeColor}`
})

// **********************************************************
// IMAGEN - BLEND MODES
// **********************************************************
const selectBlendModes = document.getElementById('select-blend-modes');

selectBlendModes.addEventListener('change', (event) =>{
    const blendModes = event.target.value;
    masterBox.style.mixBlendMode = blendModes;
});


// **********************************************************
// IMAGEN - Filtros imagen -
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

saturationRangeInput.addEventListener('input', (event) => {
    const  saturationRangeImage = event.target.value;
    masterBox.style.filter = `saturate(${saturationRangeImage}%)`
})

invertRangeInput.addEventListener('input', (event) => {
    const  invertRangeImage = event.target.value;
    masterBox.style.filter = `invert(${invertRangeImage})`
})

// **********************************************************
// IMAGEN - RESET
// **********************************************************

resetButton.addEventListener('click', () => {
    brightnessRange.value = 1;
    opacityRangeInput.value = 1;
    contrastRangeInput.value = 1;
    blurRangeInput.value = 0.1;
    grayscaleRangeInput.value = 0;
    sepiaRangeInput.value = 0;
    hueRotationRangeInput.value = 0;
    saturationRangeInput.value = 10;
    invertRangeInput.value = 0;
    masterBox.style.filter = 'none'
})


// *********************************************
// TEXT - modificar el texto top y bottom
// *********************************************

textTopTextarea.addEventListener('input', (event)=>{
    const textoIngresado =  event.target.value;
    topText.innerHTML = textoIngresado
})

textBottomTextarea.addEventListener('input', (event) =>{
    const textoIngresado =  event.target.value;
    bottomText.innerHTML = textoIngresado
})

// **********************************************************
// TEXT - click INPUT sin texto y ocultar / mostrar text/white
// **********************************************************

textTopInput.addEventListener('input', ()=>{
    topText.classList.toggle('oculto');
})

textBottomInput.addEventListener('input', ()=>{
    bottomText.classList.toggle('oculto');
})
transparentBackground.addEventListener('input', ()=>{
    topText.classList.toggle('oculto');
    bottomText.classList.toggle('oculto');


})

 // **********************************************************
// TEXT - FUENTE - aligment-style 
// **********************************************************

const buttonAlignStart = document.getElementById('button-align-left');

buttonAlignStart.addEventListener('click', (event)=>{  
    const alignLeft = event.target.value;
    topText.style.textAlign = `left${alignLeft}`
    bottomText.style.textAlign = `left${alignLeft}`

  })
  
const buttonAlignCenter = document.getElementById('button-align-center');


buttonAlignCenter.addEventListener('click', (event)=>{  
    const alignCenter = event.target.value;
    topText.style.textAlign = `center${alignCenter}`
    bottomText.style.textAlign = `center${alignCenter}`

  })


  const buttonAlignRight = document.getElementById('button-align-right');


  buttonAlignRight.addEventListener('click', (event)=>{  
      const alignRight = event.target.value;
      topText.style.textAlign = `right${alignRight}`
      bottomText.style.textAlign = `right${alignRight}`
  
    })
// **********************************************************
// **********************************************************
// TEXT - number font = INCOMPLETO
// **********************************************************
const  textSizeInput = document.getElementById('text-size-input');

textSizeInput.addEventListener('input', (event) => {
    const NumberFont = event.target.value;
    topText.style.fontSize = NumberFont
    bottomText.style.fontSize = NumberFont
})


//? VER CUANDO CUANDO EL COLOR DE TEXTO O FONDO DEJA DE ANDAR EL BOTON TRANSPARENTE. 



 // **********************************************************
// TEXT - Filtro color fondo - INPUT COLOR
// **********************************************************

const typeColorBox = document.getElementById('type-color-box');

typeColorBox.addEventListener('input', (event) =>{
    const editColorBox = event.target.value;
    topBox.style.background = editColorBox 
    bottomBox.style.background = editColorBox 
})
