import React, { Component } from "react";

import { Container, Form, Row, Col, Table, Button } from "react-bootstrap";
import { calcularAjusteForca } from "../../util/funcoes-forca";

import TextBox from "../TextBox";
import DisabledTextBox from "../DisabledTextBox";
import ComboBox from "../ComboBox";

import { fetchRacas } from "../../service/raca-api";
import { fetchClasses } from "../../service/classe-api";
import { fetchAlinhamentos } from "../../service/alinhamento-api";
import { fetchNiveis } from "../../service/nivel-api";
import { fetchRolagemDados } from "../../service/rolagem-dados-api";

export default class Ficha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomeJogador: "",
      nomePersonagem: "",
      raca: "",
      classe: "",
      nivel: "1",
      alinhamento: "",
      caracteristicasFisicas: "",

      forca: 0,
      forcaAjuste: -5,
      cargaLeve: "0",
      cargaPesada: "0",
      cargaMaxima: "0",

      destreza: "0",
      destrezaAjuste: "0",
      talentosLadinos: "0",

      constituicao: "0",
      constituicaoAjuste: "0",
      percentualRessurreicao: "0",

      inteligencia: "0",
      idiomas: "0",
      percentualAprenderMagia: "0",
      inteligenciaMagiasAdicionais: "0",

      sabedoria: "0",
      sabedoriaAjuste: "0",
      sabedoriaMagiasAdicionais: "0",

      carisma: "0",
      numeroSeguidores: "0",
      carismaAjuste: "0",
      mortosVivos: "0",

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
  }

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  onChangeForca = event => {
    const valor = event.target.value;
    this.setState({ forca: valor });

    let ajuste = calcularAjusteForca(valor);
    this.setState({ forcaAjuste: ajuste });
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
                value={this.state.forcaAjuste}
              />
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Carga leve</Form.Label>
                <Form.Control disabled value={this.state.cargaLeve} />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Carga pesada</Form.Label>
                <Form.Control disabled value={this.state.cargaPesada} />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Carga máxima</Form.Label>
                <Form.Control disabled value={this.state.cargaMaxima} />
              </Form.Group>
            </Col>
          </Row>

          <h5>Destreza</h5>
          <Row>
            <Col sm={6}>
              <Form.Group>
                <Form.Label>Ajustes</Form.Label>
                <Form.Control disabled value={this.state.destrezaAjuste} />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group>
                <Form.Label>Talentos Ladinos</Form.Label>
                <Form.Control disabled value={this.state.talentosLadinos} />
              </Form.Group>
            </Col>
          </Row>

          <h5>Constituição</h5>
          <Row>
            <Col sm={6}>
              <Form.Group>
                <Form.Label>Ajuste PV e Proteção</Form.Label>
                <Form.Control disabled value={this.state.constituicaoAjuste} />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group>
                <Form.Label>% Ressurreição</Form.Label>
                <Form.Control
                  disabled
                  value={this.state.percentualRessurreicao}
                />
              </Form.Group>
            </Col>
          </Row>

          <h5>Inteligência</h5>
          <Row>
            <Col sm={4}>
              <Form.Group>
                <Form.Label>Idiomas</Form.Label>
                <Form.Control disabled value={this.state.idiomas} />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group>
                <Form.Label>% Aprender Magia</Form.Label>
                <Form.Control
                  disabled
                  value={this.state.percentualAprenderMagia}
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group>
                <Form.Label>Magias Adicionais</Form.Label>
                <Form.Control
                  disabled
                  value={this.state.inteligenciaMagiasAdicionais}
                />
              </Form.Group>
            </Col>
          </Row>

          <h5>Sabedoria</h5>
          <Row>
            <Col sm={6}>
              <Form.Group>
                <Form.Label>Ajuste de Proteção</Form.Label>
                <Form.Control disabled value={this.state.constituicaoAjuste} />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group>
                <Form.Label>Magias Adicionais</Form.Label>
                <Form.Control
                  disabled
                  value={this.state.percentualRessurreicao}
                />
              </Form.Group>
            </Col>
          </Row>

          <h5>Carisma</h5>
          <Row>
            <Col sm={4}>
              <Form.Group>
                <Form.Label>Nº Seguidores</Form.Label>
                <Form.Control disabled value={this.state.numeroSeguidores} />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group>
                <Form.Label>Ajuste Reação</Form.Label>
                <Form.Control disabled value={this.state.carismaAjuste} />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group>
                <Form.Label>Mortos-Vivos</Form.Label>
                <Form.Control disabled value={this.state.mortosVivos} />
              </Form.Group>
            </Col>
          </Row>

          <h5>Sub-Atributos</h5>
          <Row>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>Classe de Armadura</Form.Label>
                <Form.Control disabled value={this.state.ca} />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>Bônus de Armadura</Form.Label>
                <Form.Control disabled value={this.state.ba} />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>Jogada de Proteção</Form.Label>
                <Form.Control disabled value={this.state.jp} />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>Pontos de Vida</Form.Label>
                <Form.Control disabled value={this.state.pv} />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>Movimento</Form.Label>
                <Form.Control disabled value={this.state.movimento} />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>XP Atual</Form.Label>
                <Form.Control disabled value={this.state.xp} />
              </Form.Group>
            </Col>
          </Row>

          <h5>Armas</h5>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome Arma</th>
                <th>Iniciativa</th>
                <th>BA Total</th>
                <th>Dano</th>
                <th>Alcance</th>
                <th>Tamanho</th>
                <th>Peso</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listaArmas.map(item => (
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h5>Equipamentos</h5>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome Equipamento</th>
                <th>Peso</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listaArmas.map(item => (
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>0</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h5>Acesso a Magia</h5>
          <Table responsive>
            <thead>
              <tr>
                <th>1º Círculo</th>
                <th>2º Círculo</th>
                <th>3º Círculo</th>
                <th>4º Círculo</th>
                <th>5º Círculo</th>
                <th>6º Círculo</th>
                <th>7º Círculo</th>
                <th>8º Círculo</th>
                <th>9º Círculo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </Table>

          <h5>Expulsar Mortos</h5>
          <Row>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Esqueleto</Form.Label>
                <Form.Control disabled value={this.state.esqueleto} />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Zumbi</Form.Label>
                <Form.Control disabled value={this.state.zumbi} />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Carniçal</Form.Label>
                <Form.Control disabled value={this.state.carnical} />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Inumano</Form.Label>
                <Form.Control disabled value={this.state.inumano} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Aparição</Form.Label>
                <Form.Control disabled value={this.state.aparicao} />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Múmia</Form.Label>
                <Form.Control disabled value={this.state.mumia} />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Espectro</Form.Label>
                <Form.Control disabled value={this.state.espectro} />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Vampiro</Form.Label>
                <Form.Control disabled value={this.state.vampiro} />
              </Form.Group>
            </Col>
          </Row>

          <h5>Talentos Ladinos</h5>
          <Row>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Abrir fechaduras</Form.Label>
                <Form.Control disabled value={this.state.abrirFechaduras} />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Reconhecer e desarmar armadilhas</Form.Label>
                <Form.Control
                  disabled
                  value={this.state.reconhecerDesarmarArmadilhas}
                />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Escalar muros</Form.Label>
                <Form.Control disabled value={this.state.escalarMuros} />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Mover-se em silêncio</Form.Label>
                <Form.Control disabled value={this.state.moverSeEmSilencio} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Esconder-se nas sombras</Form.Label>
                <Form.Control
                  disabled
                  value={this.state.esconderSeNasSombras}
                />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Pungar</Form.Label>
                <Form.Control disabled value={this.state.pungar} />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Ouvir barulhos</Form.Label>
                <Form.Control disabled value={this.state.ouvirBarulhos} />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Ataque pelas costas</Form.Label>
                <Form.Control disabled value={this.state.ataquePelasCostas} />
              </Form.Group>
            </Col>
          </Row>

          <h5>Idiomas</h5>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome Idioma</th>
                <th>Falar</th>
                <th>Ler</th>
                <th>Escrever</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listaIdiomas.map(item => (
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>0</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h5>Dinheiro</h5>
          <Table responsive>
            <thead>
              <tr>
                <th>Platina</th>
                <th>Eléctrum</th>
                <th>Ouro</th>
                <th>Prata</th>
                <th>Cobre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>100</td>
                <td>50</td>
                <td>25</td>
              </tr>
            </tbody>
          </Table>

          <h5>Controle de Magias</h5>
          <Table responsive>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>1º</th>
                <th>2º</th>
                <th>3º</th>
                <th>4º</th>
                <th>5º</th>
                <th>6º</th>
                <th>7º</th>
                <th>8º</th>
                <th>9º</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Acesso a magia (possuídas)</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
              </tr>
              <tr>
                <td>Magias por dia (memorizadas)</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
              </tr>
            </tbody>
          </Table>

          <h5>Lista de Magias</h5>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Círculo</th>
                <th>Nome da Magia</th>
                <th>Alcance</th>
                <th>Duração</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listaMagias.map(item => (
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>0</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    );
  }
}
