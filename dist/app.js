"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./cliente");
var nome = "Dariano";
var idade = 35;
var _cliente = new cliente_1.cliente(nome, idade);
_cliente.mostrarNome();
_cliente.mostrarIdade();
// Declara uma função
var call;
call = function (nome) { return console.log("Cliente", nome); };
call('Maria');
// Usando o operador '?' que representa -> Opcional
function inc(speed, inc) {
    var i = inc || 1;
    return speed + i;
}
console.log('Usando o perador ? - paramentro da função');
console.log('inc(5) = ', inc(5));
console.log('inc(5, 2) = ', inc(5, 2));
//Também é possivel receber o operador '=' que representa -> Opcional
function inc2(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log('Usando operador = -> Paramentro da função');
var numero = 5;
var incremento = 2;
console.log("inc2(" + numero + ") = ', " + inc2(numero));
console.log("inc2(" + numero + ", " + incremento + ") = ', " + inc2(numero, incremento));
// Paramentro REST, transforma num array dentro da função
// Operador '...'
function somar() {
    var valores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        valores[_i] = arguments[_i];
    }
    return valores.reduce(function (a, b) { return a + b; }, 0);
}
var valor1 = 5;
var valor2 = 6;
var valor3 = 10;
console.log("Soma dos valores: " + valor1 + ", " + valor2 + ", " + valor3 + " \u00E9 = , " + somar(valor1, valor2, valor3));
//# sourceMappingURL=app.js.map