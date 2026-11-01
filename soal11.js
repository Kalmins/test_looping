const prompt = require('prompt-sync')({sigint:true});

let a = 1
let b = 5
let teks = ''

for (; a <= b; a += 1) {
  let kolom = 1

  while (kolom <= a) {
    teks += '*'
    kolom += 1
  }

  teks += '\n'
}

console.log(teks)
