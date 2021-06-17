import React, { Component, } from 'react';

import { Card, Col, Button, Row, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import history from './history'

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

    goProfile () { 
        const { match: history } = this.props

        this.props.history.push('/profile/' + this.state.id); 
      } 

    render () {

        let DefaultProfilePic

        this.props.userimg? DefaultProfilePic = this.props.userimg : DefaultProfilePic = DefaultProfile

        return (
            <Card fluid="true" className="d-flex border border-white mt-3 mb-4" onClick={this.goProfile}>
                <Container fluid className="px-0 mx-0">
                    <Row>
                        <Col fluid="true" md={3} lg={3} className="flex-column ml-1 px-3 align-items-center">
                            <Card.Img src={DefaultProfilePic} className="rounded-circle" style={{ width: "4em", height: "4em" }} onError={(e)=>{e.target.onerror = "null"; e.target.src=DefaultProfile}}></Card.Img>
                        </Col>
                        <Col fluid="true" md={9} lg={9} className="flex-column px-2 align-items-center">
                            <Card.Title fluid="true" className="d-inline-flex container-fluid px-0" style={{ fontSize: '18px', fontWeight: 'bold' }}>{this.props.username} {this.props.usersurname}</Card.Title>
                            <Card.Text className="d-inline-flex container-fluid px-0 mb-2" style={{ fontSize: '16px', color: 'gray' }}>{this.props.usertitle}</Card.Text>
                            <Button className="d-flex rounded-pill btn-primary bg-white text-primary border-2 px-4">Connect</Button>
                        </Col>
                    </Row>
                    
                </Container>
            </Card>

        )}

}

export default MiniProfileCard