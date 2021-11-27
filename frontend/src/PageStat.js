import React from "react";
import { WidgetHome } from './WidgetHome.js';

export class PageStat extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Title: "home",
        widgetHome : <WidgetHome />
      };
    }

    render() {
      return(
      <div>
          {this.state.widgetHome}
      </div>
      )
    }
  }