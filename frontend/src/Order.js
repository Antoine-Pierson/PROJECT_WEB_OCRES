import React from 'react';
import { Card } from './Card';

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
        setTxtOrder(e.target.value);
    }

    addOrder () {
        const newOrder = tabOrder.concat(<Card text={this.state.txtOrder}/> );
        tabOrder(newOrder);
    }

     
    render() {
        return (
            <div className="order">
                <h1>ORDERS</h1>
                <div>
                    <input type="text" value={txtOrder} onChange={this.handleChange}/>
                    <Button name={"add"} onclick={this.addOrder}>add</Button>
                </div>

                <div>
                    {tabOrder.map((card => {card}))}
                </div>
            </div>
        )
    }
}