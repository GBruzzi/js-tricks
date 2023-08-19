//Array methods
const champions = [
  {name: 'Aatrox', price: 3000, dificulty: 5},
  {name: 'Zed', price: 5000, dificulty: 10},
  {name: 'Xayah', price: 2000, dificulty: 2}
];

console.log(champions);

// find (itera e retorna o objeto pedido)
const procura = champions.find((product) => product.name === 'Xayah');
console.log({procura});

// findIndex( mesma coisa mas retorna o index)
const procuraIndex = champions.findIndex((product) => product.price === 2000);
console.log({procuraIndex});

//some ( se algum item do array passa na condição , retorna true ou false)
const algum = champions.some((product) => product.name == 'Zed');
console.log({algum});

//every (se todos os itens do array satisfazem a condição , retorna true ou false)
const sempre = champions.every((product) => product.price > 2000);
console.log({sempre});

//map (criar um array novo baseado no antigo , com alguma condição)
const map = champions.map((product) => {
  return {
    ...product,
    dificulty: 5,
    price: 2000
  }
});
console.log({map});

//filter (retorna o array baseado em um filtro)
const filtro = champions.filter((product) => product.price >2000);
console.log({filtro});

//reduce ( mudar o tipo de dado do array )
const reduce = champions.reduce((acummulator,product) => {
  return acummulator + (product.dificulty * product.price);
}, 0);
console.log({reduce});