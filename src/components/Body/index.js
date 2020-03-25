import React, { Component } from "react";

import classes from "./body.module.css";
import Widget from "../Widget";
import Chart from "../Chart";
import { widgets } from "../../Repo";

class Body extends Component {
  state = {
    showChart: false,
    numberColumns: {
      gridTemplateColumns: `repeat(5, 1fr)`
    },
    selectedWidget: null
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        numberColumns: this.calculateWindowSize(window.innerWidth)
      });
    });
    this.state.widgets = widgets;
  }

  calculateWindowSize(width) {
    console.log("width", width);
    let columns;
    if (width < 1050 && width > 850) columns = 4;
    else if (width < 850 && width > 650) columns = 3;
    else if (width < 650 && width > 450) columns = 2;
    else if (width < 450) columns = 1;
    else columns = 5;
    console.log("COLUMNS", columns);
    return {
      gridTemplateColumns: `repeat(${columns}, 1fr)`
    };
  }

  handleWidgetClick(widget) {
    this.setState({ showChart: true, selectedWidget: widget });
  }

  render() {
    console.log(this.state);
    return (
      <div className={classes.Body} style={this.state.numberColumns}>
        {this.state.showChart ? (
          <Chart widget={this.state.selectedWidget} />
        ) : null}
        {widgets.map(widget => {
          return (
            <Widget
              widget={widget}
              cliked={() => this.handleWidgetClick(widget)}
            />
          );
        })}
      </div>
    );
  }
}

export default Body;
