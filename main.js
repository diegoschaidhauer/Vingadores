const arr = [1, 2, 3, 4, 5, 6];
const cesta = ["banana", "maçã", "abacate", "abacaxi"];

const squareArr = arr.map(function (item) {
  return item * item;
});

const fruitPosition = cesta.map(function (item, index) {
  return `A/O ${item} está na posição ${index} do array`;
});
//o map ira utilizar sempre o item, fazendo um loop
console.log(squareArr);
console.log(fruitPosition);

const sum = arr.reduce(function (total, next) {
  console.log("total", total);
  console.log("next", next);

  return total + next;
});

//reduce irá recebero valor de cada item e fazer uma equação com o proximo item, n~]ao ira retornar um arrayS

const filter = arr.filter(function (item) {
  return item % 2 === 0;
});

console.log(filter);
//filter é o metodo que irá buscar os itens dentro do array que sejam true de acordo com o parametro utilizado

const find = arr.find(function (item) {
  return item === 4;
});

console.log(find);
//o metodo find, ira procura dentro do array pelo item informado e apresenta-lo, caso nao encontre retornará undefined
