import React from 'react';
import Calendar from 'react-calendar';
import { Order } from './Order';

export class PageRestaurant extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Restaurant'
        };
    }

    render() {
        return (
            <div className="restaurant">
                <h1>RESERVATIONS</h1>
                <Calendar minDetail="year" view="month"/>

                <Order/>
            </div>
        )
    }
}
