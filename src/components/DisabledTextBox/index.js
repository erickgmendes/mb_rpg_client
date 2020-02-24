import React from "react";

import { Form } from "react-bootstrap";

class DisabledTextBox extends React.Component {
  render() {
    //if (this.props.value === undefined) return <></>;
    return (
      <>
        <Form.Group>
          <Form.Label>{this.props.label}</Form.Label>
          <Form.Control disabled value={this.props.value} />
        </Form.Group>
      </>
    );
  }
}

export default DisabledTextBox;
