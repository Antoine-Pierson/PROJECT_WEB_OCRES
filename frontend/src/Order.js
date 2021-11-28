import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

export class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabOrder: [],
            txtOrder : React.createRef(),
            table : React.createRef()
        };
        this.addOrder = this.addOrder.bind(this);
    }

    addOrder(){
        this.setState({tabOrder: this.state.tabOrder.concat(<Card table={this.state.table.current.value}  commande={this.state.txtOrder.current.value}/>)});
    }

     
    render() {
        return (
            <div className="order">
                <h1>ORDERS</h1>
                <div>
                    <input type="text" placeholder="Entrer la table" ref={this.state.table}/>
                    <input type="text" placeholder="Entrer la commande" ref={this.state.txtOrder}/>
                    <Button name={"add"} handleChange={this.addOrder}>add</Button>
                </div>

                <div>
                    <p>Commande en attente</p>
                    {this.state.tabOrder}
                </div>
            </div>
        )
    }
}