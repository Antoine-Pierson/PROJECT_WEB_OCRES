import React from 'react';
import { Carousel } from 'react-bootstrap';
import './WidgetHome.css'

export class WidgetHome extends React.Component {

    render() {
        return (
            <div className="widget-home">
               <Carousel fade={false} pause={false}>
                    <Carousel.Item interval={4000}>
                        <img
                        className="d-block"
                        src="rest.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>La Guinguette</h3>
                        <p>Un lieu cosy et apaisant pour se retrouver autour d'un bon repas !</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block"
                        src="bar.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Le Lounge</h3>
                        <p>Un espace de partage pour rencontrer ou se retrouver autour d'un verre !</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block"
                        src="cui.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Les Coulisses</h3>
                        <p>Un lieu de création où nos grand chefs préparerons des merveilles !</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block"
                        src="ImgStat.jpg"
                        alt="Fourth slide"
                        />
                        <Carousel.Caption>
                        <h3>Les tendances en graphique</h3>
                        <p>Retrouver les tendances des clients sous forme de graphique</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
