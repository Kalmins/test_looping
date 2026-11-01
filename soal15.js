const prompt = require('prompt-sync')({sigint:true});

let baris = 1
let puncak = 5
let teks = ''

for (; baris <= puncak; baris += 1) {
  let spasi = puncak - baris
  let kolom = 1

  while (spasi > 0) {
    teks += ' '
    spasi -= 1
  }

  do {
    teks += '*'
    kolom += 1
  } while (kolom <= baris)

  teks += '\n'
}

console.log(teks)
