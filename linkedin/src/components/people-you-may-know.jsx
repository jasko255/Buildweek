import React, { Component, } from 'react';

import { Card, Col, Button, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import DefaultProfile from "../assets/default_profile.jpeg"
import MiniProfileCard from "./profile-card"


class YouKnow extends Component {

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

        this.state.seeMore === false ? (cardDisplay = "none") && (footText = "Show more") : (cardDisplay = "flex") && (footText = "Show less")

        // if seemore true map 12 if see more false map 6
      return (
        <Card fluid="true" style={{ width: '100%' }} className="d-flex px-0">
            <Card.Header className="bg-white">People you may know</Card.Header>
            <Card.Body>
                <MiniProfileCard></MiniProfileCard>
            </Card.Body>
            <Card.Body style = {{ display: cardDisplay }}>
                <MiniProfileCard></MiniProfileCard>
            </Card.Body>

            <Card.Footer className="text-center">
                    <p className="d-inline-flex" onClick={this.handleMore}>{footText}</p>
                    <FontAwesomeIcon icon={faCaretDown} className="d-inline-flex"/>
            </Card.Footer>
        </Card>

      )}
      }


export default YouKnow