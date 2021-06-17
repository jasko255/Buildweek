import React, { Component, } from 'react';

import { Card, Col, Button, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import DefaultProfile from "../assets/default_profile.jpeg"
import MiniVideoCard from "./mini-video-card"


class LearningCard extends Component {

    // state = {
    //     imgDeft: "../assets/default_profile.jpeg",
    // }



    render() {

        // if seemore true map 12 if see more false map 6
      return (
        <Card fluid="true" className="d-flex">
            <Card.Header style={{fontSize: '16px', fontWeight: 'bold' }} className="d-inline-flex bg-white border-bottom-0 mt-3 align-items-center px-4">
                <div className="d-inline-flex bg-primary rounded-1 align-items-center justify-content-center" style={{ width: '25px', height: '25px' }}><FontAwesomeIcon icon={faLinkedinIn} className="d-inline-flex pt-1 text-white h5 mb-0"/></div>
                <p className="d-inline-flex mb-0 ms-2">L E A R N I N G</p>
            </Card.Header>
            <Card.Subtitle style={{ fontSize: '18px' }} className="my-2 px-4">
                        Add new skills with these courses, free for 24 hours
            </Card.Subtitle>
            <Card.Body className="ps-2 ">
                <MiniVideoCard></MiniVideoCard>
            </Card.Body>
            <Card.Footer className="text-center align-items-center py-3" style={{fontSize: '18px', fontWeight: 'bold' }}>
                    <p className="d-inline-flex mb-0 px-2" onClick={this.handleMore}>Show more on LinkedIn Learning</p>
            </Card.Footer>
        </Card>

      )}
      }


export default LearningCard