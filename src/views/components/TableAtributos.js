import React from "react";

import { Table, Row, Col } from "react-bootstrap";

const TableAtributos = props => {

  if (props.raca === undefined || props.classe === undefined) {
    return (<></>);
  }
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
              <td>{props.raca.valorForca}</td>
              <td>{props.raca.valorAgilidade}</td>
              <td>{props.raca.valorInteligencia}</td>
              <td>{props.raca.valorVontade}</td>
            </tr>
            <tr>
              <td>valor classe</td>
              <td>{props.classe.valorForca}</td>
              <td>{props.classe.valorAgilidade}</td>
              <td>{props.classe.valorInteligencia}</td>
              <td>{props.classe.valorVontade}</td>
            </tr>
            <tr>
              <td>valor total</td>
              <td>
                {props.raca.valorForca + props.classe.valorForca}
              </td>
              <td>
                {props.raca.valorAgilidade + props.classe.valorAgilidade}
              </td>

              <td>
                {props.raca.valorInteligencia + props.classe.valorInteligencia}
              </td>
              <td>
                {props.raca.valorVontade + props.classe.valorVontade}
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default TableAtributos;