import React from 'react';
import './App.css';
import './Button.js';
import { Button } from './Button';
import { PageHome} from './PageHome.js';
import {PageBar} from './PageBar.js';
import { PageRestaurant } from './PageRestaurant';
import {Navbar} from './Navbar.js';

class App extends React.Component {
  constructor(props){
    super(props);
    const pages = [<PageHome />,
                   <PageBar />,
                   <PageRestaurant/>];
    this.state = {
      pagesTab : pages,
      currentPage : pages[2]};

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({ currentProfil: this.state.pagesTab[event]});
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navbar handleChange={this.handleChange}/>
        </div>
        {this.state.currentPage}
      </div>
    );
  }
}

export default App;

