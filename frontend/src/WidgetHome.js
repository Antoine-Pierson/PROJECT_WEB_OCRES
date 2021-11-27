import React from 'react';
import {Image} from './Image.js';

export class WidgetHome extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
      }
    handleChange(event){
        console.log(event);
      }

    render() {
        return (
            <div>
                <Image src="ImgCuisine.jpg" value={0} width={200} height={200} handleChange={this.handleChange}/>
                <Image src="ImgBar.jpg" value={1} width={200} height={200} handleChange={this.handleChange}/>
                <Image src="ImgRestaurant.jpg" value={2} width={200} height={200} handleChange={this.handleChange}/>
                <Image src="ImgReception.jpg" value={3} width={200} height={200} handleChange={this.handleChange}/>
            </div>
        )
    }
}