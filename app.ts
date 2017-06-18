import { cliente } from './cliente';

let nome: string = "Dariano"
let idade: number = 35

let _cliente = new cliente(nome, idade)

_cliente.mostrarNome()
_cliente.mostrarIdade()

// Declara uma função
let call: (nome: string) => void

call = nome => console.log("Cliente", nome);

call('Maria')


// Usando o operador '?' que representa -> Opcional
function inc(speed: number, inc?: number): number {
    let i = inc || 1

    return speed + i
}

console.log('Usando o perador ? - paramentro da função');


console.log('inc(5) = ', inc(5));
console.log('inc(5, 2) = ', inc(5, 2));

//Também é possivel receber o operador '=' que representa -> Opcional
function inc2(speed: number, inc: number = 1): number {
    return speed + inc
}

console.log('Usando operador = -> Paramentro da função');

let numero = 5
let incremento = 2

console.log(`inc2(${numero}) = ', ${inc2(numero)}`);
console.log(`inc2(${numero}, ${incremento}) = ', ${inc2(numero, incremento)}`);

// Paramentro REST, transforma num array dentro da função
// Operador '...'

function somar(...valores: number[]): number {
    return valores.reduce((a, b) => a + b, 0)
}

let valor1 = 5
let valor2 = 6
let valor3 = 10

console.log(`Soma dos valores: ${valor1}, ${valor2}, ${valor3} é = , ${somar(valor1, valor2, valor3)}`);


