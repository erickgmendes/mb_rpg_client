import React from "react";

import { Table } from "react-bootstrap";

const TableAcessoMagia = props => (
  <>
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
        {props.listaAcessoMagia.map(item => (
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
        ))}
      </tbody>
    </Table>
  </>
);

export default TableAcessoMagia;
