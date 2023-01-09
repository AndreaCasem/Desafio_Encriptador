var inputText = document.querySelector('#input-text');
let outputText = document.querySelector('#output-text');
let copy = document.querySelector('#output-text');
let messageDisplay = document.querySelector('#message');
let outputContainer = document.querySelector('#output-container');
const btnEncrypt = document.querySelector('#btn-encrypt');
const btnUnencrypt = document.querySelector('#btn-unencrypt');
const btnCopy = document.querySelector('#btn-copy');

//Función para encriptar
function encrypt() {
    inputText = document.querySelector('#input-text').value;
    let encryptText = inputText
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

    if (/^$/.test(inputText)) {
        alert('El campo de texto está vacío, por favor ingrese una palabra');
    } else if (/[^a-z ]/.test(inputText)) {
        inputText = document.querySelector('#input-text').value = '';
        document.querySelector('.text-info .info').style.color = '#CD0404';
        document.querySelector('.text-info .fa-circle-info').style.color = '#CD0404';
    } else {
        document.querySelector('.text-info .info').style.color = '#333333';
        document.querySelector('.text-info .fa-circle-info').style.color = '#333333';
        inputText = document.querySelector('#input-text').value = '';
        outputText.value = encryptText;
        hide();  
    }   
}

//Función para desencriptar el mensaje
function unencrypt() {
    inputText = document.querySelector('#input-text').value;
    let unencryptText = inputText
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

    outputText.value = unencryptText;
    inputText = document.querySelector('#input-text').value = '';
    outputContainer.style.display = 'block';
    messageDisplay.style.display = 'none';
}

//Función para copiar el mensaje encriptado
function copyText() {
    copy.select();
    document.execCommand('copy');
    alert("Copiado el mensaje");
    messageDisplay.style.display = 'flex';
    outputContainer.style.display = 'none';
}

//Función para ocultar el display del mensaje inicial
function hide() {
    messageDisplay.style.display = 'none';
    outputContainer.style.display = 'block';
}

//Botones
btnEncrypt.onclick = encrypt;
btnUnencrypt.onclick = unencrypt;
btnCopy.onclick = copyText;