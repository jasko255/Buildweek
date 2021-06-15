import React, { Component, } from 'react';

import { Card, Col, Button, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import DefaultProfile from "../assets/default_profile.jpeg"
import MiniProfileCard from "./profile-card"


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
        const showingMore = this.state.seeMore
        let cardDisplay 
        let footText
        let iconArrow

        this.state.seeMore === false ? (cardDisplay = "none") && (footText = "Show more") && (iconArrow = faChevronDown) : (cardDisplay = "flex") && (footText = "Show less") && (iconArrow = faChevronUp)

        // if seemore true map 12 if see more false map 6
      return (
        <Card fluid="true" style={{ width: '100%' }} className="d-flex px-0">
            <Card.Header style={{fontSize: '20px', fontWeight: 'bold' }} className="bg-white border-bottom-0 mt-3">
                <p className="mb-0 ms-2">People also viewed</p>
            </Card.Header>
            <Card.Body className="ps-2">
                <MiniProfileCard></MiniProfileCard>
            </Card.Body>
            <Card.Body style = {{ display: cardDisplay }}>
                <MiniProfileCard></MiniProfileCard>
            </Card.Body>
            <Card.Footer className="text-center align-items-center py-3" style={{fontSize: '18px', fontWeight: 'bold' }}>
                    <p className="d-inline-flex mb-0 px-2" onClick={this.handleMore}>{footText}</p>
                    <FontAwesomeIcon icon={iconArrow} className="d-inline-flex pt-1"/>
            </Card.Footer>
        </Card>

      )}
      }


export default AlsoView