import React from 'react';
import { Button } from './Button';
import { Image } from './Image';
import { Nav, Navbar as _navbar }  from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import {PageHome} from './PageHome';
import {PageBar} from './PageBar';
import {PageRestaurant} from './PageRestaurant';
import {PageCuisine} from './PageCuisine'
import { PageStat } from './PageStat';
import './Navbar.css';
import OffCanvasComp from './OffCanvasComp';

export class Navbar extends React.Component {

    render() {
        return (
            <Router>
                <div className="navbar">
                    <_navbar collapseOnSelect="true" bg="dark" fixed="top" variant="dark" expand="lg">
                        <_navbar.Brand href="#">
                            <Image src="./logo.jpg" width={50} height={50} alt="logo" handleClick={() => ({})}/>
                            {" "} PAPY
                        </_navbar.Brand>

                        <_navbar.Toggle aria-control="responsive-navbar-nav"/>
                        <_navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/restaurant">Restaurant</Nav.Link>
                                <Nav.Link as={Link} to="/bar">Bar</Nav.Link>
                                <Nav.Link as={Link} to="/cuisine">Cuisine</Nav.Link>
                                <Nav.Link as={Link} to="/stats">Stats</Nav.Link>
                            </Nav>
                            <OffCanvasComp name="Spotify" placement="end" />
                        </_navbar.Collapse>

                        
                    </_navbar>
                    
                </div>
                <div className="routes">
                    <Routes>
                        <Route path="/" element= {<PageHome />} />
                        <Route path="/home" element={<PageHome />} />
                        <Route path="/restaurant" element= {<PageRestaurant />} />
                        <Route path="/bar" element= {<PageBar />} />
                        <Route path="/cuisine" element= {<PageCuisine />} />
                        <Route path="/stats" element= {<PageStat />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}