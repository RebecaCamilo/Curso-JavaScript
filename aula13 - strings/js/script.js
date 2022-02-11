/*
let umaString = "Um \"texto\" ! \\n \\AS\SIM";

// console.log(umaString[1])

console.log(umaString.charAt(1))

console.log(umaString.indexOf('AS'));
console.log(umaString.indexOf('As'));

console.log(umaString.indexOf('o', 3)); //procurar a letra o depois do indice 3
console.log(umaString.indexOf('o', 9)); //procurar a letra o depois do indice 9

console.log(umaString.lastIndexOf('o', 3)); //procurar a letra o antes do indice 3
console.log(umaString.lastIndexOf('o', 9)); //procurar a letra o antes do indice 9

console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[a-z]/));

console.log(umaString.search(/[x]/)); //encontra o indice

console.log(umaString.replace('Um', 'Outra'));
console.log(umaString.replace(/Um/, 'Outro'));
*/

let tx = "O rato roeu a roupa do rei de Roma.";

console.log(tx.replace(/r/, '#'));
console.log(tx.replace(/r/g, '#'));

console.log(tx.length);

console.log(tx.slice(2, 6));
console.log(tx.slice(-5));
console.log(tx.slice(-5, -1));

console.log(tx.split(' '));
console.log(tx.split(' ', 3))

console.log(tx.toUpperCase());
console.log(tx.toLocaleLowerCase());