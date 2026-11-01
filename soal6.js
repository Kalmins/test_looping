const prompt = require('prompt-sync')({sigint:true});

let a = 1
let b = 5

let jumlah = 0
let teks = ''

do {
  teks += a + '\n'
  jumlah += a
  a += 1
} while (a <= b)

teks += '- +\n' 
teks += jumlah

console.log(teks)