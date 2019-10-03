const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const TRANSLATE_TABLE = {
  '**': ' ',
  '00': '',
  '10': '.',
  '11': '-',
};

function decode(expr) {
    // write your solution here
    let binaryArray=[];
    let result='';
    expressionToArray(expr,binaryArray);
    for(let binary of binaryArray){
      let morseCode = binaryToMorse(binary);
      let letter = MORSE_TABLE[morseCode];
      if (letter == undefined) {
        result += ' ';
      } else {
        result += letter;
      }
    }
    return result;
}

function expressionToArray(expr, symbolArray) {
  for(let i=0; i<expr.length; i+=10) {
    symbolArray.push(expr.slice(i,i+10));
  }
}

function binaryToMorse(binary) {
  let morseCode = '';
  for (let i=0; i<binary.length; i+=2){
    let morseSign = binary.slice(i,i+2);
    morseCode += TRANSLATE_TABLE[morseSign];
  }
  return morseCode;
}

module.exports = {
    decode
}