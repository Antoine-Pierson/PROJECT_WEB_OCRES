import React from 'react';
import { WidgetHome } from './WidgetHome.js';

export class PageHome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Title: "home",
      };
    }

    render() {
      return(
      <div>
          <WidgetHome />
      </div>
      )
    }
  }