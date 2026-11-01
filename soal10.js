const prompt = require('prompt-sync')({sigint:true});

let a = 1
let b = 5
let teks = ''

while (a <= b) {
  let kolom = 1

  while (kolom <= 5) {
    teks += 'a '
    kolom += 1
  }

  teks += '\n'
  a += 1
}

console.log(teks)
