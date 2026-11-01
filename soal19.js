const prompt = require('prompt-sync')({sigint:true});

let jumlahNilai = Number(prompt('Masukkan jumlah nilai: '))

let jumlah = 0

for (let i = 1; i <= jumlahNilai; i += 1) {
  const nilai = Number(prompt('Masukkan nilai ke-' + i + ': '))
  jumlah += nilai
}

const rataRata = jumlah / jumlahNilai

console.log('Jumlah nilai: ' + jumlah)
console.log('Rata-rata: ' + rataRata)
