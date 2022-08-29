let encryptBtn = document.getElementById('encryptBtn');
let decryptBtn = document.getElementById('decryptBtn');
let inputBox = document.getElementById('inputText');
let outputBox=document.getElementById('outputText');
let inputs=[inputBox,outputBox];

inputs.forEach(input => {
    input.oninput = () =>{
        input.value=input.value.toUpperCase()
    }
})

function CaesarCipherEncrypt() {
    let inputBox=document.getElementById('inputText').value;
    let encOut="";
    let n = parseInt(document.getElementById('shiftValue').value);
    for (var i = 0; i < inputBox.length; i++) {
        let ascValue=inputBox[i].charCodeAt();
        let sum=ascValue+n;
        sum>=65 && sum<=90 ? encOut+=String.fromCharCode(sum):sum>90?encOut+=String.fromCharCode(64+(sum-90)):encOut+=inputBox[i]  
    }
    outputBox.value=encOut
}
encryptBtn.addEventListener('click',CaesarCipherEncrypt)


function CaesarCipherDecrypt() {
    let inputBox=document.getElementById('inputText').value;
    let decOut="";
    let n = parseInt(document.getElementById('shiftValue').value);
    for (var i = 0; i < inputBox.length; i++) {
        let ascValue=inputBox[i].charCodeAt();
        let sum=ascValue-n;
        sum>=65 && sum<=90 ? decOut+=String.fromCharCode(sum):sum<65?decOut+=String.fromCharCode(sum+26):decOut+=inputBox[i]  
    }
    outputBox.value=decOut
}
decryptBtn.addEventListener('click',CaesarCipherDecrypt)
