import React from "react";

import { Table, Row, Col } from "react-bootstrap";

class TableAtributos extends React.Component {
  render() {
    const { raca, classe } = this.props

    if (raca === undefined || classe === undefined) return <></>;

    return (
      <Row>
        <Col sm={12}>

          <h5>Atributos</h5>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Força</th>
                <th>Agilidade</th>
                <th>Inteligência</th>
                <th>Vontade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>valor raça</td>
                <td>{raca.valorForca}</td>
                <td>{raca.valorAgilidade}</td>
                <td>{raca.valorInteligencia}</td>
                <td>{raca.valorVontade}</td>
              </tr>
              <tr>
                <td>valor classe</td>
                <td>{classe.valorForca}</td>
                <td>{classe.valorAgilidade}</td>
                <td>{classe.valorInteligencia}</td>
                <td>{classe.valorVontade}</td>
              </tr>
              <tr>
                <td>valor total</td>
                <td>
                  {raca.valorForca + classe.valorForca}
                </td>
                <td>
                  {this.props.raca.valorAgilidade +
                    this.props.classe.valorAgilidade}
                </td>

                <td>
                  {this.props.raca.valorInteligencia +
                    this.props.classe.valorInteligencia}
                </td>
                <td>
                  {this.props.raca.valorVontade +
                    this.props.classe.valorVontade}
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

export default TableAtributos;
