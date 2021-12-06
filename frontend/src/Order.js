import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Form } from 'react-bootstrap';
import './Order.css'
import { getCommandeCuisine, getCommandeRestaurant, postCommande, updateCommande } from './Api';

export class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabOrder: [],
            txtOrder: React.createRef(),
            table: React.createRef()
        };
        this.addOrder = this.addOrder.bind(this);
        this.refresh = this.refresh.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        if(e.props.label == "Commande prête"){
            updateCommande(false, false, e.props.table);
        }
        else if(e.props.label == "Commande servie"){
            updateCommande(true, false, e.props.table);
        }        
    }

    addOrder(){
        postCommande(this.state.table.current.value, this.state.txtOrder.current.value);
    }

    refresh(){
        if(this.props.room == "Cuisine"){
            getCommandeCuisine()
            .then(response => {
                var tmptab= [];
                for (let i = 0; i < response.length; i++) {
                    tmptab = tmptab.concat(<Card table={response[i].table}  commande={response[i].plat} label="Commande prête" handleChange={this.handleChange}/>)
                }
                this.setState({tabOrder: tmptab});
            });
        }
        else if(this.props.room === "Restaurant" || this.props.room === "Bar"){
            getCommandeRestaurant()
            .then(response => {
                var tmptab= [];
                for (let i = 0; i < response.length; i++) {
                    tmptab = tmptab.concat(<Card table={response[i].table}  commande={response[i].plat} label="Commande servie" handleChange={this.handleChange}/>)
                }
                this.setState({tabOrder: tmptab});
            });
        }   
    }


    render() {
        let form;
        if(this.props.room == "Cuisine"){
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
                <Button variant={"primary"} name={"Refresh"} handleChange={this.refresh} type="submit" />
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