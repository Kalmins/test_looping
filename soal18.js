const prompt = require('prompt-sync')({sigint:true});

let jumlahTabel = Number(prompt('Masukkan jumlah tabel perkalian: '))

let pengali = 1
let teks = ''

while (pengali <= 5) {
  let tabel = 1

  while (tabel <= jumlahTabel) {
    teks += tabel + ' x ' + pengali + ' = ' + (tabel * pengali) + '\t'
    tabel += 1
  }

  teks += '\n'
  pengali += 1
}

console.log(teks)
