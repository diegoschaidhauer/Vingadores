class Pessoa {
  constructor(nome, altura, peso) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
  }
}

class Vingador extends Pessoa {
  constructor(nome, altura, peso, poderes, temArmadura, isMembroFundador) {
    super(nome, altura, peso);
    this.nome = nome;
    this.poderes = poderes;
    this.temArmadura = temArmadura;
    this.isMembroFundador = isMembroFundador;
  }
  lutar() {
    alert(`${this.nome} está lutando usando ${this.poderes[0]}`);
  }
  hulk() {
    alert(
      `Dentre todos os Vingadores, o mais forte é o ${this.nome}, que possui ${this.poderes[0]} e é ${this.poderes[1]}`
    );
  }
}

let thor = new Vingador(
  "Thor",
  "1,85",
  "100kg",
  ["Super Força", "Raio"],
  true,
  true
);

const hulk = new Vingador(
  "Hulk",
  "2,60m",
  "600 kg",
  ["Super Força", "Indestrutivel"],
  true,
  true
);

document.getElementById("hulk").onclick = function () {
  hulk.hulk();
};

document.getElementById("lutar").onclick = function () {
  thor.lutar();
};
