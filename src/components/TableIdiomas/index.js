import React from "react";

import { Table } from "react-bootstrap";

const TableIdiomas = props => (
  <>
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
        {props.listaIdiomas.map(item => (
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>
);

export default TableIdiomas;
