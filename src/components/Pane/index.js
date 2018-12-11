import React, { Component } from "react";
import "../../styles/Pane.css";

class Pane extends Component {
  constructor() {
    super();

    this.state = {
      deployed: false
    };
  }

  handleClick = () => {
    this.setState({
      deployed: !this.state.deployed
    });
  };

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
      <article className="pane" onClick={this.handleClick}>
        <section className="main-pane">
          <p className="type main-info">{type}</p>
          <p className="url main-info">{url}</p>
          <p className="returns main-info">{returns}</p>
        </section>
        <section className={`secondary-pane ${this.state.deployed}`}>
          <p className="query-params secondary-info">
            <span className="secondary-label">Query parameters:</span> {params}
          </p>
          <p className="request-body secondary-info">
            <span className="secondary-label"> Request body:</span> {body}
          </p>
          <p className="succesful-code secondary-info">
            <span className="secondary-label">Succesful status code:</span>{" "}
            {successStatus}
          </p>
          <p className="error-code secondary-info">
            <span className="secondary-label">Error status code:</span>{" "}
            {failureStatus}
          </p>
          <p className="error-message secondary-info">
            <span className="secondary-label">Error message:</span>{" "}
            {failureMessage}
          </p>
        </section>
      </article>
    );
  }
}

export default Pane;
