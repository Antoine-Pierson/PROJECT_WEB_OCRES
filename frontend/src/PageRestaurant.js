import React from 'react';
import Calendar from 'react-calendar';
import { Order } from './Order';
import './PageRestaurant.css'
import Accordion from './AccordionComp';
import { Button } from './Button';
import { Badge } from 'react-bootstrap';

export class PageRestaurant extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Restaurant',
            date: new Date (),
            tabAvailableNoon: [{"id": 0, "isAvailable": true},
                                {"id": 1, "isAvailable": true},
                                {"id": 2, "isAvailable": false}
                            ],
            tabAvailableEvening: [{"id": 0, "isAvailable": false},
                                    {"id": 1, "isAvailable": true}
                                ],
            isShowCalendar: false,
            noon: true,
            evening: false,
            colorBtnNtoE: 'info',
            serviceName: 'Noon'
        };
        this.switchService = this.switchService.bind(this);
    }

    handleShow (e) {
        this.setState({isShowCalendar: e});
    }

    switchService () {
        this.setState({noon: !this.state.noon});
        this.setState({evening: !this.state.evening});
        this.state.colorBtnNtoE === 'info' ? this.setState({colorBtnNtoE: 'dark'}) : this.setState({colorBtnNtoE: 'info'});
        this.state.serviceName === 'Noon' ? this.setState({serviceName: 'Evening'}) : this.setState({serviceName: 'Noon'});
    }

    render() {
        return (
            <div className="restaurant" class="row gx-0 gy-1">
                <h1>RESERVATIONS</h1>
                <div className="restaurant-calendar" class="col-6">
                    <Calendar minDetail="years" view="month" minDate={new Date(2020, 1, 1)} maxDate={new Date(2999, 12, 31)} onClickDay={() => this.handleShow(!this.state.isShowCalendar)} value={this.state.date}/>
                </div>
                <div className="restaurant-table" class="col-6">
                    <div className="service" class="row">
                        <div className="noon" class="col">
                            <Button variant={this.state.colorBtnNtoE} name="Noon <=> Evening" handleChange={this.switchService}/>
                        </div>
                        <div className="badge" class="col">
                            <Badge bg={this.state.colorBtnNtoE}>{this.state.serviceName}</Badge>
                        </div>
                    </div>

                    {this.state.noon === true ? (
                            <div class="wrapper">
                                {this.state.tabAvailableNoon.map(d => <Accordion bg= {d.isAvailable} />)}
                            </div>
                        ) : (
                            <div class="wrapper">
                                {this.state.tabAvailableEvening.map(d => <Accordion bg= {d.isAvailable} />)}
                            </div>
                        )}

                    
                </div>
                

                <Order room="Restaurant" />
            </div>
        )
    }
}
