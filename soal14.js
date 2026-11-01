const prompt = require('prompt-sync')({sigint:true});

let baris = 1
let puncak = 7
let teks = ''

while (baris <= puncak) {
  let kolom = 1

  while (kolom <= baris) {
    teks += '*'
    kolom += 1
  }

  teks += '\n'
  baris += 1
}

baris = puncak - 1

do {
  let kolom = 1

  for (; kolom <= baris; kolom += 1) {
    teks += '*'
  }

  teks += '\n'
  baris -= 1
} while (baris >= 1)

console.log(teks)
