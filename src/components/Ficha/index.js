import React, { Component } from "react";

import { Container, Form, Row, Col, Button } from "react-bootstrap";
//import { calcularAjusteForca } from "../../util/funcoes-forca";

import TextBox from "../TextBox";
import DisabledTextBox from "../DisabledTextBox";
import ComboBox from "../ComboBox";
import TableArmas from "../TableArmas";
import TableEquipamentos from "../TableEquipamentos";
import TableAcessoMagia from "../TableAcessoMagia";
import TableIdiomas from "../TableIdiomas";
import TableDinheiro from "../TableDinheiro";
import TableControleMagias from "../TableControleMagias";
import TableListaMagias from "../TableListaMagias";

import { fetchRacas } from "../../service/raca-api";
import { fetchClasses } from "../../service/classe-api";
import { fetchAlinhamentos } from "../../service/alinhamento-api";
import { fetchNiveis } from "../../service/nivel-api";
import { fetchRolagemDados } from "../../service/rolagem-dados-api";
import { fetchForca } from "../../service/forca-api";
import { fetchInteligencia } from "../../service/inteligencia-api";

export default class Ficha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomeJogador: "",
      nomePersonagem: "",
      nivel: "1",
      alinhamento: "",
      raca: "",
      classe: "",
      caracteristicasFisicas: "",
      forca: "0",
      destreza: "0",
      constituicao: "0",
      inteligencia: "0",
      sabedoria: "0",
      carisma: "0",

      calculoForca: {},
      calculoInteligencia: {},

      calculoDestreza: {
        destrezaAjuste: "0",
        talentosLadinos: "0"
      },

      calculoConstituicao: {
        ajuste: "0",
        percentualRessurreicao: "0"
      },

      calculoSabedoria: {
        ajuste: "0",
        magiasAdicionais: "0"
      },

      calculoCarisma: {
        ajuste: "0",
        numeroSeguidores: "0",
        mortosVivos: "0"
      },

      ca: "0",
      ba: "0",
      jp: "0",
      pv: "0",
      movimento: "0",
      xp: "0",

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

  onChangeInteligencia = event => {
    const valor = event.target.value;

    fetchInteligencia(valor).then(res => this.setState({ calculoInteligencia: res.data }));

    this.setState({ inteligencia: valor });
  };

  /*onChangeDestreza = (event) => {
        const valor = event.target.value
        this.setState({ forca: valor })

        let ajuste = calcularAjusteDestreza(valor);
        this.setState({ forcaAjuste: ajuste })
    }

    onChangeConstituicao = (event) => {
        const valor = event.target.value
        this.setState({ forca: valor })

        let ajuste = calcularAjusteForca(valor);
        this.setState({ forcaAjuste: ajuste })
    }*/

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
              <ComboBox
                label="Força"
                value={this.state.forca}
                onChange={this.onChangeForca}
                lista={this.state.rolagemDados}
              />
            </Col>
            <Col sm={2}>
              <ComboBox
                label="Destreza"
                value={this.state.destreza}
                onChange={this.onChangeDestreza}
                lista={this.state.rolagemDados}
              />
            </Col>
            <Col sm={2}>
              <ComboBox
                label="Constituição"
                value={this.state.constituicao}
                onChange={this.onChangeConstituicao}
                lista={this.state.rolagemDados}
              />
            </Col>
            <Col sm={2}>
              <ComboBox
                label="Inteligência"
                value={this.state.inteligencia}
                onChange={this.onChangeInteligencia}
                lista={this.state.rolagemDados}
              />
            </Col>
            <Col sm={2}>
              <ComboBox
                label="Sabedoria"
                value={this.state.sabedoria}
                onChange={this.onChangeSabedoria}
                lista={this.state.rolagemDados}
              />
            </Col>
            <Col sm={2}>
              <ComboBox
                label="Carisma"
                value={this.state.carisma}
                onChange={this.onChangeCarisma}
                lista={this.state.rolagemDados}
              />
            </Col>
          </Row>

          <h3>Cálculos</h3>
          <hr />
          <h5>Força</h5>
          <Row>
            <Col sm={3}>
              <DisabledTextBox
                label="Ajuste de ataque e dano"
                value={this.state.calculoForca.ajuste}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Carga leve"
                value={this.state.cargaLeve}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Carga pesada"
                value={this.state.cargaPesada}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Carga máxima"
                value={this.state.cargaMaxima}
              />
            </Col>
          </Row>

          <h5>Destreza</h5>
          <Row>
            <Col sm={6}>
              <DisabledTextBox
                label="Ajustes"
                value={this.state.destrezaAjuste}
              />
            </Col>
            <Col sm={6}>
              <DisabledTextBox
                label="Talentos Ladinos"
                value={this.state.talentosLadinos}
              />
            </Col>
          </Row>

          <h5>Constituição</h5>
          <Row>
            <Col sm={6}>
              <DisabledTextBox
                label="Ajuste PV e Proteção"
                value={this.state.constituicaoAjuste}
              />
            </Col>
            <Col sm={6}>
              <DisabledTextBox
                label="% Ressurreição"
                value={this.state.percentualRessurreicao}
              />
            </Col>
          </Row>

          <h5>Inteligência</h5>
          <Row>
            <Col sm={4}>
              <DisabledTextBox
                label="Idiomas"
                value={this.state.calculoInteligencia.idiomasAdicionais}
              />
            </Col>
            <Col sm={4}>
              <DisabledTextBox
                label="% Aprender Magia"
                value={this.state.calculoInteligencia.chanceDeAprenderMagia}
              />
            </Col>
            <Col sm={4}>
              <DisabledTextBox
                label="Magias Adicionais"
                value={this.state.calculoInteligencia.magiasArcanasAdicionais}
              />
            </Col>
          </Row>

          <h5>Sabedoria</h5>
          <Row>
            <Col sm={6}>
              <DisabledTextBox
                label="Ajuste de Proteção"
                value={this.state.constituicaoAjuste}
              />
            </Col>
            <Col sm={6}>
              <DisabledTextBox
                label="Magias Adicionais"
                value={this.state.percentualRessurreicao}
              />
            </Col>
          </Row>

          <h5>Carisma</h5>
          <Row>
            <Col sm={4}>
              <DisabledTextBox
                label="Nº Seguidores"
                value={this.state.numeroSeguidores}
              />
            </Col>
            <Col sm={4}>
              <DisabledTextBox
                label="Ajuste Reação"
                value={this.state.carismaAjuste}
              />
            </Col>
            <Col sm={4}>
              <DisabledTextBox
                label="Mortos-Vivos"
                value={this.state.mortosVivos}
              />
            </Col>
          </Row>

          <h5>Sub-Atributos</h5>
          <Row>
            <Col sm={2}>
              <DisabledTextBox label="Classe Armadura" value={this.state.ca} />
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

          <h5>Expulsar Mortos</h5>
          <Row>
            <Col sm={3}>
              <DisabledTextBox label="Esqueleto" value={this.state.esqueleto} />
            </Col>
            <Col sm={3}>
              <DisabledTextBox label="Zumbi" value={this.state.zumbi} />
            </Col>
            <Col sm={3}>
              <DisabledTextBox label="Carniçal" value={this.state.carnical} />
            </Col>
            <Col sm={3}>
              <DisabledTextBox label="Inumano" value={this.state.inumano} />
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <DisabledTextBox label="Aparição" value={this.state.aparicao} />
            </Col>
            <Col sm={3}>
              <DisabledTextBox label="Múmia" value={this.state.mumia} />
            </Col>
            <Col sm={3}>
              <DisabledTextBox label="Espectro" value={this.state.espectro} />
            </Col>
            <Col sm={3}>
              <DisabledTextBox label="Vampiro" value={this.state.vampiro} />
            </Col>
          </Row>

          <h5>Talentos Ladinos</h5>
          <Row>
            <Col sm={3}>
              <DisabledTextBox
                label="Abrir fechaduras"
                value={this.state.abrirFechaduras}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Reconhecer e desarmar armadilhas"
                value={this.state.reconhecerDesarmarArmadilhas}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Escalar muros"
                value={this.state.escalarMuros}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Mover-se em silêncio"
                value={this.state.moverSeEmSilencio}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <DisabledTextBox
                label="Esconder-se nas sombras"
                value={this.state.esconderSeNasSombras}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox label="Pungar" value={this.state.pungar} />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Ouvir barulhos"
                value={this.state.ouvirBarulhos}
              />
            </Col>
            <Col sm={3}>
              <DisabledTextBox
                label="Ataque pelas costas"
                value={this.state.ataquePelasCostas}
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
          <TableDinheiro listaDinheiro={this.state.listaDinheiro} />
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
