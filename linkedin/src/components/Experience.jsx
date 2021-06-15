import { Component } from 'react'
import { Col, Row, ListGroup, Modal, Card, Button, Form, Image } from 'react-bootstrap'
import ExperienceList from './ExperienceList'

class Experience extends Component {
    state = {
        experiences: [],
        experience: {
            role: "CTO",
            company: "Strive School",
            startDate: "2019-06-16",
            endDate: "2019-06-16", //could be null
            description: "Doing stuff here and there. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloremque quas repudiandae excepturi beatae velit accusantium tempore aliquam libero blanditiis nihil illo, similique quia consequuntur optio obcaecati asperiores corrupti deserunt dolorem, possimus commodi! Inventore, possimus consequatur unde accusamus a culpa, quis, eligendi atque dolore libero est quae aliquid rem accusantium. Eos dolorem nesciunt beatae libero provident doloribus eum corporis, accusamus ad totam corrupti repellat neque ducimus, officiis iure facilis ullam maiores. Odit illo minima nisi ex eveniet pariatur, rem iusto ipsam minus porro fuga officiis nam voluptates sapiente nulla accusamus nihil! Nesciunt pariatur cum iusto vitae perspiciatis? Atque, voluptates error.",
            area: "Berlin",
            image: '', //server generated on upload
        },
        show: false,
        expand: false,
    }

    inputChange = (e) => {
        this.setState({
            ...this.state,
            experience: {
                [e.target.id]: e.target.value
            }
        })
    }

    componentDidMount = async () => {
        const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4OTcxNmMxOTMwNTAwMTU4NzE1NDYiLCJpYXQiOjE2MjM3NTg2MTQsImV4cCI6MTYyNDk2ODIxNH0.a8nHWd_m6aYBbyPS4CFTexm_WJ0_K-ZBPC_4QapdJ8c'
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/5fc4c5b1ed266800170ea3d9/experiences', {
                headers: {
                    "Authorization": `Bearer ${apiToken}`,
                }
            })
            const data = await response.json()
            console.log(data)
            this.setState({
                ...this.state,
                experiences: data
            })
        } catch (err) {
            console.log(err)
        }
    }
    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    handleExpand = () => {
        console.log('expand')
        this.setState({
            ...this.state,
            expand: true
        })
    }

    render() {
        return (
            <>
                {/* <Row> */}
                {/* <Col md={8}> */}
                <Card >
                    <div className='d-flex p-3'>
                        <h4 className='font-weight-normal'>Experience</h4>
                        <div className="ml-auto" onClick={this.handleShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                            </svg>
                        </div>
                    </div>
                    {this.state.experiences.map(experience => (
                        <ExperienceList experience={experience} handleShow={this.handleShow} handleExpand={this.handleExpand} expand={this.state.expand} />
                    ))}
                </Card>
                {/* </Col> */}
                <Modal size="lg" show={this.state.show} onHide={this.ButtonhandleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Experience</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Form>
                        <Form.Group>
                            <Form.Label className="text-muted">Title</Form.Label>
                            <Form.Control id='role' type="text" placeholder="Enter your Title" value={this.state.experience.role} onChange={(e) => this.inputChange(e)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="text-muted">Company</Form.Label>
                            <Form.Control id='company' type="text" placeholder="Enter Company name" value={this.state.experience.company} onChange={(e) => this.inputChange(e)} />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label className="text-muted">Start Date</Form.Label>
                                <Form.Control id='startDate' type="date" value={this.state.experience.startDate} onChange={(e) => this.inputChange(e)} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label className="text-muted">End Date</Form.Label>
                                <Form.Control id='endDate' type="date" value={this.state.experience.endDate} onChange={(e) => this.inputChange(e)} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group >
                            <Form.Label className='text-mutted' size="sm"> Description</Form.Label>
                            <Form.Control
                                id='description'
                                as="textarea" rows={3}
                                value={this.state.experience.description}
                                onChange={(e) => this.inputChange(e)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button> */}
                        <Button variant="primary" onClick={this.handleClose}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* </Row> */}
            </>
        );
    }
}

export default Experience;