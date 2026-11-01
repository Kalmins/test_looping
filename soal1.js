const prompt = require('prompt-sync')({sigint:true});

let a = 1
let b = 4
let teks = ''

for (; a <= b ; a += 1) {
  teks += 'Cerdas '
}  
console.log(teks)
