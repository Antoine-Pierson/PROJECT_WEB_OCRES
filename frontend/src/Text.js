import React from 'react';
import './Button.js'
import './Profil.css';

export class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: this.props.lastPublished
        };
    }

    render() {
        return (
            <div> 
                <p> Commentaire: {this.props.txt} </p> 
            </div>
        )
    }
}