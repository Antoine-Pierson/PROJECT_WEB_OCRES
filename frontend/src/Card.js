import React from 'react';

export class Card extends React.Component {

    render() {
        return (
            <button class="Card">{this.props.text}</button>
        )
    }
}