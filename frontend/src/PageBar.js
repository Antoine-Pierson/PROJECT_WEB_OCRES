import React from 'react';
import {Order} from './Order.js'
import {Cocktail} from './Cocktail.js'

export class PageBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Bar'
        };
    }

    render() {
        return (
            <div className="bar">
                <Order/>
                <Cocktail imgCktl="cocktail-de-champagne.jpeg" recipe="Champagne avec quelques framboises"/>
            </div>
        )
    }
}