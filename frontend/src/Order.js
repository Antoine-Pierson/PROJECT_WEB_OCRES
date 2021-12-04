import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Form } from 'react-bootstrap';

export class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabOrder: [],
            txtOrder: React.createRef(),
            table: React.createRef()
        };
        this.addOrder = this.addOrder.bind(this);
    }

    addOrder(){
        this.setState({tabOrder: this.state.tabOrder.concat(<Card table={this.state.table.current.value}  commande={this.state.txtOrder.current.value} label="Commande servie"/>)});
    }

     
    render() {
        let form;
        if(this.props.room == "Cuisine"){
            form = null;
            this.state.tabOrder = this.state.tabOrder.concat(<Card table="1"  commande="Poulet Roti" label="Commande prête"/>);
            this.state.tabOrder = this.state.tabOrder.concat(<Card table="2"  commande="Riz Curry" label="Commande prête"/>);
        }
        else if(this.props.room === "Restaurant" || this.props.room === "Bar"){
            form = <div style={form} className="order-form" class="row">
                        <div class="row gy-2 justify-content-center">
                            <div class="col-10 col-sm-5">
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Table number</Form.Label>
                                        <Form.Control type="number" ref={this.state.table} placeholder="1, 2, 3, ... , 998, 999, 1000" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Order</Form.Label>
                                        <Form.Control as="textarea" row={3} ref={this.state.txtOrder} placeholder={"- Un Saumon\n- Un boeuf bourguignon"} />
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-1">
                                <Button variant={"primary"} name={"add"} handleChange={this.addOrder} type="submit" />
                            </div>
                        </div>
                    </div>;
        }
        return (
            <div className="order" class="container justify-content-md-center">
                <h1>ORDERS</h1>
                {form}
                <div className="card" class="row">
                    <p>Commande en attente</p>
                    <div class="row g-3">
                        {this.state.tabOrder}
                    </div>
                </div>
            </div>
        )
    }
}