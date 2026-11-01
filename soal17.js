const prompt = require('prompt-sync')({sigint:true});

let huruf = ['a', 'b', 'c', 'd', 'e']
let baris = 0
let teks = ''

do {
  let kolom = 1

  while (kolom <= 5) {
    teks += huruf[baris] + ' '
    kolom += 1
  }

  teks += '\n'
  baris += 1
} while (baris < huruf.length)

console.log(teks)
