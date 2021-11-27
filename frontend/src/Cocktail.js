import React from 'react';

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
                <form>
                    <input type="search" id="cktl"></input>
                    <input type="submit" value="Submit"></input>
                </form>

                <div>
                    <Image src={this.props.imgCktl}></Image>
                    <Text txt={this.props.recipe}></Text>
                </div>
            </div>
        )
    }
}