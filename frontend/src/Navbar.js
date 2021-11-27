import React from 'react';
import { Button } from './Button';

export class Navbar extends React.Component {

    render() {
        return (
            <button>{this.props.text}</button>
        )
    }
}