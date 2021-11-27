import React from 'react';
import './Button.js'
import './Profil.css';

export class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: this.props.lastPublished
        };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div> 
                <p> Commentaire: {this.props.txt} </p> 
            </div>
        )
    }
}