import React, { Component, } from 'react';

import { Card, Col, Button, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import DefaultProfile from "../assets/default_profile.jpeg"


class AlsoView extends Component {

    state = {
        imgDeft: "../assets/default_profile.jpeg",
    }

    constructor(props) {
        super(props);
        this.state = {
            seeMore: false
        };
    
        // This binding is necessary to make `this` work in the callback
        this.handleMore = this.handleMore.bind(this);
      }

      handleMore() {
        this.setState(prevState => ({
          seeMore: !prevState.seeMore
        }));
      }


    render() {
      return (
        <Card fluid="true" style={{ width: '100%' }} className="d-flex">
            <Card.Header>People also viewed</Card.Header>
            <Card.Body>
                <Card fluid="true" style={{ width: '100%' }} className="d-flex border border-white">
                    <Row>
                        <Col fluid="true" md={4} lg={4} className="d-inline-flex">
                            <Card.Img src={DefaultProfile} className="rounded-circle"></Card.Img>
                        </Col>
                        <Col fluid="true" md={8} lg={8} className="d-inline-flex">
                            <Card.Title>James Shaw</Card.Title>
                            <Card.Text>Architect at Darling Associates Architects</Card.Text>
                        </Col>
                    </Row>
                    <Card.Subtitle className="d-inline-flex container-fluid">
                    <Button className="d-flex mx-auto rounded-pill btn-primary bg-white text-primary border-2 px-4 justify-self-center">Connect</Button>
                    </Card.Subtitle>
                </Card>
            </Card.Body>
            <Card.Footer>Show more</Card.Footer>
        </Card>

      )}
      }


export default AlsoView