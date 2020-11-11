import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import WeatherDisplay from "./WeatherDisplay.jsx";

import { Navbar, NavItem, Nav, Container, Row, Col } from 'react-bootstrap';

const PLACES = [
    { name: "Minsk", zip: "220000" },
    { name: "Grodno", zip: "230000" },
    { name: "Gomel", zip: "246000" },
    { name: "Vitebsk", zip: "210000" }
];

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            activePlace: 0
        };
    }
    render() {
        const activePlace = this.state.activePlace;
        return (
            <div>
                <Navbar>
                    <Navbar.Text>
                        <Navbar.Brand>
                            React Simple Weather App
                        </Navbar.Brand>
                    </Navbar.Text>
                </Navbar>
                <Container>
                    <Row>
                        <Col md={4} sm={4}>
                            <h3>Select a city</h3>
                            <Nav
                                bsstyle="pills"
                                activeKey={activePlace}
                                onSelect={index => {
                                    this.setState({ activePlace: index });
                                }}
                            >
                                {PLACES.map((place, index) => (
                                    <NavItem key={index} eventkey={index}>{place.name}</NavItem>
                                ))}
                            </Nav>
                        </Col>
                        <Col md={8} sm={8}>
                            <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}