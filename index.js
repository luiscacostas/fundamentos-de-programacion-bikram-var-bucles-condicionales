//Variables
let variableSinValor;
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = 2 * PI;

//Booleanos
let booleanoAnd = booleano1 && booleano2;  //Si ambos true = true. Si alguno false = false
let booleanoNot = !booleano1;
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 ||(!booleano1 && !booleano2)); //1 si es verdadero
console.log(booleanoNot);
console.log(booleanoMix0);

//Operadores
let incrementarDesp = 2;//Se incremento el paso posterior 3
let resultadoDesp = incrementarDesp++;//asigna valor sin incremento 2
console.log(resultadoDesp);
console.log(incrementarDesp);

let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;
console.log(incrementarAntes);
console.log(resultadoAntes);

//Bucles
let contarHasta10_2 = 0;

for(let i = 1; i <= 10; i++){
    contarHasta10_2++;
}
console.log(contarHasta10_2);

let postI = 0;
let postJ = 0;

for(let i = 0; i <= 10; i++){
    postI += postJ++;
}
console.log(postI)
console.log(postJ)

let sumaPares = 0;
for(let i = 0; i < 10; i++){
    if(i % 2 === 0){
        sumaPares += i;
    }
}
console.log(sumaPares);

//Iteraciones Proyecto individual
//Variables
let variableValorNumerico = 10;
const MiNombre = 'Luis Carlos';
const MiNumeroFav = 7;
let booleanoOr = booleano1 || booleano2;
let booleanoMix1 = ((booleano1 && TAU/2) === PI) || (variableValorNumerico >= MiNumeroFav);
let seisNoEsNueve = 6 !== 9;
let booleanoMix2 = ((variableValorNumerico > 0) || (variableValorNumerico < -(MiNumeroFav * TAU)));

//Operadores
let valorSuma = MiNumeroFav + variableValorNumerico;
let valorResta = MiNumeroFav - variableValorNumerico;
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
let valorDivision = MiNumeroFav / 3;

//Bucles
let contarHasta10 = 0;

while(contarHasta10 !== 10){
    contarHasta10++;
}
console.log(contarHasta10);

let preI = 0;
let preJ = 0;

for(let i = 0; i <= 10; i++){
    preI += ++preJ;
}

let sumaImpares = 0;

for(let i = 0; i < 10; i++){
    if(i % 2 !== 0){
        sumaImpares += i;
    }
}
console.log(sumaImpares)