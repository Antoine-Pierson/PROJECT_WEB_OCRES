import React from 'react';

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
                <div class="Navbar">
                    <Navbar/>
                </div>
                <Order/>
                <Cocktail imgCktl="cocktail-de-champagne.jpg" recipe="Champagne avec quelques framboises"/>
            </div>
        )
    }
}