import React from "react";

import { Form } from "react-bootstrap";

const ComboBox = props => (
  <>
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        as="select"
        defaultValue={props.value}
        onChange={props.onChange}
      >        
        {props.lista.map(item => (
          <option key={item.id}>{item.nome}</option>
        ))}
      </Form.Control>
    </Form.Group>
  </>
);

export default ComboBox;
