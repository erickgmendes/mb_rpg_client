import React from "react";

import { Table } from "react-bootstrap";

class TableAtributos extends React.Component {
  render() {
    //if (this.props.value === undefined) return <></>;
    return (
      <>
        <h5>Atributos</h5>

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>valor raça</th>
              <th>valor classe</th>
              <th>valor total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Força</td>
              <td>{this.props.raca.valorForca}</td>
              <td>{this.props.classe.valorForca}</td>
              <td>
                {this.props.raca.valorForca + this.props.classe.valorForca}
              </td>
            </tr>
            <tr>
              <td>Agilidade</td>
              <td>{this.props.raca.valorAgilidade}</td>
              <td>{this.props.classe.valorAgilidade}</td>
              <td>
                {this.props.raca.valorAgilidade +
                  this.props.classe.valorAgilidade}
              </td>
            </tr>
            <tr>
              <td>Inteligência</td>
              <td>{this.props.raca.valorInteligencia}</td>
              <td>{this.props.classe.valorInteligencia}</td>
              <td>
                {this.props.raca.valorInteligencia +
                  this.props.classe.valorInteligencia}
              </td>
            </tr>
            <tr>
              <td>Vontade</td>
              <td>{this.props.raca.valorVontade}</td>
              <td>{this.props.classe.valorVontade}</td>
              <td>
                {this.props.raca.valorVontade + this.props.classe.valorVontade}
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default TableAtributos;
