import React, { Component } from "react";

import { Container, Form, Row, Col, Button } from "react-bootstrap";

// Componentes
import TextBox from "../TextBox";
import ComboBox from "../ComboBox";
import TextBoxDisabled from "../TextBoxDisabled";
import TableAtributos from "../TableAtributos";

// API
import { fetchRacas } from "../../service/raca-api";
import { fetchClasses } from "../../service/classe-api";
import { fetchNiveis } from "../../service/nivel-api";

export default class Ficha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Dados Básicos
      nomeJogador: "",
      nomePersonagem: "",
      nivel: 1,
      motivacao: "",

      raca: this.getObjetoVazio(),
      classe: this.getObjetoVazio(),

      // Atributos
      forca: 0,
      agilidade: 0,
      inteligencia: 0,
      vontade: 0,

      pv: 60,
      mana: 60,

      habilidades: [],
      equipamentos: [],

      listaClasses: [],
      listaRacas: [],
      niveis: []
    };
  }

  componentDidMount() {
    fetchRacas().then(res => this.setState({ listaRacas: res.data }));
    fetchClasses().then(res => this.setState({ listaClasses: res.data }));
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

  onChangeRaca = event => {
    const nomeRaca = event.target.value;

    if (!nomeRaca) {
      this.setState({
        raca: this.getObjetoVazio()
      });
      return;
    }

    let raca = this.state.listaRacas.find(raca => raca.nome === nomeRaca);
    this.setState({ raca: raca });
  };

  onChangeClasse = event => {
    const nomeClasse = event.target.value;

    if (!nomeClasse) {
      this.setState({
        raca: this.getObjetoVazio()
      });
      return;
    }

    let classe = this.state.listaClasses.find(
      classe => classe.nome === nomeClasse
    );

    this.setState({ classe: classe });
  };

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
          <Row>
            <Col sm={6}>
              <TextBox
                label="Nome do Personagem"
                value={this.state.nomePersonagem}
                onChange={e =>
                  this.setState({ nomePersonagem: e.target.value })
                }
              />
            </Col>
            <Col sm={6}>
              <TextBox
                label="Nome do Jogador"
                value={this.state.nomeJogador}
                onChange={e => this.setState({ nomeJogador: e.target.value })}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={5}>
              <ComboBox
                label="Raça"
                value={this.state.raca}
                onChange={this.onChangeRaca}
                lista={this.state.listaRacas}
              />
            </Col>
            <Col sm={5}>
              <ComboBox
                label="Classe"
                value={this.state.classe}
                onChange={this.onChangeClasse}
                lista={this.state.listaClasses}
              />
            </Col>
            <Col sm={2}>
              <ComboBox
                label="Nível"
                value={this.state.nivel}
                onChange={e => this.setState({ nivel: e.target.value })}
                lista={this.state.niveis}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <TextBox
                label="Motivação"
                value={this.state.motivacao}
                onChange={e => this.setState({ motivacao: e.target.value })}
              />
            </Col>
            <Col sm={2}>
              <TextBoxDisabled label="PV" value={this.state.pv} />
            </Col>
            <Col sm={2}>
              <TextBoxDisabled label="Mana" value={this.state.mana} />
            </Col>
          </Row>

          <TableAtributos raca={this.state.raca} classe={this.state.classe} />

          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    );
  }
}