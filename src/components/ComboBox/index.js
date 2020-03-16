import React from "react";

import { Button, Form } from "react-bootstrap";

class ComboBox extends React.Component {
  render() {
    //if (this.props.value === undefined) return <></>;

    return (
      <>
        <Form.Group>
          <Form.Label>{this.props.label}</Form.Label>
          <Form.Control size="sm"
            as="select"
            defaultValue={this.props.value}
            onChange={this.props.onChange}
          >
            <option key="0" />
            {this.props.lista.map(item => (
              <option key={item.id}>{item.nome}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </>
    );
  }
}

export default ComboBox;
