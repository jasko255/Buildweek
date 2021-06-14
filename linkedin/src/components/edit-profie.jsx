import React, { Component, } from 'react';

import { Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


class EditBar extends Component {


    render() {
      return (
        <Card fluid="true" style={{ width: '100%' }} className="d-flex">
            <Card.Body className="d-flex justify-content-start">
                <Card.Title>Edit public profile & URL</Card.Title>
                <hr></hr>
                <Card.Title>Add profile in another language</Card.Title>
            </Card.Body>
            </Card>
      )}
  }

export default EditBar