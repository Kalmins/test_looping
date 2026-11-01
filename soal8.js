const prompt = require('prompt-sync')({sigint:true});

let a = 2
let b = 10

let jumlah = 0
let teks = ''

while (a <= b) {
  teks += a
  jumlah += a 
  
  if (a < b) {
    teks += ' + '
  }

  a += 2
  
}

teks += ' = ' + jumlah

console.log(teks)