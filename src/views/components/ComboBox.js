import React from "react";

import { Form } from "react-bootstrap";

const ComboBox = props => {
  if (props.value === undefined) {
    return <></>
  }

  return (
    <>
      <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control size="sm"
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
}

export default ComboBox;
