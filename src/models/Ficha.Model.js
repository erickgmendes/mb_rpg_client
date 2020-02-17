import AjustesForca from "./AjustesForca.model";

class Ficha {
  constructor(
    nomeJogador,
    nomePersonagem,
    raca,
    classe,
    nivel,
    alinhamento,
    caracteristicasFisicas,
    ajustesForca
  ) {
    this.nomeJogador = nomeJogador;
    this.nomePersonagem = nomePersonagem;
    this.raca = raca;
    this.classe = classe;
    this.nivel = nivel;
    this.alinhamento = alinhamento;
    this.caracteristicasFisicas = caracteristicasFisicas;
    this.ajustesForca = ajustesForca;
  }
}
