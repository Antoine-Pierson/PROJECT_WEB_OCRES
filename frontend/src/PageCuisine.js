import React from "react";
import {Order} from './Order.js'

export class PageCuisine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Title: "Cuisine",
      };
    }

    render() {
      return(
        <div className="Cuisine">
          <Order room="Cuisine" />
        </div>
      )
    }
  }