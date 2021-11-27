import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

export class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabOrder: [],
            txtOrder: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        this.setState({txtOrder: e.target.value});
    }

    addOrder () {
        const newOrder = this.state.tabOrder.concat(<Card text={this.state.txtOrder}/> );
        this.state.tabOrder(newOrder);
    }

     
    render() {
        return (
            <div className="order">
                <h1>ORDERS</h1>
                <div>
                    <input type="text" value={this.state.txtOrder} onChange={this.handleChange}/>
                    <Button name={"add"} onclick={this.addOrder}>add</Button>
                </div>

                <div>
                    {this.state.tabOrder.map((card => <p>{card}</p>))}
                </div>
            </div>
        )
    }
}