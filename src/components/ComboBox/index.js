import React from "react";

import { Form } from "react-bootstrap";

const ComboBox = props => (
  <>
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control 
        as="select" 
        value={props.value} 
        onChange={props.onChange}         
        >
         <option>-- </option>
                  {props.lista.map(item => (
                    <option key={item.id}>{item.nome}</option>
                  ))}   
        </Form.Control>
    </Form.Group>
  </>
);

export default ComboBox;

/*

<Form.Group>
                <Form.Label>Nível</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.nivel}
                  onChange={e => this.setState({ nivel: e.target.value })}
                >
                  <option>-- </option>
                  {this.state.niveis.map(item => (
                    <option key={item}>{item}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>

*/
