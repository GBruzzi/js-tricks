// function
function soma(n1,n2) {
  return n1 + n2 ;
}

console.log(soma(20,30));

// nomeando arrow function (armazenar em variavel)
const arrowSoma = (n1,n2) => { 
  let soma = n1 + n2;
  return soma; 
}

console.log(arrowSoma(60,60));

// Short syntax (Só precisa do return)
const somaDois = (n1,n2) => n1 + n2;

console.log(somaDois(100,100))