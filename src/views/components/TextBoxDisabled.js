import React from "react";

import { Form } from "react-bootstrap";

const TextBoxDisabled = props => {
  return (
    <>
      <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control size="sm" disabled value={props.value} />
      </Form.Group>
    </>
  );
}

export default TextBoxDisabled;
