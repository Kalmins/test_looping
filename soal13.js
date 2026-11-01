const prompt = require('prompt-sync')({sigint:true});

let baris = 1
let puncak = 5
let teks = ''

do {
  let kolom = 1

  while (kolom <= baris) {
    teks += '*'
    kolom += 1
  }

  teks += '\n'
  baris += 1
} while (baris <= puncak)

baris = puncak - 1

while (baris >= 1) {
  let kolom = 1

  do {
    teks += '*'
    kolom += 1
  } while (kolom <= baris)

  teks += '\n'
  baris -= 1
}

console.log(teks)
