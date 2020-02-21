import React from "react";

import { Table } from "react-bootstrap";

const TableListaMagias = props => (
  <>
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
        {props.listaMagias.map(item => (
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>0</td>
            <td>100</td>
            <td>50</td>
            <td>25</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>
);

export default TableListaMagias;
