import React, { Component, } from 'react';

import { Card, Col, Button, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import DefaultProfile from "../assets/default_profile.jpeg"


class MiniProfileCard extends Component {

    state = {
        usertitle: "",
        username: "",
        usersurname:"",
        id:"",
        useridx:"",
        userimg:"",
        // usertitle2: "",
        // username2: "",
        // usersurname2:"",
        // id2:"",
        // useridx2:"",
        // userimg2:"",
    }

    render () {

        let DefaultProfilePic

        this.props.userimg? DefaultProfilePic = this.props.userimg : DefaultProfilePic = DefaultProfile

        return (
            <Card fluid="true" style={{ width: '100%' }} className="d-flex border border-white mt-3 mb-5">
                    <Row>
                        <Col fluid="true" md={4} lg={4} className="d-inline-flex ml-1 px-4 align-items-center">
                            <Card.Img src={DefaultProfilePic} className="rounded-circle"></Card.Img>
                        </Col>
                        <Col fluid="true" md={8} lg={8} className="flex-column px-0 align-items-center">
                            <Card.Title className="d-inline-flex container-fluid px-0" style={{ fontSize: '22px', fontWeight: 'bold' }}>{this.props.username} {this.props.usersurname}</Card.Title>
                            <Card.Text className="d-inline-flex container-fluid px-0" style={{ fontSize: '18px', color: 'gray' }}>{this.props.usertitle}</Card.Text>
                        </Col>
                    </Row>
                    <Card.Subtitle className="d-inline-flex container-fluid offset-3" style={{ top: '90px', position: 'absolute' }}>
                        <Button className="d-flex rounded-pill btn-primary bg-white text-primary border-2 px-4">Connect</Button>
                    </Card.Subtitle>
            </Card>

        )}

}

export default MiniProfileCard