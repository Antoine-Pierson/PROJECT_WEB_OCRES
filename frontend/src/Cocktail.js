import React from 'react';
import { Image } from './Image';
import { Text } from './Text';
import { ModalComp } from './ModalComp';
import { Button } from './Button';

export class Cocktail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgCktl: null,
            recipe: null,
            refName: React.createRef(),
            name: null
        };
        this.search = this.search.bind(this);
    }

    search () {
        console.log(this.state.refName);
        this.setState({name: this.state.refName.current.value});
    }

    render() {
        return (
            <div className="cockail">
                <h1>COCKTAILS</h1>
                <form>
                    <input type="search" id="cktl" ref={this.state.refName}></input>
                    <Button variant={"primary"} name={"Submit"} handleChange={this.search} type="submit" />
                </form>

                <div>
                    <ModalComp title={this.state.name} body={"recette du cocktail de champagne: magic !"}/>
                </div>
            </div>
        )
    }
}