const frutas = ['maçã', 'pera', 'uva', 'morango', 'banana', 'tangerina'];

// Continue: pula para a proxima iteração.
// Brak: para o laço de repetição.

for (let fruta of frutas) {

    if(fruta === 'uva') {
        console.log('Pulou para a próxima iteração do laço.');
        continue;
    }

    if(fruta === 'banana') {
        console.log('Parou o laço.');
        break;
    }

    console.log(fruta);
}

