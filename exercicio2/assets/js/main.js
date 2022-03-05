const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nImc})`
    
    setResultado(msg, true);
});

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p);
}

function getImc (peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function getNivelImc (imc) {
    const nImc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nImc[5];
    if (imc >= 34.9) return nImc[4];
    if (imc >= 29.9) return nImc[3];
    if (imc >= 24.9) return nImc[2];
    if (imc >= 18.5) return nImc[1];
    if (imc > 18.5) return nImc[0];
    else return 'Valor inválido';
}