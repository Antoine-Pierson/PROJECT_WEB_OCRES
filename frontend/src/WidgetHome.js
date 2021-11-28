import React from 'react';
import { Image } from './Image.js';
import { Text } from './Text.js';

export class WidgetHome extends React.Component {

    render() {
        return (
            <div>
                <Image src="ImgCuisine.jpg" value={0} width={200} height={200}/>
                <Text txt="Cuisine"/>
                <Image src="ImgBar.jpg" value={1} width={200} height={200}/>
                <Text txt="Bar"/>
                <Image src="ImgRestaurant.jpg" value={2} width={200} height={200}/>
                <Text txt="Restaurant"/>
                <Image src="ImgReception.jpg" value={3} width={200} height={200}/>
                <Text txt="Réception"/>
            </div>
        )
    }
}