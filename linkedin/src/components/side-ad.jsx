import React, { Component, } from 'react';

import { Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH, } from "@fortawesome/free-solid-svg-icons";


class SideAd extends Component {


    render() {
      return (
        <Card fluid="true" style={{ width: '100%' }} className="d-flex">
            <Card.Body fluid="true" className="container-fluid d-inine-flex px-4">
                <Card.Title fluid="true" style={{fontSize: '1.2rem', fontWeight: '600'}} className="container-fluid d-inline-flex mx-0 px-0 my-1 justify-content-end">
                  <p className="mb-0 d-inline-flex my-auto ml-0">Add</p>
                  <FontAwesomeIcon icon={faEllipsisH} className="d-inline-flex my-auto mr-0"/>
                </Card.Title>
                <Card.Subtitle>
                    Keep up with interesting, relevant updates
                </Card.Subtitle>
                

                
            </Card.Body>
            </Card>
      )}
  }

export default SideAd