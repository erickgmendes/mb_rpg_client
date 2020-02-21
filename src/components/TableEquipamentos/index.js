import React from "react";

import { Table } from "react-bootstrap";

const TableEquipamentos = props => (
  <>
    <h5>Equipamentos</h5>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome Equipamento</th>
                <th>Peso</th>
              </tr>
            </thead>
            <tbody>
              {props.listaEquipamentos.map(item => (
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>0</td>
                </tr>
              ))}
            </tbody>
          </Table>
  </>
);

export default TableEquipamentos;
