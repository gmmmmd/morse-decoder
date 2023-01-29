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

function decode(expr) {
    let arr = [];

    for (let i = 0; i < expr.length; i += 10) {
      arr.push(expr.slice(i, i + 10));
    }

    let string;
    const arr2 = [];

    for (let i = 0; i < arr.length; i++) {
      string = '';
      if (arr[i] === "**********") {
        string = "space";
      } else {
        for (let j = 0; j < arr[i].length; j += 2) {
          if (arr[i][j] === '1' && arr[i][j+1] === '1') {
            string += '-';
          } else if (arr[i][j] === '1' && arr[i][j+1] === '0') {
            string += '.';
          }
        }
      }
      arr2.push(string);
    }
    MORSE_TABLE.space = " ";

    const arr3 = arr2.map((i) => {
      return MORSE_TABLE[i]
    });
    return arr3.join('');
  }

module.exports = {
    decode
}