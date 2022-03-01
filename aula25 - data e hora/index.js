function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

console.log(mostraHora());


// function funcaoDoInterval() {
//     console.log(mostraHora());
// }

// setInterval(funcaoDoInterval, 2000);


// setInterval(function () {
//     console.log(mostraHora());
// }, 2000);

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 6000);

setTimeout(function() {
    console.log('Olá mundo!');
}, 3000);

// const teste = setInterval(function() {
//     console.log('oi');
// }, 1000);

// setTimeout(function() {
//     clearInterval(teste);
// }, 2000);