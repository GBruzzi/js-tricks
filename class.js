class Time {
  constructor(nome,dataCriacao,titulos,rival) {
    this._nome = nome;
    this._dataCriacao = dataCriacao;
    this._titulos = titulos;
    this._rival = rival;
  }

  get nome() {
    return this._nome.toUpperCase();
  }

  darTitulos() {
    this._titulos += 1
    return this._titulos
  }

  get titulos() {
    return `${this._nome} tem ${this._titulos} títulos`;
  }

  set rival(newRival) {
    this._rival = newRival;
    console.log(`O novo rival do ${this._nome} é ${this._rival}`);
  }
};

const cruzeiro = new Time('cruzeiro',1921,50,'atletico');

console.log(cruzeiro);
cruzeiro.darTitulos();
cruzeiro.darTitulos();
cruzeiro.darTitulos();
console.log(cruzeiro.titulos);
cruzeiro.rival = 'Flamengo';
console.log(cruzeiro);