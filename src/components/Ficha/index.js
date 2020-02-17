import React, { Component } from "react";

import { Container, Form, Row, Col, Table, Button } from "react-bootstrap";
import { calcularAjusteForca } from "../../util/funcoes-forca";

import { fetchRacas } from "../../service/raca-api";
import { fetchClasses } from "../../service/classe-api";
import { fetchAlinhamentos } from "../../service/alinhamento-api";

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
      niveis: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      dados: [
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18"
      ]
    };
  }

  componentDidMount() {
    fetchRacas().then(res => this.setState({ racas: res.data }));
    fetchClasses().then(res => this.setState({ classes: res.data }));
    fetchAlinhamentos().then(res => this.setState({ alinhamentos: res.data }));
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
              <Form.Group>
                <Form.Label>Nome do Personagem</Form.Label>
                <Form.Control
                  value={this.state.nomePersonagem}
                  onChange={e =>
                    this.setState({ nomePersonagem: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Nome do Jogador</Form.Label>
                <Form.Control
                  value={this.state.nomeJogador}
                  onChange={e => this.setState({ nomeJogador: e.target.value })}
                />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Nível</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.nivel}
                  onChange={e => this.setState({ nivel: e.target.value })}
                >
                  <option>-- </option>
                  {this.state.niveis.map(item => (
                    <option key={item}>{item}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Alinhamento</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.alinhamento}
                  onChange={e => this.setState({ alinhamento: e.target.value })}
                >
                  <option>-- </option>
                  {this.state.alinhamentos.map(alinhamento => (
                    <option key={alinhamento.id}>{alinhamento.nome}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Raça</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.raca}
                  onChange={e => this.setState({ raca: e.target.value })}
                >
                  <option>-- </option>
                  {this.state.racas.map(raca => (
                    <option key={raca.id}>{raca.nome}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Classe</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.classe}
                  onChange={e => this.setState({ classe: e.target.value })}
                >
                  <option>-- </option>
                  {this.state.classes.map(classe => (
                    <option key={classe.id}>{classe.nome}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group>
                <Form.Label>Características Físicas</Form.Label>
                <Form.Control
                  value={this.state.caracteristicasFisicas}
                  onChange={e =>
                    this.setState({ caracteristicasFisicas: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>Força</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.forca}
                  onChange={this.onChangeForca}
                >
                  {this.state.dados.map(item => (
                    <option key={item}>{item}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>Destreza</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.destreza}
                  onChange={this.onChangeDestreza}
                >
                  {this.state.dados.map(item => (
                    <option key={item}>{item}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>Constituição</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.constituicao}
                  onChange={this.onChangeConstituicao}
                >
                  {this.state.dados.map(item => (
                    <option key={item}>{item}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>Inteligência</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.inteligencia}
                  onChange={this.onChangeInteligencia}
                >
                  {this.state.dados.map(item => (
                    <option key={item}>{item}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>Sabedoria</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.sabedoria}
                  onChange={this.onChangeSabedoria}
                >
                  {this.state.dados.map(item => (
                    <option key={item}>{item}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>Carisma</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.carisma}
                  onChange={this.onChangecarisma}
                >
                  {this.state.dados.map(item => (
                    <option key={item}>{item}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <h3>Cálculos</h3>
          <hr />
          <h5>Força</h5>
          <Row>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>Ajuste de ataque e dano</Form.Label>
                <Form.Control disabled value={this.state.forcaAjuste} />
              </Form.Group>
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
