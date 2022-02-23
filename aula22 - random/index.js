const frutas = ['maçã', 'pera', 'uva', 'morango', 'banana', 'tangerina'];

let i = 0;

// while (i <= frutas.length) {
//     console.log(frutas[i]);
//     i++
// }

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(1, 50);
 
console.log(rand);

while (rand !== 10) {
    rand = random(1, 50);
    console.log(rand);
}


let ran = 10;

do {
    console.log('');
    console.log(rand);
} while (rand !== 10);

