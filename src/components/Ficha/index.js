import React, { Component } from "react";

// Bootstrap
import { Container, Form, Row, Col, Button } from "react-bootstrap";

// Componentes
import TextBox from "../TextBox";
import ComboBox from "../ComboBox";
import TextBoxDisabled from "../TextBoxDisabled";
import TableAtributos from "../TableAtributos";
import TableHabilidades from "../TableHabilidades";

// API
import { fetchRacas } from "../../service/raca-api";
import { fetchClasses } from "../../service/classe-api";
import { fetchHabilidades } from "../../service/habilidade-api";
import { fetchEquipamentos } from "../../service/equipamento-api";
import { fetchNiveis } from "../../service/nivel-api";

export default class Ficha extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //Dados Básicos
      nomeJogador: "",
      nomePersonagem: "",
      motivacao: "",
      nivel: 1,
      raca: undefined,// this.getObjetoVazio(),
      classe: undefined, // this.getObjetoVazio(),
      // Atributos
      forca: 0,
      agilidade: 0,
      inteligencia: 0,
      vontade: 0,

      pv: 60,
      mana: 60,

      // Listas das combos
      listaRacas: [],
      listaClasses: [],
      listaHabilidades: [],
      listaEquipamentos: [],

      showModalHabilidade: false,
      habilidadeSelecionada: {},
      listaHabilidadesValidas: [],
      listaHabilidadesEscolhidas: []
    };
  }

  componentDidMount() {
    fetchRacas().then(res => this.setState({ listaRacas: res.data }));
    fetchClasses().then(res => this.setState({ listaClasses: res.data }));
    fetchHabilidades().then(res => this.setState({ listaHabilidades: res.data }));
    fetchEquipamentos().then(res => this.setState({ listaEquipamentos: res.data }));
    this.setState({ niveis: fetchNiveis() });
  }

  getObjetoVazio = () => {
    return {
      id: 0,
      nome: "",
      valorForca: 0,
      valorAgilidade: 0,
      valorInteligencia: 0,
      valorVontade: 0
    };
  };

  calcularHabilidadesValidas = () => {
    const { nivel, raca, classe, listaHabilidades } = this.state;

    if (raca === undefined || classe === undefined)
      return

    let listaHabilidadesEscolhidas = []

    if (listaHabilidades !== undefined) {
      let listaHabilidadesValidas =
        listaHabilidades.filter(h =>
          h.nivel <= nivel
          && h.racas.find(r => r.id === raca.id)
          && h.classes.find(c => c.id === classe.id)
        ).sort(function (a, b) {
          if (a.nome > b.nome) {
            return 1;
          }
          if (a.nome < b.nome) {
            return -1;
          }
          // a must be equal to b
          return 0;
        }
        );

      let habilidadPadraoRaca =
        listaHabilidades
          .filter(h => h.racas.find(r => r.id === raca.id) && h.automatica)[0];
      if (habilidadPadraoRaca)
        listaHabilidadesEscolhidas.push(habilidadPadraoRaca)

      let habilidadPadraoclasse =
        listaHabilidades
          .filter(h => h.classe.find(c => c.id === classe.id) && h.automatica)[0];
      if (habilidadPadraoclasse)
        listaHabilidadesEscolhidas.push(habilidadPadraoclasse)

      this.setState({
        listaHabilidadesValidas: listaHabilidadesValidas,
        listaHabilidadesEscolhidas: listaHabilidadesEscolhidas
      })
    }
  }

  onChangeRaca = event => {
    const nomeRaca = event.target.value;

    if (!nomeRaca) {
      this.setState({
        raca: undefined // this.getObjetoVazio(),
      });
      return;
    }

    let raca = this.state.listaRacas.find(raca => raca.nome === nomeRaca);
    this.setState({ raca: raca }, this.calcularHabilidadesValidas);
  };

  onChangeClasse = event => {
    const nomeClasse = event.target.value;

    if (!nomeClasse) {
      this.setState({
        raca: undefined // this.getObjetoVazio()
      });
      return;
    }

    let classe = this.state.listaClasses.find(
      classe => classe.nome === nomeClasse
    );

    this.setState({ classe: classe }, this.calcularHabilidadesValidas);
  };

  onChangeNivel = event => {
    const nivel = event.target.value;
    this.setState({ nivel: nivel }, this.calcularHabilidadesValidas);
  };

  onChangeHabilidade = event => {
    let nomeHabilidade = event.target.value
    let habilidade = this.state.listaHabilidadesValidas.filter(h => h.nome === nomeHabilidade)[0]
    this.setState({ habilidadeSelecionada: habilidade });
  }

  onAddHabilidade = event => {
    let { listaHabilidadesEscolhidas, habilidadeSelecionada } = this.state

    listaHabilidadesEscolhidas.push(habilidadeSelecionada)

    this.setState({
      showModalHabilidade: false,
      listaHabilidadesEscolhidas: listaHabilidadesEscolhidas,
      habilidadeSelecionada: {}
    }, this.calcularHabilidadesValidas());
  }

  onDeleteHabilidade = event => {
    let nomeHabilidade = event.target.value;
    let { listaHabilidadesEscolhidas, listaHabilidadesValidas } = this.state
    let habilidade = listaHabilidadesValidas.filter(h => h.nome === nomeHabilidade)[0]

    listaHabilidadesEscolhidas.splice(listaHabilidadesEscolhidas.indexOf(habilidade), 1)

    this.setState({
      listaHabilidadesEscolhidas: listaHabilidadesEscolhidas,
    }, this.calcularHabilidadesValidas());
  }

  onClickShowModal = event => {
    if (this.state.listaHabilidadesValidas.length === 0) return
    if (this.state.listaHabilidadesEscolhidas.length === 5) return

    const { showModalHabilidade } = this.state
    this.setState({ showModalHabilidade: !showModalHabilidade })
  }

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const {
      nomePersonagem,
      nomeJogador,
      raca,
      classe,
      nivel,
      valorRaca,
      listaRacas,
      listaClasses,
      valorClasse,
      motivacao,
      pv,
      mana,
      showModalHabilidade,
      listaHabilidadesValidas,
      habilidadeSelecionada,
      listaHabilidadesEscolhidas,
      listaEquipamentos
    } = this.state

    return (

      <Form onSubmit={this.onFormSubmit}>
        <Container>
          <h3>Ficha de Personagem</h3>
          <hr />
          <Row>
            <Col sm={6}>
              <TextBox
                label="Nome do Personagem"
                value={nomePersonagem}
                onChange={e =>
                  this.setState({ nomePersonagem: e.target.value })
                }
              />
            </Col>
            <Col sm={6}>
              <TextBox
                label="Nome do Jogador"
                value={nomeJogador}
                onChange={e => this.setState({ nomeJogador: e.target.value })}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={5}>
              <ComboBox
                label="Raça"
                value={valorRaca}
                onChange={this.onChangeRaca}
                lista={listaRacas}
              />
            </Col>
            <Col sm={5}>
              <ComboBox
                label="Classe"
                value={valorClasse}
                onChange={this.onChangeClasse}
                lista={listaClasses}
              />
            </Col>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>Nível</Form.Label>
                <Form.Control
                  as="select"
                  size="sm"
                  onChange={this.onChangeNivel}
                  value={nivel}
                >
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <TextBox
                label="Motivação"
                value={motivacao}
                onChange={e => this.setState({ motivacao: e.target.value })}
              />
            </Col>
            <Col sm={2}>
              <TextBoxDisabled label="PV" value={pv} />
            </Col>
            <Col sm={2}>
              <TextBoxDisabled label="Mana" value={mana} />
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <TableAtributos raca={raca} classe={classe} />
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <TableHabilidades
                raca={raca}
                classe={classe}
                nivel={nivel}
                showModalHabilidade={showModalHabilidade}
                listaHabilidadesValidas={listaHabilidadesValidas}
                itemSelecionado={habilidadeSelecionada}
                listaHabilidadesEscolhidas={listaHabilidadesEscolhidas}
                onClickShowModal={this.onClickShowModal}
                onChangeHabilidade={this.onChangeHabilidade}
                onAddHabilidade={this.onAddHabilidade}
                onDeleteHabilidade={this.onDeleteHabilidade}
              />
'            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <ComboBox
                label="Equipamentos"
                lista={listaEquipamentos}
              />
            </Col>

          </Row>
          <br />
        </Container>
        <Container>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    );
  }
}