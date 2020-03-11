import React, { Component } from "react";

import { Container, Form, Row, Col, Table, Button } from "react-bootstrap";

// Componentes
import TextBox from "../TextBox";
import ComboBox from "../ComboBox";

// API
import { fetchRacas, fetchRaca } from "../../service/raca-api";
import { fetchClasses } from "../../service/classe-api";
import { fetchNiveis } from "../../service/nivel-api";

export default class Ficha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Dados Básicos
      nomeJogador: "",
      nomePersonagem: "",
      nomeRaca: "",
      nomeClasse: "",
      nivel: "1",
      motivacao: "",

      raca: {},
      classe: {},

      // Atributos
      forca: "0",
      agilidade: "0",
      inteligencia: "0",
      vontade: "0",

      pv: "60",
      mana: "60",

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

  onChangeRaca = event => {
    const nomeRaca = event.target.value;
    this.setState({ raca: nomeRaca });
    this.modificarAtributosRaca(nomeRaca);
  };

  modificarAtributosRaca = nomeRaca => {
    if (!nomeRaca) return;

    let raca = this.state.listaRacas.find(raca => raca.nome === nomeRaca);
    const idRaca = raca.id;
    fetchRaca(idRaca).then(res => (raca = res.data));

    this.setState({ raca: raca });
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
                onChange={e => this.setState({ classe: e.target.value })}
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
            <Col sm={12}>
              <TextBox
                label="Motivação"
                value={this.state.motivacao}
                onChange={e => this.setState({ motivacao: e.target.value })}
              />
            </Col>
          </Row>

          <h5>Atributos</h5>

          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>valor</th>
                <th>valor 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Força</td>
                <td>{this.state.raca.valorForca}</td>
                <td>{this.state.forca}</td>
              </tr>
              <tr>
                <td>Agilidade</td>
                <td>{this.state.forca}</td>
                <td>{this.state.forca}</td>
              </tr>
              <tr>
                <td>Inteligência</td>
                <td>{this.state.forca}</td>
                <td>{this.state.forca}</td>
              </tr>
              <tr>
                <td>Vontade</td>
                <td>{this.state.forca}</td>
                <td>{this.state.forca}</td>
              </tr>
            </tbody>
          </Table>

          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    );
  }
}
