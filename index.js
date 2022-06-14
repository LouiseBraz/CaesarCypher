let message = document.getElementById('message');
let button = document.getElementById('button');
let radioButton = document.querySelector('.radioButton');
let codificar = document.getElementById('codeRadio');
let decodificar = document.getElementById('decodeRadio');
let output = document.getElementById('output');
let shift = document.getElementById('shift');

const alphabet = 'abcdefghijlmnopqrstuvwxyz'.split('');

function encode(message, shift){
  let word = [];
  for (let i = 0; i < message.length; i++){
    let index = alphabet.indexOf(message[i]);
    word.push(index + shift);
  }
  console.log(word)
  const length = alphabet.length;
  return word.map((index) => alphabet[[(index % length + length) % length]]).join('');
}

function decode(message, shift){
  let word = [];
  for (let i = 0; i < message.length; i++){
    let index = alphabet.indexOf(message[i]);
    word.push(index - shift);
  }
  const length = alphabet.length;
  return word.map((index) => alphabet[[(index % length + length) % length]]).join('');
}

function ceaserCypher(message, shift) {
  if (codificar.checked) {
    return encode(message, shift)
  }
  if (decodificar.checked) {
    return decode(message, shift);
  }   
  return "";
}

button.addEventListener("click", function (event) {
  let message = document.getElementById('message').value;
  let shift = document.getElementById('shift').value;
  if (message) {
    event.preventDefault();
    output.value = ceaserCypher(message, parseInt(shift));
  }
});