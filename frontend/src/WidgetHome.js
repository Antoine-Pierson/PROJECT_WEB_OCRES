import React from 'react';
import { Image } from './Image.js';
import { Text } from './Text.js';
import { Carousel } from 'react-bootstrap';
import './WidgetHome.css'

export class WidgetHome extends React.Component {

    render() {
        return (
            <div className="widget-home">
               <Carousel fade={false} pause={false}>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block"
                        src="rest.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block"
                        src="bar.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block"
                        src="cui.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block"
                        src="ImgStat.jpg"
                        alt="Fourth slide"
                        />
                        <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Praesent commodo cursus magna, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
