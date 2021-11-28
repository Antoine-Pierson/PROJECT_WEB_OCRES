import React from 'react';

export class Card extends React.Component {
    render() {
        return (
            <button class="Card">{"table : " + this.props.table}<br></br>
            {"commande : " + this.props.commande}</button>
        )
    }
}