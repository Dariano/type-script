"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente = (function () {
    function cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    cliente.prototype.mostrarNome = function () {
        console.log('Meu nome é', this.nome);
    };
    cliente.prototype.mostrarIdade = function () {
        console.log('Minha idade é', this.idade);
    };
    return cliente;
}());
exports.cliente = cliente;
//# sourceMappingURL=cliente.js.map