for (let i = -50; i <= 50; i+=10) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}


const frutas = ['maçã', 'pera', 'uva', 'morango', 'banana', 'tangerina'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Item ${i+1}`, frutas[i]);
}