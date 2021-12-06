import React from 'react';
import { Image } from './Image';
import { Text } from './Text';
import { ModalComp } from './ModalComp';
import { Button } from './Button';
import {getAllCocktail, getOneCocktail} from './Api.js';

export class Cocktail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgCktl: null,
            recipe: null,
            refName: React.createRef(),
            name: null,
            drinks: [],
        };
        this.search = this.search.bind(this);
    }

    search () {
        getOneCocktail(this.state.refName.current.value)
        .then(response => {
            this.setState({drinks: []});
            var dataDrinks = response.drinks;
            if(dataDrinks != null){
                for (let index = 0; index < dataDrinks.length; index++) {
                    var drink = dataDrinks[index];
                    var ingredients = [];
                    if(drink.strIngredient1 != null){ingredients.push(<li>{drink.strIngredient1} : {drink.strMeasure1}</li>)};
                    if(drink.strIngredient2 != null){ingredients.push(<li>{drink.strIngredient2} : {drink.strMeasure2}</li>)};
                    if(drink.strIngredient3 != null){ingredients.push(<li>{drink.strIngredient3} : {drink.strMeasure3}</li>)};
                    if(drink.strIngredient4 != null){ingredients.push(<li>{drink.strIngredient4} : {drink.strMeasure4}</li>)};
                    if(drink.strIngredient5 != null){ingredients.push(<li>{drink.strIngredient5} : {drink.strMeasure5}</li>)};
                    if(drink.strIngredient6 != null){ingredients.push(<li>{drink.strIngredient6} : {drink.strMeasure6}</li>)};
                    if(drink.strIngredient7 != null){ingredients.push(<li>{drink.strIngredient7} : {drink.strMeasure7}</li>)};
                    if(drink.strIngredient8 != null){ingredients.push(<li>{drink.strIngredient8} : {drink.strMeasure8}</li>)};
                    if(drink.strIngredient9 != null){ingredients.push(<li>{drink.strIngredient9} : {drink.strMeasure9}</li>)};
                    if(drink.strIngredient10 != null){ingredients.push(<li>{drink.strIngredient10} : {drink.strMeasure10}</li>)};
                    if(drink.strIngredient11 != null){ingredients.push(<li>{drink.strIngredient11} : {drink.strMeasure11}</li>)};
                    if(drink.strIngredient12 != null){ingredients.push(<li>{drink.strIngredient12} : {drink.strMeasure12}</li>)};
                    if(drink.strIngredient13 != null){ingredients.push(<li>{drink.strIngredient13} : {drink.strMeasure13}</li>)};
                    if(drink.strIngredient14 != null){ingredients.push(<li>{drink.strIngredient14} : {drink.strMeasure14}</li>)};
                    if(drink.strIngredient15 != null){ingredients.push(<li>{drink.strIngredient15} : {drink.strMeasure15}</li>)};
                    this.setState({drinks: this.state.drinks.concat(<ModalComp image={drink.strDrinkThumb} title={drink.strDrink} ingredients={ingredients} instructions={drink.strInstructions}/>)});
                }
            }else{
                this.setState({drinks: this.state.drinks.concat(<ModalComp image="no_Result.jpg" title="Pas de résultat" ingredients={null} instructions={null}/>)});
            }
        }
        );
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
                    {this.state.drinks}
                </div>
            </div>
        )
    }
}