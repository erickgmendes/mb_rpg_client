import React, { Component } from "react";

// Bootstrap
import { Container, Form, Row, Col, Button } from "react-bootstrap";

// Componentes
import TableAtributos from "./components/TableAtributos";
import TableHabilidades from "./components/TableHabilidades";
import DadosBasicos from "./components/DadosBasicos";
import ComboBox from "./components/ComboBox";

// API
import { fetchRacas } from "../service/raca-api";
import { fetchClasses } from "../service/classe-api";
import { fetchHabilidades, fetchHabilidadeRaca, fetchHabilidadeClasse } from "../service/habilidade-api";
import { fetchEquipamentos } from "../service/equipamento-api";
import { fetchNiveis } from "../service/nivel-api";

export default class Ficha extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //Dados Básicos
      nome: "",
      motivacao: "",
      nivel: 1,
      raca: undefined,
      classe: undefined,
      habilidadeRaca: undefined,
      habilidadeClasse: undefined,
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
    fetchRacas().then(res => this.setState({ listaRacas: res.data }, this.prepararRacaInicial))
    fetchClasses().then(res => this.setState({ listaClasses: res.data }, this.prepararClasseInicial))
    fetchEquipamentos().then(res => this.setState({ listaEquipamentos: res.data }))

    fetchHabilidades().then(res => this.setState({ listaHabilidades: res.data }));

    this.setState({ niveis: fetchNiveis() })
  }

  prepararRacaInicial = () => {
    const { listaRacas } = this.state
    let raca = listaRacas[0]
    let idHabilidade = raca.habilidadesRacas.find(r => r.automatica).id

    fetchHabilidadeRaca(idHabilidade)
      .then(res => this.setState({
        habilidadeRaca: res.data,
        raca: raca
      }, this.calcularHabilidadesValidas))
  }

  prepararClasseInicial = () => {
    const { listaClasses } = this.state
    let classe = listaClasses[0]
    let idHabilidade = classe.habilidadesClasses.find(c => c.automatica).id

    fetchHabilidadeClasse(idHabilidade)
      .then(res => this.setState({
        habilidadeClasse: res.data,
        classe: classe
      }, this.calcularHabilidadesValidas))
  }

  onChangeNome = event => {
    this.setState({ nome: event.target.value })
  }

  onChangeMotivacao = event => {
    this.setState({ motivacao: event.target.value })
  }

  calcularHabilidadesValidas = () => {
    const { habilidadeRaca, habilidadeClasse } = this.state
    console.log(habilidadeRaca)
    console.log(habilidadeClasse)
  }
  /*
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
  */

  onChangeRaca = event => {
    const nomeRaca = event.target.value;
    let { habilidadeRaca } = this.state

    if (!nomeRaca) {
      this.setState({
        raca: undefined
      });
      return;
    }

    let raca = this.state.listaRacas.find(raca => raca.nome === nomeRaca)
    let idHabilidade = raca.habilidadesRacas.find(r => r.automatica).id
    fetchHabilidadeRaca(idHabilidade)
      .then(res => this.setState({
        habilidadeRaca: res.data,
        raca: raca
      }, this.calcularHabilidadesValidas))
  }

  onChangeClasse = event => {
    const nomeClasse = event.target.value;
    let { habilidadeClasse } = this.state

    if (!nomeClasse) {
      this.setState({
        classe: undefined
      });
      return;
    }

    let classe = this.state.listaClasses.find(classe => classe.nome === nomeClasse)
    let idHabilidade = classe.habilidadesClasses.find(r => r.automatica).id
    fetchHabilidadeClasse(idHabilidade)
      .then(res => this.setState({
        habilidadeClasse: res.data,
        classe: classe
      }, this.calcularHabilidadesValidas))
  }

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
    return (

      <Form onSubmit={this.onFormSubmit}>
        <Container>
          <h3>Ficha de Personagem</h3>
          <hr />

          <DadosBasicos
            nome={this.state.nome}
            raca={this.state.raca}
            classe={this.state.classe}
            listaRacas={this.state.listaRacas}
            listaClasses={this.state.listaClasses}
            nivel={this.state.nivel}
            motivacao={this.state.motivacao}
            pv={this.state.pv}
            mana={this.state.mana}
            onChangeNome={this.onChangeNome}
            onChangeRaca={this.onChangeRaca}
            onChangeClasse={this.onChangeClasse}
            onChangeNivel={this.onChangeNivel}
            onChangeMotivacao={this.onChangeMotivacao}
          />

          <TableAtributos
            raca={this.state.raca}
            classe={this.state.classe}
          />

          <TableHabilidades
            raca={this.state.raca}
            classe={this.state.classe}
            nivel={this.state.nivel}
            showModalHabilidade={this.showModalHabilidade}
            listaHabilidadesValidas={this.state.listaHabilidadesValidas}
            itemSelecionado={this.state.habilidadeSelecionada}
            listaHabilidadesEscolhidas={this.state.listaHabilidadesEscolhidas}
            onClickShowModal={this.onClickShowModal}
            onChangeHabilidade={this.onChangeHabilidade}
            onAddHabilidade={this.onAddHabilidade}
            onDeleteHabilidade={this.onDeleteHabilidade}
          />

          <Row>
            <Col sm={12}>
              <ComboBox
                label="Equipamentos"
                lista={this.state.listaEquipamentos}
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