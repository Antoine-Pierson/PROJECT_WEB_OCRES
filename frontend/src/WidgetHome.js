import React from 'react';
import { Image } from './Image.js';
import { Text } from './Text.js';

export class WidgetHome extends React.Component {

    render() {
        return (
            <div className="widget-home" class="container">
               <div class="row justify-content-center">
                    <div class="col col-md-4">
                        <Image src="ImgCuisine.jpg" value={0} width={200} height={200}/>
                    </div>
                    <div class="col col-md-4">
                        <Image src="ImgBar.jpg" value={1} width={200} height={200}/>
                    </div>

                    <div class="w-100 d-none d-sm-block"></div>

                    <div class="col col-md-4">
                        <Image src="ImgRestaurant.jpg" value={2} width={200} height={200}/>
                    </div>
                    <div class="col col-md-4">
                        <Image src="ImgReception.jpg" value={3} width={200} height={200}/>
                    </div>

                </div> 
            </div>
        )
    }
}
