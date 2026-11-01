const prompt = require('prompt-sync')({sigint:true});

let a = 1 
let b = 5

let jumlah = 0 
let teks = ''

while (a <= b) {
  teks += a
  jumlah += a

  if (a < b) {
    teks += ' + '
  }

  a += 1
}

teks += ' = ' + jumlah

console.log(teks)