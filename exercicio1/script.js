// Escopo Global
// const nome = 'Maria';
// let idade = 28;

function meuEscopo() {
    // alert(1);
    // const nome2 = "Ana";

    const pessoas = [];

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log("Foi enviado.")
    // };
 
    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = (form.querySelector('.nome')).value;
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');


        pessoas.push({
            nome: nome,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();