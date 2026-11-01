const prompt = require('prompt-sync')({sigint:true});

let puncak = 5
let baris = 1
let teks = ''

while (baris <= puncak) {
  let spasi = puncak - baris
  let kolom = 1

  while (spasi > 0) {
    teks += ' '
    spasi -= 1
  }

  while (kolom <= baris) {
    teks += '*'
    kolom += 1
  }

  teks += '\n'
  baris += 1
}

baris = puncak - 1

do {
  let spasi = puncak - baris
  let kolom = 1

  for (; spasi > 0; spasi -= 1) {
    teks += ' '
  }

  while (kolom <= baris) {
    teks += '*'
    kolom += 1
  }

  teks += '\n'
  baris -= 1
} while (baris >= 1)

console.log(teks)
