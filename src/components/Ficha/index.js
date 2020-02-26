import React, { Component } from "react";

import { Container, Form, Row, Col, Button } from "react-bootstrap";

// Componentes
import TextBox from "../TextBox";
import DisabledTextBox from "../DisabledTextBox";
import ComboBox from "../ComboBox";
import TableArmas from "../TableArmas";
import TableEquipamentos from "../TableEquipamentos";
import TableAcessoMagia from "../TableAcessoMagia";
import TableIdiomas from "../TableIdiomas";
import TableControleMagias from "../TableControleMagias";
import TableListaMagias from "../TableListaMagias";

// API
import { fetchRacas } from "../../service/raca-api";
import { fetchClasses } from "../../service/classe-api";
import { fetchAlinhamentos } from "../../service/alinhamento-api";
import { fetchNiveis } from "../../service/nivel-api";
import { fetchRolagemDados } from "../../service/rolagem-dados-api";
import { fetchForca } from "../../service/forca-api";
import { fetchInteligencia } from "../../service/inteligencia-api";
import { fetchDestreza } from "../../service/destreza-api";
import { fetchConstituicao } from "../../service/constituicao-api";
import { fetchSabedoria } from "../../service/sabedoria-api";
import { fetchCarisma } from "../../service/carisma-api";
import { fetchCalculosClerigo } from "../../service/clerigo-api";

export default class Ficha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomeJogador: "",
      nomePersonagem: "",
      nivel: "1",
      alinhamento: "Caótico",
      raca: "Anão",
      classe: "Clérigo",
      caracteristicasFisicas: "",
      forca: "3",
      destreza: "3",
      constituicao: "3",
      inteligencia: "3",
      sabedoria: "3",
      carisma: "3",

      calculoRaca: {},

      calculoForca: {},
      calculoInteligencia: {},
      calculoDestreza: {},
      calculoConstituicao: {},
      calculoSabedoria: {},
      calculoCarisma: {},

      calculoClerigo: {},

      ba: "0",
      jp: "0",
      pv: "0",
      movimento: "0",
      xp: "0",

      dinheiroInicial: 0,
      dinheiro: {},

      listaArmas: [],
      listaEquipamentos: [],
      listaIdiomas: [],
      listaMagias: [],
      listaAcessoMagia: [],
      listaDinheiro: [],

      esqueleto: 0,
      zumbi: 0,
      carnical: 0,
      inumano: 0,
      aparicao: 0,
      mumia: 0,
      espectro: 0,
      vampiro: 0,

      alinhamentos: [],
      classes: [],
      racas: [],
      niveis: [],
      rolagemDados: []
    };
  }

  componentDidMount() {
    fetchRacas().then(res => this.setState({ racas: res.data }));
    fetchClasses().then(res => this.setState({ classes: res.data }));
    fetchAlinhamentos().then(res => this.setState({ alinhamentos: res.data }));

    this.setState({ niveis: fetchNiveis() });
    this.setState({ rolagemDados: fetchRolagemDados() });

    fetchForca(this.state.forca).then(res =>
      this.setState({ calculoForca: res.data })
    );

    fetchInteligencia(this.state.inteligencia).then(res =>
      this.setState({ calculoInteligencia: res.data })
    );

    fetchDestreza(this.state.destreza).then(res =>
      this.setState({ calculoDestreza: res.data })
    );

    fetchConstituicao(this.state.constituicao).then(res =>
      this.setState({ calculoConstituicao: res.data })
    );

    fetchSabedoria(this.state.sabedoria).then(res =>
      this.setState({ calculoSabedoria: res.data })
    );

    fetchCarisma(this.state.carisma).then(res =>
      this.setState({ calculoCarisma: res.data })
    );

    fetchCalculosClerigo(this.state.nivel).then(res =>
      this.setState({ calculoClerigo: res.data })
    );

    this.calcularClasseArmadura();
  }

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  onChangeForca = event => {
    const valor = event.target.value;
    fetchForca(valor).then(res => this.setState({ calculoForca: res.data }));
    this.setState({ forca: valor });
  };

  onChangeDestreza = event => {
    const valor = event.target.value;
    fetchDestreza(valor).then(res =>
      this.setState({ calculoDestreza: res.data })
    );
    this.setState({ destreza: valor });  
    
    this.calcularClasseArmadura();
  };

  onChangeInteligencia = event => {
    const valor = event.target.value;
    fetchInteligencia(valor).then(res =>
      this.setState({ calculoInteligencia: res.data })
    );
    this.setState({ inteligencia: valor });
  };

  onChangeConstituicao = event => {
    const valor = event.target.value;
    fetchConstituicao(valor).then(res =>
      this.setState({ calculoConstituicao: res.data })
    );
    this.setState({ constituicao: valor });
  };

  onChangeSabedoria = event => {
    const valor = event.target.value;
    fetchSabedoria(valor).then(res =>
      this.setState({ calculoSabedoria: res.data })
    );
    this.setState({ sabedoria: valor });
  };

  onChangeCarisma = event => {
    const valor = event.target.value;
    fetchCarisma(valor).then(res =>
      this.setState({ calculoCarisma: res.data })
    );
    this.setState({ carisma: valor });
  };

  calcularClasseArmadura = () => {
    let destreza = parseInt(
      this.state.calculoDestreza.ajusteAtaqueSurpresaDefesaProtecao ?? 0
    );
    let armadura = 0;
    let raca = parseInt(
      this.state.calculoRaca.ajusteAtaqueSurpresaDefesaProtecao ?? 0
    );
    let outros = 0;

    let ca = 10 + destreza + armadura + raca + outros;

    this.setState({ca, ca})
  };

  calcularJogadaDeProtecao = () => {
    let base = 0;
    let destreza = parseInt(
      this.state.calculoDestreza.ajusteAtaqueSurpresaDefesaProtecao ?? 0
    );
    let constituicao = parseInt(
      this.state.calculoRaca.ajusteAtaqueSurpresaDefesaProtecao ?? 0
    );
    let sabedoria = 0;
    let jp = base + destreza + constituicao + sabedoria;

    this.setState({ jp: jp });
  };

  calcularMovimento = () => {
    let raca = 0;
    let carga = 0;
    let armadura = 0;
    let movimento =  raca + carga + armadura;
    this.setState({movimento: movimento})
  };

  calcularPV = () => {
    let dadoVida = 0;
    let constituicao = 0;
    let pv = dadoVida + constituicao;    
    this.setState({pv: pv})
  };

  calcularBonusAtaque = () => {
    let forca = parseInt(this.calculoForca.ajuste ?? 0);
    let destreza = parseInt(
      this.calculoDestreza.ajusteAtaqueSurpresaDefesaProtecao ?? 0
    );
    let classe = 0; //this.calculoClasse;
    let raca = parseInt(
      this.state.calculoRaca.ajusteAtaqueSurpresaDefesaProtecao ?? 0
    );

    let ba =  forca + destreza + classe + raca;
    this.setState({ba: ba})
  };

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Container>
          <h3>Ficha de Personagem</h3>
          <hr />
          <Row>
            <Col sm={3}>
              <TextBox
                label="Nome do Personagem"
                value={this.state.nomePersonagem}
                onChange={e =>
                  this.setState({ nomePersonagem: e.target.value })
                }
              />
            </Col>
            <Col sm={3}>
              <TextBox
                label="Nome do Jogador"
                value={this.state.nomeJogador}
                onChange={e => this.setState({ nomeJogador: e.target.value })}
              />
            </Col>
            <Col sm={3}>
              <ComboBox
                label="Nível"
                value={this.state.nivel}
                onChange={e => this.setState({ nivel: e.target.value })}
                lista={this.state.niveis}
              />
            </Col>
            <Col sm={3}>
              <ComboBox
                label="Alinhamento"
                value={this.state.alinhamento}
                onChange={e => this.setState({ alinhamento: e.target.value })}
                lista={this.state.alinhamentos}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <ComboBox
                label="Raça"
                value={this.state.raca}
                onChange={e => this.setState({ raca: e.target.value })}
                lista={this.state.racas}
              />
            </Col>
            <Col sm={3}>
              <ComboBox
                label="Classe"
                value={this.state.classe}
                onChange={e => this.setState({ classe: e.target.value })}
                lista={this.state.classes}
              />
            </Col>
            <Col sm={6}>
              <TextBox
                label="Características Físicas"
                value={this.state.caracteristicasFisicas}
                onChange={e =>
                  this.setState({ caracteristicasFisicas: e.target.value })
                }
              />
            </Col>
          </Row>

          <Row>
            <Col sm={2}>
              <DisabledTextBox
                label="Classe Armadura"
                value={this.state.ca}
              />
            </Col>
            <Col sm={2}>
              <DisabledTextBox label="Bônus Armadura" value={this.state.ba} />
            </Col>
            <Col sm={2}>
              <DisabledTextBox label="Jogada Proteção" value={this.state.jp} />
            </Col>
            <Col sm={2}>
              <DisabledTextBox label="Pontos de Vida" value={this.state.pv} />
            </Col>
            <Col sm={2}>
              <DisabledTextBox label="Movimento" value={this.state.movimento} />
            </Col>
            <Col sm={2}>
              <DisabledTextBox label="XP Atual" value={this.state.xp} />
            </Col>
          </Row>

          <Row>
            <Col sm={2}>
              <ComboBox
                label="Força"
                value={this.state.forca}
                onChange={this.onChangeForca}
                lista={this.state.rolagemDados}
              />
            </Col>
            <Col sm={4}>
              <DisabledTextBox
                label="Ajuste de ataque e dano"
                value={this.state.calculoForca.ajuste}
              />
            </Col>
            <Col sm={2}>
              <DisabledTextBox
                label="Carga leve"
                value={this.state.calculoForca.cargaLeve}
              />
            </Col>
            <Col sm={2}>
              <DisabledTextBox
                label="Carga pesada"
                value={this.state.calculoForca.cargaPesada}
              />
            </Col>
            <Col sm={2}>
              <DisabledTextBox
                label="Carga máxima"
                value={this.state.calculoForca.cargaMaxima}
              />
            </Col>
          </Row>

          <Row>
            <Col sm={2}>
              <ComboBox
                label="Inteligência"
                value={this.state.inteligencia}
                onChange={this.onChangeInteligencia}
                lista={this.state.rolagemDados}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Idiomas Adicionais"
                value={this.state.calculoInteligencia.idiomasAdicionais}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Chance de Aprender Magia"
                value={this.state.calculoInteligencia.chanceDeAprenderMagia}
              />
            </Col>
            <Col sm={4}>
              <DisabledTextBox
                label="Magias Arcanas Adicionais"
                value={this.state.calculoInteligencia.magiasArcanasAdicionais}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <ComboBox
                label="Sabedoria"
                value={this.state.sabedoria}
                onChange={this.onChangeSabedoria}
                lista={this.state.rolagemDados}
              />
            </Col>
            <Col sm={5}>
              <DisabledTextBox
                label="Ajuste de Proteção"
                value={this.state.calculoSabedoria.ajusteProtecao}
              />
            </Col>
            <Col sm={5}>
              <DisabledTextBox
                label="Magias Divinas Adicionais"
                value={this.state.calculoSabedoria.magiasAdicionais}
              />
            </Col>
          </Row>

          <Row>
            <Col sm={2}>
              <ComboBox
                label="Destreza"
                value={this.state.destreza}
                onChange={this.onChangeDestreza}
                lista={this.state.rolagemDados}
              />
            </Col>
            <Col sm={5}>
              <DisabledTextBox
                label="Ajuste de ataque, surpresa, defesa e proteção"
                value={
                  this.state.calculoDestreza.ajusteAtaqueSurpresaDefesaProtecao
                }
              />
            </Col>
            <Col sm={5}>
              <DisabledTextBox
                label="Localizar e desarmar armadilhas"
                value={this.state.calculoDestreza.localizarDesarmarArmadilhas}
              />
            </Col>
          </Row>

          <Row>
            <Col sm={2}></Col>
            <Col sm={5}>
              <DisabledTextBox
                label="Mover-se em silêncio e Abrir fechaduras"
                value={
                  this.state.calculoDestreza.moverSeEmSilecioAbrirFechaduras
                }
              />
            </Col>
            <Col sm={5}>
              <DisabledTextBox
                label="Esconder-se nas sombras e Pungar"
                value={this.state.calculoDestreza.esconderSeNasSombrasPungar}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <ComboBox
                label="Constituição"
                value={this.state.constituicao}
                onChange={this.onChangeConstituicao}
                lista={this.state.rolagemDados}
              />
            </Col>
            <Col sm={5}>
              <DisabledTextBox
                label="Pontos de vida e proteção"
                value={this.state.calculoConstituicao.pontosDeVidaEProtecao}
              />
            </Col>
            <Col sm={5}>
              <DisabledTextBox
                label="Chance de ressurreição"
                value={this.state.calculoConstituicao.percentualRessurreicao}
              />
            </Col>
          </Row>

          <Row>
            <Col sm={2}>
              <ComboBox
                label="Carisma"
                value={this.state.carisma}
                onChange={this.onChangeCarisma}
                lista={this.state.rolagemDados}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Número máximo de seguidores"
                value={this.state.calculoCarisma.numeroSeguidores}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Ajuste de reação"
                value={this.state.calculoCarisma.ajuste}
              />
            </Col>
            <Col sm={4}>
              <DisabledTextBox
                label="Quantidade de mortos-vivos afastada"
                value={this.state.calculoCarisma.mortosVivos}
              />
            </Col>
          </Row>

          <h5>Dinheiro</h5>
          <Row>
            <Col sm={3}>
              <TextBox
                label="Inicial (3d6 x 10)"
                value={this.state.dinheiroInicial}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox label="Ouro" value={this.state.dinheiro.ouro} />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Prata"
                value={this.state.dinheiro.prata}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Cobre"
                value={this.state.dinheiro.cobre}
              />
            </Col>
          </Row>

          <h5>Expulsar Mortos</h5>
          <Row>
            <Col sm={3}>
              <DisabledTextBox
                label="Esqueleto"
                value={this.state.calculoClerigo.esqueleto}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Zumbi"
                value={this.state.calculoClerigo.zumbi}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Carniçal"
                value={this.state.calculoClerigo.carnical}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Inumano"
                value={this.state.calculoClerigo.inumano}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <DisabledTextBox
                label="Aparição"
                value={this.state.calculoClerigo.aparicao}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Múmia"
                value={this.state.calculoClerigo.mumia}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Espectro"
                value={this.state.calculoClerigo.espectro}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Vampiro"
                value={this.state.calculoClerigo.vampiro}
              />
            </Col>
          </Row>

          <TableArmas listaArmas={this.state.listaArmas} />
          <br />
          <TableEquipamentos listaEquipamentos={this.state.listaEquipamentos} />
          <br />
          <TableAcessoMagia listaAcessoMagia={this.state.listaAcessoMagia} />
          <br />
          <TableIdiomas listaIdiomas={this.state.listaIdiomas} />
          <br />
          <TableControleMagias
            listaControleMagias={this.state.listaControleMagias}
          />
          <br />
          <TableListaMagias listaMagias={this.state.listaMagias} />
          <br />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    );
  }
}
