import React from "react";
import { Graph } from './Graph';

export class PageStat extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Title: "home",
      };
    }

    render() {
      return(
      <div className="stats">
          <Graph/>
      </div>
      )
    }
  }