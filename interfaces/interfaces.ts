interface Humano {
  nome: string;
  idade?: number;
  [prop: string]: any;
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano): void {
  console.log('Olá, ' + pessoa.nome);
}

function mudarNome(pessoa: Humano): void {
  pessoa.nome = 'Yasmin';
}

const pessoa: Humano = {
  nome: 'Matheus',
  idade: 19,
  saudar(sobrenome: string) {
    console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
  },
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: 'Jonas', idade: 30 });
pessoa.saudar('Medeiros');

class Cliente implements Humano {
  nome: string = '';
  saudar(sobrenome: string) {
    console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');

// Interface Função

interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
  return base ** exp;
};

console.log(potencia(3, 10));

interface Object {
  log(): void;
}

Object.prototype.log = function () {
  console.log(this.toString());
};

const x = 2;
const y = 3;
const z = 4;

x.log();
y.log();
z.log();

const cli = {
  nome: 'Matheus',
  toString() {
    return this.nome;
  },
};
cli.log();
