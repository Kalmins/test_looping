const prompt = require('prompt-sync')({sigint:true});

let a = 1
let b = 5
let teks = ''

for (; a <= b; a += 1) {
  teks += '1 2 3 4 5\n'
}

console.log(teks)
