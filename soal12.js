const prompt = require('prompt-sync')({sigint:true});

let a = 5
let teks = ''

while (a >= 1) {
  let kolom = 1

  while (kolom <= a) {
    teks += '*'
    kolom += 1
  }

  teks += '\n'
  a -= 1
}

console.log(teks)
