import React from "react";

import { Form } from "react-bootstrap";

const DisabledTextBox = props => (
  <>
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control disabled value={props.value} />
    </Form.Group>
  </>
);

export default DisabledTextBox;
