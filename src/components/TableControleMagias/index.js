import React from "react";

import { Table } from "react-bootstrap";

const TableControleMagias = props => (
  <>
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
  </>
);

export default TableControleMagias;
