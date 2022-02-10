let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA]

// console.log(varA, varB, varC);


let a = [1,2,3];
let b = a;
let c = a.slice();

console.log(a, b, c);

b[0] = 10;
c[0] = 5;

console.log(a, b, c);