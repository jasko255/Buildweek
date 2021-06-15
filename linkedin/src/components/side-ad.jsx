import React, { Component, } from 'react';

import { Card, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

//  Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH, } from "@fortawesome/free-solid-svg-icons";

import StriveLogo from "../assets/logo/strive_black.png"


class SideAd extends Component {


    render() {
      return (
        <Card fluid="true" style={{ width: '100%' }} className="d-flex">
            <Card.Body fluid="true" className="container-fluid d-inine-flex px-4">
                <Card.Title fluid="true" style={{fontSize: '1.2rem', fontWeight: '600'}} className="container-fluid d-inline-flex mx-0 px-0 mb-1 justify-content-end align-items-center">
                  <p style={{ fontWeight: '400', fontSize: '12px' }} className="d-inline-flex mb-0 d-inline-flex my-auto ml-0 mx-2 mt-0">Ad</p>
                  <FontAwesomeIcon style={{fontSize: '12px', fontWeight: '800'}} icon={faEllipsisH} className="d-inline-flex my-auto mr-0"/>
                </Card.Title>
                <Card.Subtitle style={{fontSize: '14px', fontWeight: '400'}} className="text-center my-2">
                    Keep up with interesting, relevant updates
                </Card.Subtitle>
                <Card.Img className="img-fluid px-4 py-5" src={StriveLogo}></Card.Img>
                <Card.Subtitle className="text-center my-2">
                    Shakira, get the latest on <span className="fw-bold">Strive School</span> News, Jobs, and More!
                </Card.Subtitle>
                <Card.Subtitle className="d-inline-flex container-fluid mt-2">
                    <Button className="d-flex mx-auto rounded-pill btn-primary bg-white text-primary border-2 px-4 justify-self-center">Follow</Button>
                </Card.Subtitle>
                
            </Card.Body>
            </Card>
      )}
  }

export default SideAd