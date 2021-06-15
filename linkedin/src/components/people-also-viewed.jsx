import React, { Component, } from 'react';

import { Card, Col, Button, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

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

        if seemore true map 12 if see more false map 6
      return (
        <Card fluid="true" style={{ width: '100%' }} className="d-flex px-0">
            <Card.Header className="bg-white">People also viewed</Card.Header>
            <Card.Body>
                <Card fluid="true" style={{ width: '100%' }} className="d-flex border border-white">
                    <Row>
                        <Col fluid="true" md={4} lg={4} className="d-inline-flex ml-1 px-4 align-items-center">
                            <Card.Img src={DefaultProfile} className="rounded-circle"></Card.Img>
                        </Col>
                        <Col fluid="true" md={8} lg={8} className="flex-column px-0 align-items-center">
                            <Card.Title className="d-inline-flex container-fluid px-0">James Shaw</Card.Title>
                            <Card.Text className="d-inline-flex container-fluid px-0">Architect at Darling Associates Architects</Card.Text>
                        </Col>
                    </Row>
                    <Card.Subtitle className="d-inline-flex container-fluid offset-3">
                        <Button className="d-flex rounded-pill btn-primary bg-white text-primary border-2 px-4">Connect</Button>
                    </Card.Subtitle>
                </Card>
            </Card.Body>

            <Card.Footer className="text-center">
                    <p className="d-inline-flex" onClick="handleMore()">Show more</p>
                    <FontAwesomeIcon icon={faCaretDown} className="d-inline-flex"/>
            </Card.Footer>
        </Card>

      )}
      }


export default AlsoView