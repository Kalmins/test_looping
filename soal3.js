const prompt = require('prompt-sync')({sigint:true});

let huruf = ['A', 'B', 'C', 'D']

let a = 0
let b = 3 

let teks = ''

for (;a <= b; a += 1) {
  teks += huruf[a] + '. Cerdas\n'
} 

console.log(teks)