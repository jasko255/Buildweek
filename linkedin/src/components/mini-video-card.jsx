import React, { Component, } from 'react';

import { Card, Col, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle,  } from "@fortawesome/free-solid-svg-icons";

import YTvid1 from "../assets/YTvideo1.png"


class MiniVideoCard extends Component {

    render () {

        return (
            <Card fluid="true" className="d-flex border border-white">
                    <Row>
                        <Col fluid="true" md={5} lg={5} className="d-inline-flex ml-1 px-3 align-items-center">
                        <Card.Text className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faPlayCircle} style={{ width: "30px", height: "30px", position: "absolute", opacity: "50%", left: "45px" }} className="d-flex bg-white rounded-circle"/> 
                                <Card.Img src={YTvid1} style={{ width: "120px", height: "72px" }} className="d-flex"></Card.Img>
                            </Card.Text>
                            
                            
                        </Col>
                        <Col fluid="true" md={7} lg={7} className="flex-column px-0 align-items-center">
                            <Card.Title className="d-inline-flex px-0" style={{ fontSize: "18px", fontWeight: "bold" }}>Ignite - A Crash Intro Course to Web Dev...</Card.Title>
                            <Card.Text className="d-inline-flex px-0">164 Views</Card.Text>
                        </Col>
                        <Col fluid="true" md={12} lg={12} className="">
                            <Card.Title className="border-bottom pb-2"></Card.Title>
                        </Col>
                    </Row>
            </Card>

        )}

}

export default MiniVideoCard