import React, { Component } from "react";
import "../../styles/ExampleModal.css";

class ExampleModal extends Component {
  render() {
    return (
      <aside className="example-modal">
        <h4>Example Endpoint: {this.props.data.exampleUrl}</h4>
        <img src={this.props.data.body} alt="body-example" />
        <img src={this.props.data.exampleResponse} alt="example-response" />
        <div />
      </aside>
    );
  }
}

export default ExampleModal;
