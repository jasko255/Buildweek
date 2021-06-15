import React, { Component, } from 'react';

import { Card, Col, Button, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import DefaultProfile from "../assets/default_profile.jpeg"
import YoutubeEmbed from "./YT-video"


class MiniVideoCard extends Component {

    render () {

        return (
            <Card fluid="true" style={{ width: '100%' }} className="d-flex border border-white">
                    <Row>
                        <Col fluid="true" md={4} lg={4} className="d-inline-flex ml-1 px-4 align-items-center">
                    <YoutubeEmbed embedId="tuqnGuy4VRk"/> 
                        </Col>
                        <Col fluid="true" md={8} lg={8} className="flex-column px-0 align-items-center">
                            <Card.Title className="d-inline-flex container-fluid px-0">James Shaw</Card.Title>
                            <Card.Text className="d-inline-flex container-fluid px-0">Architect at Darling Associates Architects</Card.Text>
                        </Col>
                    </Row>
            </Card>

        )}

}

export default MiniVideoCard



