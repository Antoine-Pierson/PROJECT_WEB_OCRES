import React from 'react';
import {Navbar} from './Navbar.js';
import { WidgetHome } from './WidgetHome.js';

export class PageHome extends React.Component {
    constructor(props, title) {
      super(props);
      this.state = {
        Title: title,
        widgetHome : <WidgetHome />
      };
      this.handleChangeStyle = this.handleChangeStyle.bind(this);
    }

    handleChangeStyle (e) {
      this.setState( () => ({bgdColor: this.getRandomColor()}))
    };

    render() {
      return(
      <div>
        <div class="Navbar">
          <Navbar text="Home"/>
        </div>
          {this.state.widgetHome}
      </div>
      )
    }
  }