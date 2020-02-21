import React from "react";

import { Table } from "react-bootstrap";

const TableDinheiro = props => (
  <>
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
        {props.listaDinheiro.map(item => (
          <tr>
            <td>0</td>
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

export default TableDinheiro;
