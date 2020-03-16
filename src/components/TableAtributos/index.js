import React from "react";

import { Table } from "react-bootstrap";

class TableAtributos extends React.Component {
  render() {
    //if (this.props.value === undefined) return <></>;
    return (
      <>
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
              <td>{this.props.raca.valorForca}</td>
              <td>{this.props.raca.valorAgilidade}</td>
              <td>{this.props.raca.valorInteligencia}</td>
              <td>{this.props.raca.valorVontade}</td>
            </tr>
            <tr>
              <td>valor classe</td>
              <td>{this.props.classe.valorForca}</td>
              <td>{this.props.classe.valorAgilidade}</td>
              <td>{this.props.classe.valorInteligencia}</td>
              <td>{this.props.classe.valorVontade}</td>
            </tr>
            <tr>
              <td>valor total</td>
              <td>
                {this.props.raca.valorForca +
                  this.props.classe.valorForca}
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
      </>
    );
  }
}

export default TableAtributos;
