const prompt = require('prompt-sync')({sigint:true});

let a = 1
let b = 5

let jumlah = 0
let teks = ''

for (;a <= b; a += 1) {
  teks += a + ' '
  jumlah += a 
} 

teks += '= ' + jumlah

console.log(teks)