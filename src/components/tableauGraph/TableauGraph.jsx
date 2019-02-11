/* eslint-disable no-unused-vars, prefer-destructuring, react/prop-types, react/destructuring-assignment */
import React, { Component } from 'react';
import tableau from 'tableau-api';

let viz;

class TableauGraph extends Component {
  componentDidMount() {
    this.initViz();
  }

  componentDidUpdate() {
    this.initViz();
  }

  initViz() {
    const vizUrl = this.props.tableauUrl;
    const vizContainer = this.vizContainer;
    if (viz) viz.dispose();
    viz = new window.tableau.Viz(vizContainer, vizUrl);
  }

  render() {
    return (
      <div
        ref={(div) => {
          this.vizContainer = div;
        }}
      />
    );
  }
}

export default TableauGraph;
