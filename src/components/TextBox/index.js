import React from "react";

import { Form } from "react-bootstrap";

const TextBox = props => (
  <>
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control value={props.value} onChange={props.onChange} />
    </Form.Group>
  </>
);

export default TextBox;
