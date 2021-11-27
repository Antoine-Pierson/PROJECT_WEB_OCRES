import React from 'react';
import {Image} from './Image.js';

export class WidgetHome extends React.Component {

    render() {
        return (
            <div>
                <Image src="ImgCuisine.jpg" width={200} height={200}/>
                <Image src="ImgBar.jpg" width={200} height={200}/>
                <Image src="ImgRestaurant.jpg" width={200} height={200}/>
                <Image src="ImgReception.jpg" width={200} height={200}/>
            </div>
        )
    }
}