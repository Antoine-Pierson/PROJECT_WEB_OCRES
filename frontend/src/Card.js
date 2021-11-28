import React from 'react';
import { Card as _Card } from 'react-bootstrap';

export class Card extends React.Component {
    render() {
        return (
            <div className="card" class="col-12 col-sm-6 col-lg-4 col-xxl-3">
                <_Card bg="light" border="light" style={{ width: '18rem' }}>
                    <_Card.Header>Table {this.props.table}</_Card.Header>
                    <_Card.Body>
                    <_Card.Title> Commande: </_Card.Title>
                    <_Card.Text>
                        {this.props.commande}
                    </_Card.Text>
                    </_Card.Body>
                </_Card>
            </div>
        );
    }
}