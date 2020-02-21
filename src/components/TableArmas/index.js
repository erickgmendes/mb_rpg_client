import React from "react";

import { Table } from "react-bootstrap";

const TableArmas = props => (
  <>
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
        {props.listaArmas.map(item => (
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
  </>
);

export default TableArmas;
