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
const selectBlendModes = document.getElementById('select-blend-modes');
const brightnessRange = document.getElementById('brightness-range-input');
const opacityRangeInput = document.getElementById('opacity-range-input');
const contrastRangeInput = document.getElementById('contrast-range-input');
const blurRangeInput = document.getElementById('blur-range-input');
const grayscaleRangeInput = document.getElementById('grayscale-range-input');
const sepiaRangeInput = document.getElementById('sepia-range-input');
const hueRotationRangeInput = document.getElementById('hue-rotation-range-input');
const saturationRangeInput = document.getElementById('saturation-range-input');
const invertRangeInput = document.getElementById('invert-range-input');
const resetButton = document.getElementById('reset-button');
const colorFondoInput = document.getElementById('color-fondo-input');
const colorFondoLabel = document.getElementById('color-fondo-label');
const blackBox = document.getElementById('black-box');
const fontFamilyInput = document.getElementById('font-family-input');
const colorTextInput = document.getElementById('color-text-input');
const paddingInput = document.getElementById('padding-input')
const lineHeightInput = document.getElementById('line-height-input');
const  textSizeInput = document.getElementById('text-size-input');
const modoOscuroButton = document.getElementById('modo-oscuro-button');
const modoOscuroHeader = document.getElementById('modo-oscuro-header');
const aDowloadButton = document.getElementById('a-dowload-button');
const containerMain = document.getElementById('container-main');
const containerDowloadButton = document.getElementById('container-dowload-button');
const modoOcuroStyle =document.getElementById('modo-ocuro-style');
const colorBackgroundMd = document.getElementById('color-background-md');
const colorTextMd = document.getElementById('color-text-md')
const noOutlineButton = document.getElementById('no-outline-button');
const lightOutlineButton = document.getElementById('light-outline-button');
const darkOutlineButton = document.getElementById('dark-outline-button');
const buttonAlignStart = document.getElementById('button-align-left');
const buttonAlignCenter = document.getElementById('button-align-center');
const buttonAlignRight = document.getElementById('button-align-right');
const colorBoxInput = document.getElementById('color-box-input');
const colorBoxLabel = document.getElementById('color-box-label');

const colorTextLabel = document.getElementById('color-text-label');
const modoClaroButton = document.getElementById('modo-claro-button');

// *********************************************
// CLICK BOTON TEXTO - OCULTAR/MOSTRAR ASIDE
// *********************************************

textIcon.addEventListener('click', ()=>{
    asideText.classList.remove('oculto');
    asideImage.classList.add('oculto');
})

btnXtext.addEventListener('click', ()=>{
    asideText.classList.add('oculto');
})

// *********************************************
// CLICK BOTON IMAGEN - OCULTAR/MOSTRAR ASIDE
// *********************************************


imageIcon.addEventListener('click', ()=>{
    asideImage.classList.remove('oculto');
    asideText.classList.add('oculto');
})

btnXimage.addEventListener('click', ()=>{
    asideImage.classList.add('oculto');
})

// -*-*-*-*-*-**- ASIDE IMAGE -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// **********************************************************
// URL - MOSTRAR IMAGEN
// **********************************************************

inputUrl.addEventListener('input', (event) => {
    const mostrarImage = event.target.value;
    masterBox.style.backgroundImage = `url(${mostrarImage})`;
})

// **********************************************************
// FONDO - INPUT COLOR
// **********************************************************

colorFondoInput.addEventListener('input', (event) =>{
    const filterTypeColor = event.target.value;
    blackBox.style.background = filterTypeColor;
    colorFondoLabel.innerHTML = `${filterTypeColor}`
})

// **********************************************************
// BLEND MODES
// **********************************************************

selectBlendModes.addEventListener('change', (event) =>{
    const blendModes = event.target.value;
    masterBox.style.mixBlendMode = blendModes;
});


// **********************************************************
// FILTROS IMAGEN
// **********************************************************

const filter = ()=>{
    masterBox.style.filter = `brightness(${brightnessRange.value}) opacity(${opacityRangeInput.value}) contrast(${contrastRangeInput.value}%) blur(${ blurRangeInput.value}px) grayscale(${grayscaleRangeInput.value}%) sepia(${sepiaRangeInput.value}%) hue-rotate(${hueRotationRangeInput.value}deg) saturate(${saturationRangeInput.value}%) invert(${invertRangeInput.value})`;
};


brightnessRange.addEventListener('input', filter);
opacityRangeInput.addEventListener('input', filter);
contrastRangeInput.addEventListener('input', filter);
blurRangeInput.addEventListener('input', filter);
grayscaleRangeInput.addEventListener('input', filter);
sepiaRangeInput.addEventListener('input', filter);
hueRotationRangeInput.addEventListener('input', filter);
saturationRangeInput.addEventListener('input', filter);
invertRangeInput.addEventListener('input', filter);


// **********************************************************
// FILTROS IMAGEN - RESET
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
    masterBox.style.filter = 'none';
})

// -*-*-*-*-*-*-*-*-*-*-*-*- ASIDE TEXT -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// *********************************************
// EDIT TEXT TOP AND BOTTOM
// *********************************************

textTopTextarea.addEventListener('input', (event)=>{
    const textoIngresado =  event.target.value;
    topText.innerHTML = textoIngresado;
})

textBottomTextarea.addEventListener('input', (event) =>{
    const textoIngresado =  event.target.value;
    bottomText.innerHTML = textoIngresado;
})

// **********************************************************
// CLICK INPUT -OCULTAR/MOSTRAR TEXT/WHITE
// **********************************************************

textTopInput.addEventListener('input', ()=>{
    topText.classList.toggle('oculto');
})

textBottomInput.addEventListener('input', ()=>{
    bottomText.classList.toggle('oculto');
})

// **********************************************************
// FONT FAMILY
// **********************************************************

fontFamilyInput.addEventListener('input', (event)=>{
    const fontFamily = event.target.value;
    topText.style.fontFamily = `${fontFamily}`;
    bottomText.style.fontFamily = `${fontFamily}`;
})

// **********************************************************
// FONT NUMBER
// **********************************************************

textSizeInput.addEventListener('input', (event) => {
    const NumberFont = event.target.value;
    topText.style.fontSize = `${NumberFont}px`;
    bottomText.style.fontSize = `${NumberFont}px`;
})

// **********************************************************
//  ALIGN TEXT
// **********************************************************

buttonAlignStart.addEventListener('click', (event)=>{  
    const alignLeft = event.target.value;
    topText.style.textAlign = `left${alignLeft}`;
    bottomText.style.textAlign = `left${alignLeft}`;

  })
  
buttonAlignCenter.addEventListener('click', (event)=>{  
    const alignCenter = event.target.value;
    topText.style.textAlign = `center${alignCenter}`;
    bottomText.style.textAlign = `center${alignCenter}`;
  })


  buttonAlignRight.addEventListener('click', (event)=>{  
      const alignRight = event.target.value;
      topText.style.textAlign = `right${alignRight}`;
      bottomText.style.textAlign = `right${alignRight}`;
  
    })

// **********************************************************
// COLOR TEXTO
// **********************************************************

colorTextInput.addEventListener('input', (event) =>{
    const editColorText = event.target.value;
    topText.style.color = editColorText ;
    bottomText.style.color = editColorText;
    colorTextLabel.innerHTML =`${editColorText}`
})


// **********************************************************
// FONDO TRANSPARENTE &&  COLOR FONTO TEXTO
// **********************************************************
const actualizarFondo = ()=>{
    if (transparentBackground.checked){
        topText.style.background = 'none';
        topText.style.position= 'absolute'
        bottomText.style.background = 'none';
        bottomText.style.position = 'absolute';  
    
    }else{
        topText.style.background = `${colorBoxInput.value}`;
        topText.style.position = 'relative';
        bottomText.style.background = `${colorBoxInput.value}`;
        bottomText.style.position = 'relative'; 
    }
  
}
transparentBackground.addEventListener('input', (actualizarFondo));
colorBoxInput.addEventListener('input', (actualizarFondo));
    
   
colorBoxInput.addEventListener('input', (event) =>{
    const editColorBox = event.target.value;
    colorBoxLabel.innerHTML = `${editColorBox}`;  
})


// **********************************************************
// CONTORNO
// **********************************************************

noOutlineButton.addEventListener('click', (event) => {
    const sombra = event.target.value
    topText.style.webkitTextStroke = `${sombra} 0px`;
    bottomText.style.webkitTextStroke = `${sombra} 0px`;
})


lightOutlineButton.addEventListener('click', (event) => {
    const sombra = event.target.value
    topText.style.webkitTextStroke= `${sombra}2px #FFFFFF`;
    topText.style.fontWeight =  '800'
    bottomText.style.webkitTextStroke = `${sombra}2px #FFFFFF`;
    bottomText.style.fontWeight =  '800'
})


darkOutlineButton.addEventListener('click', (event) => {
    const sombra = event.target.value
    topText.style.webkitTextStroke = `${sombra}2px #000000`;
    topText.style.fontWeight =  '800'
    bottomText.style.webkitTextStroke = `${sombra}2px #000000`;
    bottomText.style.fontWeight =  '800'
})



// **********************************************************
//  ESPACIADO
// **********************************************************

paddingInput.addEventListener('input', (event) =>{
    const paddingText = event.target.value
    topText.style.padding = `${paddingText}px 50px`
    bottomText.style.padding = `${paddingText}px 50px`
})

// **********************************************************
// INTERLINEADO
// **********************************************************

lineHeightInput.addEventListener('input', (event)=>{
    const lineHeight = event.target.value;
    topText.style.lineHeight = lineHeight;
    bottomText.style.lineHeight = lineHeight;
})

// **********************************************************
// MODO OSCURO
// **********************************************************


modoClaroButton.addEventListener('click', ()=>{
    modoOscuroHeader.classList.toggle('modo-oscuro');
    textIcon.classList.toggle('modo-oscuro-header-icon');
    imageIcon.classList.toggle('modo-oscuro-header-icon');
    modoOscuroButton.classList.toggle('modo-oscuro-header-icon');
    aDowloadButton.classList.toggle('modo-oscuro-header-icon');
    containerMain.classList.toggle('modo-oscuro-main');
    containerDowloadButton.classList.toggle('modo-oscuro-main');
    asideText.classList.toggle('modo-oscuro-aside');
    asideImage.classList.toggle('modo-oscuro-aside');
    inputUrl.classList.toggle('modo-oscuro-aside-input');
    btnXimage.classList.toggle('modo-oscuro-aside-input');
    selectBlendModes.classList.toggle('modo-oscuro-aside-input');
    modoOcuroStyle.classList.toggle('modo-oscuro-aside-input');
    resetButton.classList.toggle('modo-oscuro-aside-input');
    btnXtext.classList.toggle('modo-oscuro-aside-input');
    textTopTextarea.classList.toggle('modo-oscuro-aside-input');
    textBottomTextarea.classList.toggle('modo-oscuro-aside-input');
    fontFamilyInput.classList.toggle('modo-oscuro-aside-input');
    textSizeInput.classList.toggle('modo-oscuro-aside-input');
    buttonAlignStart.classList.toggle('modo-oscuro-aside-input');
    buttonAlignCenter.classList.toggle('modo-oscuro-aside-input');
    buttonAlignRight.classList.toggle('modo-oscuro-aside-input');
    colorTextMd.classList.toggle('modo-oscuro-aside-input');
    colorBackgroundMd.classList.toggle('modo-oscuro-aside-input');
    noOutlineButton.classList.toggle('modo-oscuro-aside-input');
    lightOutlineButton.classList.toggle('modo-oscuro-aside-input');
    darkOutlineButton.classList.toggle('modo-oscuro-aside-input');
    paddingInput.classList.toggle('modo-oscuro-aside-input');
    lineHeightInput.classList.toggle('modo-oscuro-aside-input');
    brightnessRange.classList.toggle('modo-oscuro-aside-input');
    opacityRangeInput.classList.toggle('modo-oscuro-aside-input');
    contrastRangeInput.classList.toggle('modo-oscuro-aside-input');
    blurRangeInput.classList.toggle('modo-oscuro-aside-input');
    grayscaleRangeInput.classList.toggle('modo-oscuro-aside-input');
    sepiaRangeInput.classList.toggle('modo-oscuro-aside-input');
    hueRotationRangeInput.classList.toggle('modo-oscuro-aside-input');
    saturationRangeInput.classList.toggle('modo-oscuro-aside-input');
    invertRangeInput.classList.toggle('modo-oscuro-aside-input');
    modoClaroButton.classList.toggle('oculto');
    modoOscuroButton.classList.toggle('oculto');

})

modoOscuroButton.addEventListener('click', ()=>{
    modoClaroButton.classList.toggle('oculto');
    modoOscuroButton.classList.toggle('oculto');
    modoOscuroHeader.classList.toggle('modo-oscuro');
    textIcon.classList.toggle('modo-oscuro-header-icon');
    imageIcon.classList.toggle('modo-oscuro-header-icon');
    modoOscuroButton.classList.toggle('modo-oscuro-header-icon');
    aDowloadButton.classList.toggle('modo-oscuro-header-icon');
    containerMain.classList.toggle('modo-oscuro-main');
    containerDowloadButton.classList.toggle('modo-oscuro-main');
    asideText.classList.toggle('modo-oscuro-aside');
    asideImage.classList.toggle('modo-oscuro-aside');
    inputUrl.classList.toggle('modo-oscuro-aside-input');
    btnXimage.classList.toggle('modo-oscuro-aside-input');
    selectBlendModes.classList.toggle('modo-oscuro-aside-input');
    modoOcuroStyle.classList.toggle('modo-oscuro-aside-input');
    resetButton.classList.toggle('modo-oscuro-aside-input');
    btnXtext.classList.toggle('modo-oscuro-aside-input');
    textTopTextarea.classList.toggle('modo-oscuro-aside-input');
    textBottomTextarea.classList.toggle('modo-oscuro-aside-input');
    fontFamilyInput.classList.toggle('modo-oscuro-aside-input');
    textSizeInput.classList.toggle('modo-oscuro-aside-input');
    buttonAlignStart.classList.toggle('modo-oscuro-aside-input');
    buttonAlignCenter.classList.toggle('modo-oscuro-aside-input');
    buttonAlignRight.classList.toggle('modo-oscuro-aside-input');
    colorTextMd.classList.toggle('modo-oscuro-aside-input');
    colorBackgroundMd.classList.toggle('modo-oscuro-aside-input');
    noOutlineButton.classList.toggle('modo-oscuro-aside-input');
    lightOutlineButton.classList.toggle('modo-oscuro-aside-input');
    darkOutlineButton.classList.toggle('modo-oscuro-aside-input');
    paddingInput.classList.toggle('modo-oscuro-aside-input');
    lineHeightInput.classList.toggle('modo-oscuro-aside-input');
    brightnessRange.classList.toggle('modo-oscuro-aside-input');
    opacityRangeInput.classList.toggle('modo-oscuro-aside-input');
    contrastRangeInput.classList.toggle('modo-oscuro-aside-input');
    blurRangeInput.classList.toggle('modo-oscuro-aside-input');
    grayscaleRangeInput.classList.toggle('modo-oscuro-aside-input');
    sepiaRangeInput.classList.toggle('modo-oscuro-aside-input');
    hueRotationRangeInput.classList.toggle('modo-oscuro-aside-input');
    saturationRangeInput.classList.toggle('modo-oscuro-aside-input');
    invertRangeInput.classList.toggle('modo-oscuro-aside-input');

})


// **********************************************************
// DOWLOAD MEME
// **********************************************************

//     domtoimage.toPng(document.getElementById('black-box'))
//    .then((dataUrl) => {
 
//     aDowloadButton.download = 'my-meme.png'
//     aDowloadButton.href = dataUrl
     
    
//    })

// $(document).ready(function(){

	
//     var element = $("#html-content-holder"); // global variable
//     var getCanvas; // global variable
     
//         $("#btn-Preview-Image").on('click', function () {
//              html2canvas(element, {
//              onrendered: function (canvas) {
//                     $("#previewImage").append(canvas);
//                     getCanvas = canvas;
//                  }
//              });
//         });
    
//         $("#btn-Convert-Html2Image").on('click', function () {
//         var imgageData = getCanvas.toDataURL("image/png");
//         // Now browser starts downloading it instead of just showing it
//         var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
//         $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);
//         });
    
//     });
