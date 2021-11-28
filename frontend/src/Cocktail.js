import React from 'react';
import { Image } from './Image';
import { Text } from './Text';

export class Cocktail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgCktl: null,
            recipe: null
        };
    }

    render() {
        return (
            <div className="cockail">
                <h1>COCKTAILS</h1>
                <form>
                    <input type="search" id="cktl"></input>
                    <input type="submit" value="Submit"></input>
                </form>

                <div>
                    <Image src={this.props.imgCktl} width={200} height={200}></Image>
                    <Text txt={"Commentaire : " + this.props.recipe}></Text>
                </div>
            </div>
        )
    }
}