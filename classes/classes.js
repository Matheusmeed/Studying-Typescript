"use strict";
// Exercício 1 - Classe
class Motoo {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
var motoo = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
var objeto2D = {
    base: 0,
    altura: 0,
};
var retanguloo = Object.create(objeto2D);
retangulo.base = 5;
retangulo.altura = 7;
retangulo.area = function () {
    return this.base * this.altura;
};
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
var estagiarioo = {
    _primeiroNome: '',
};
Object.defineProperty(estagiario, 'primeiroNome', {
    get: function () {
        return this._primeiroNome;
    },
    set: function (valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    },
    enumerable: true,
    configurable: true,
});
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=classes.js.map