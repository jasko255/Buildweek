import React, { Component, } from 'react';
import { Link } from "react-router-dom";

import { Card, Col, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle,  } from "@fortawesome/free-solid-svg-icons";

import YTvid1 from "../assets/YTvideo1.png"
import YTvid2 from "../assets/YTvideo2.png"
import YTvid3 from "../assets/YTvideo3.png"


class MiniVideoCard extends Component {

    render () {

        return (
            <div>
                <Card fluid="true" className="d-flex border border-white">
                    <Row className="">
                        <Link fluid="true" to={{ pathname: "https://www.youtube.com/watch?v=pbNBDEvwATk"}} target="_blank" className="d-flex">
                            <Col fluid="true" md={5} lg={5} className="flex-column ml-1 mx-auto px-3 align-items-center">
                            <Card.Text className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faPlayCircle} style={{ width: "30px", height: "30px", position: "absolute", opacity: "50%", left: "55px" }} className="d-flex bg-white rounded-circle"/> 
                                    <Card.Img src={YTvid1} style={{ width: "120px", height: "72px" }} className="d-flex"></Card.Img>
                                </Card.Text>
                                
                                
                            </Col>
                            <Col fluid="true" md={7} lg={7} className="flex-column px-0 mx-auto align-items-center">
                                <Card.Title className="d-inline-flex px-0" style={{ fontSize: "18px", fontWeight: "bold" }}>Ignite - A Crash Intro Course to Web Dev...</Card.Title>
                                <Card.Text className="d-inline-flex px-0">164 Views</Card.Text>
                            </Col>
                        </Link>
                        <Col fluid="true" md={12} lg={12} className="">
                            <Card.Title className="border-bottom border-2 pb-2"></Card.Title>
                        </Col>
                    </Row>
                </Card>
                 <Card fluid="true" className="d-flex border border-white">
                    <Row>
                        <Link to={{ pathname:"https://www.youtube.com/watch?v=dYcbsEMvjHQ"}} target="_blank" className="d-inline-flex">
                            <Col fluid="true" md={5} lg={5} className="flex-column ml-1 mx-auto px-3 align-items-center">
                            <Card.Text className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faPlayCircle} style={{ width: "30px", height: "30px", position: "absolute", opacity: "50%", left: "55px" }} className="d-flex bg-white rounded-circle"/> 
                                    <Card.Img src={YTvid2} style={{ width: "120px", height: "72px" }} className="d-flex"></Card.Img>
                                </Card.Text>
                                
                                
                            </Col>
                            <Col fluid="true" md={7} lg={7} className="flex-column px-0 mx-auto align-items-center">
                                <Card.Title className="d-inline-flex px-0" style={{ fontSize: "18px", fontWeight: "bold" }}>Ignite - Intro to JavaScript Crash...</Card.Title>
                                <Card.Text className="d-inline-flex px-0">262 Views</Card.Text>
                            </Col>
                        </Link>
                        <Col fluid="true" md={12} lg={12} className="">
                            <Card.Title className="border-bottom pb-2"></Card.Title>
                        </Col>
                    </Row>
                </Card>
                <Card fluid="true" className="d-flex border border-white">
                    <Row>
                        <Link to={{ pathname:"https://www.youtube.com/watch?v=EWgzBaFNPRQ"}} target="_blank" className="d-inline-flex">
                            <Col fluid="true" md={5} lg={5} className="flex-column ml-1 mx-auto px-3 align-items-center">
                            <Card.Text className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faPlayCircle} style={{ width: "30px", height: "30px", position: "absolute", opacity: "50%", left: "55px" }} className="d-flex bg-white rounded-circle"/> 
                                    <Card.Img src={YTvid3} style={{ width: "120px", height: "72px" }} className="d-flex"></Card.Img>
                                </Card.Text>
                                
                                
                            </Col>
                            <Col fluid="true" md={7} lg={7} className="flex-column px-0 mx-auto align-items-center">
                                <Card.Title className="d-inline-flex px-0" style={{ fontSize: "18px", fontWeight: "bold" }}>Ignite - Building Spotify together</Card.Title>
                                <Card.Text className="d-inline-flex px-0">273 Views</Card.Text>
                            </Col>
                        </Link>
                        <Col fluid="true" md={12} lg={12} className="">
                            <Card.Title className="pb-2"></Card.Title>
                        </Col>
                    </Row>
                </Card>
                </div>



        )}

}

export default MiniVideoCard