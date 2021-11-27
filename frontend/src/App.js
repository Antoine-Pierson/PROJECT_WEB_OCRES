import React from 'react';
import './App.css';
import './Button.js';
import { Button } from './Button';
import { PageHome} from './PageHome.js';

class App extends React.Component {
  constructor(props){
    super(props);
    const pages = [<PageHome title="Home"/>,];
    this.state = {
      currentPage: pages[0],
      pagesTab: pages
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({currentProfil: this.getProfil(e.props.name)});
  };

  render() {
    return (
      <div className="App">
        {this.state.currentPage}
      </div>
    );
  }
}

export default App;

