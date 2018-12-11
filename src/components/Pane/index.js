import React, { Component } from "react";
import "../../styles/Pane.css";

class Pane extends Component {
  constructor() {
    super();

    this.state = {
      deployed: false
    };
  }

  render() {
    const {
      type,
      url,
      params,
      body,
      successStatus,
      returns,
      failureStatus,
      failureMessage
    } = this.props.data;

    return (
      <article className="pane">
        <p>{type}</p>
        <p>{url}</p>
        <p>{params}</p>
        <p>{body}</p>
        <p>{successStatus}</p>
        <p>{returns}</p>
        <p>{failureStatus}</p>
        <p>{failureMessage}</p>
      </article>
    );
  }
}

export default Pane;
