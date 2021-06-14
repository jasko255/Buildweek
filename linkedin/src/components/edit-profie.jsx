import React, { Component, } from 'react';

import { Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";


class EditBar extends Component {


    render() {
      return (
        <Card fluid="true" style={{ width: '100%' }} className="d-flex">
            <Card.Body fluid="true" className="container-fluid d-inine-flex px-4">
                <Card.Title fluid="true" style={{fontSize: '1.2rem', fontWeight: '600'}} className="container-fluid d-inline-flex mx-0 px-0 my-1 justify-content-between">
                  <p className="mb-0 d-inline-flex my-auto ml-0">Edit public profile & URL</p>
                  <FontAwesomeIcon icon={faQuestionCircle} className="d-inline-flex my-auto mr-0"/>
                </Card.Title>
                
                <hr></hr>

                <Card.Title fluid="true" style={{fontSize: '1.2rem', fontWeight: '600' }} className="container-fluid d-inline-flex mx-0 px-0 my-1 justify-content-between">
                  <p className="mb-0 d-inline-flex my-auto ml-0">Add profile in another language</p>
                  <FontAwesomeIcon icon={faQuestionCircle} className="d-inline-flex my-auto mr-0"/>
                </Card.Title>
                
            </Card.Body>
            </Card>
      )}
  }

export default EditBar