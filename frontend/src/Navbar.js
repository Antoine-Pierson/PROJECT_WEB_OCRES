import React from 'react';
import { Button } from './Button';
import { Image } from './Image';

export class Navbar extends React.Component {

    render() {
        return (
            <nav>
                <Image src="./Logo.png" width={50} height={50}/>
                <ul>
                    <li>
                        <p value ="0" onClick={ () => this.props.handleChange(0)}>Home</p>
                    </li>
                    <li>
                    <p value ="1" onClick={ () => this.props.handleChange(1)}>Restaurant</p>
                    </li>
                    <li>
                        <p value ="2" onClick={ () => this.props.handleChange(2)}>Bar</p>
                    </li>
                    <li>
                        <p value ="3" onClick={ () => this.props.handleChange(3)}>Cuisine</p>
                    </li>
                    <li>
                        <p value ="4" onClick={ () => this.props.handleChange(4)}>Statistiques</p>
                    </li>
                </ul>
            </nav>
        )
    }
}