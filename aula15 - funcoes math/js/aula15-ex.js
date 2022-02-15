let n = Number(prompt('Digite um número:'));
// let t = 'TESTANDO';

// let n = 16;
// document.body.innerHTML = `O seu nome é: <strong>${nome}</strong><br />`;

const nt = document.getElementById('numero');
const raiz = document.getElementById('raiz');
// const t2 = document.getElementById('teste');
const inteiro = document.getElementById('int')
const nan = document.getElementById('nan');
const res = document.getElementById('resto')


nt.innerHTML = n;
// t2.innerHTML = t;

raiz.innerHTML = `<p>A Rais quadrada de ${n} é: ${n**0.5}</p>`
inteiro.innerHTML = `<p>${n} é inteiro: ${Number.isInteger(n)}</p>`
nan.innerHTML = `<p>${n} é NaN: ${Number.isNaN(n)}</p>`
res.innerHTML = `<p>${n} arredondado para cima é: ${Math.ceil(n)}</p><br><p>${n} arredondado para baixo é: ${Math.floor(n)}</p><br><p>${n} com 2 casas decimais: ${n.toFixed(2)}</p>`




// tex.innerHTML = `<p>Raiz quadrada ${ n ** (1/2)}</p>`;
// tex.innerHTML += `<p>${n} é interio: ${Number.isInteger(n)}</p>`;
// tex.innerHTML += `<p>${n} é NaN: ${Number.isNaN(n)}</p>`;
// tex.innerHTML += `<p>${n} arredondado para cima é: ${Math.ceil(n)}</p>`;
// tex.innerHTML += `<p>${n} arredondado para cima é: ${Math.floor(n)}</p>`;
// tex.innerHTML += `<p>${n} arredondado para cima é: ${n.toFixed(2)}</p>`;







// document.body.innerHTML = `<h1>Seu número é ${n}</h1>`;
// document.body.innerHTML += `<p>Raiz quadrada ${ n ** (1/2)}</p>`;
// document.body.innerHTML += `<p>${n} é interio: ${Number.isInteger(n)}</p>`;
// document.body.innerHTML += `<p>${n} é NaN: ${Number.isNaN(n)}</p>`;
// document.body.innerHTML += `<p>${n} arredondado para cima é: ${Math.ceil(n)}</p>`;
// document.body.innerHTML += `<p>${n} arredondado para cima é: ${Math.floor(n)}</p>`;
// document.body.innerHTML += `<p>${n} arredondado para cima é: ${n.toFixed(2)}</p>`;
