const prompt = require('prompt-sync')({sigint:true});

let ukuran = Number(prompt('Masukkan jumlah perkalian: '))

let teks = '*'

for (let kolom = 1; kolom <= ukuran; kolom += 1) {
  teks += '\t' + kolom
}

teks += '\n'

let baris = 1

while (baris <= ukuran) {
  teks += baris

  let kolom = 1
  do {
    teks += '\t' + (baris * kolom)
    kolom += 1
  } while (kolom <= ukuran)

  teks += '\n'
  baris += 1
}

console.log(teks)
