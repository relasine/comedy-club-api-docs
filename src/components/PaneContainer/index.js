import React, { Component } from "react";
import Pane from "../Pane";
import "../../styles/PaneContainer.css";
import {
  cityEndpoints,
  comedyClubEndpoints
} from "../../utilities/endpoints.js";

class PaneContainer extends Component {
  render() {
    const cityEndpointsContainer = cityEndpoints.map(endpoint => {
      return <Pane key={endpoint.city} data={endpoint} />;
    });

    const clubsEndpointsContainer = comedyClubEndpoints.map(endpoint => {
      return <Pane key={endpoint.name} data={endpoint} />;
    });
    return (
      <main className="pane_container">
        <section className="city-section">{cityEndpointsContainer}</section>
        <section className="clubs-section">{clubsEndpointsContainer}</section>
      </main>
    );
  }
}

export default PaneContainer;
