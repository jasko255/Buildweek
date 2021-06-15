import { Component } from 'react'
import { Col, Row, ListGroup, Modal, Card, Button, Form, Image } from 'react-bootstrap'

class Experience extends Component {
    state = {  
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

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    handleExpand = () => {
        console.log('expand')
        this.setState({
            ...this.state,
            expand: true
        })
    }

    render() { 
        return (  
            <Row>
                <Col md={8}>
                    <Card>
                        <div className='d-flex p-3'>
                            <h4 className='font-weight-normal'>Experience</h4>
                            <div className="ml-auto" onClick={this.handleShow}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                                </svg>
                            </div>
                        </div>
                        <ListGroup id='ExperienceList'>
                            <ListGroup.Item className='d-flex'>
                                <Col sm={2}>
                                <Image src="https://media-exp3.licdn.com/dms/image/C560BAQHkuJeEJ2pVMQ/company-logo_100_100/0/1622558098513?e=1631750400&v=beta&t=IeyVu_UMRs3bg2nK1Bd3STvkoVHce4lderlNZU6H4Ps" thumbnail />
                                </Col>
                                <Col sm={10}>
                                <h5 className='m-0'>{this.state.experience.company}</h5>
                                    <ListGroup>
                                        <ListGroup.Item id='experienceItem' className='px-0'>
                                            <div className='d-flex'>
                                                <div className='d-block'>
                                                    <h6 className='m-0'>{this.state.experience.role}</h6>
                                                    <p>
                                                        <span className='text-muted'>
                                                            From {this.state.experience.startDate} to {this.state.experience.endDate} <br />
                                                            {this.state.experience.area}
                                                        </span> 
                                                    </p>
                                                </div>
                                                <div className="ml-auto" onClick={this.handleShow}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                                        <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className='box'>
                                                {this.state.expand
                                                    ? <p  >{this.state.experience.description}</p>
                                                    : <>
                                                        <p className='collapseAbout mb-0' >
                                                        {this.state.experience.description}
                                                        </p>
                                                        <span className='d-flex mb-2'>
                                                            {/* <span className='ml-auto'>...</span> */}
                                                            <Button className='text-muted ml-auto pt-0' variant="link" onClick={this.handleExpand}>... see more</Button></span>
                                                    </>
                                                }
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
                <Modal size="lg" show={this.state.show} onHide={this.ButtonhandleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Experience</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group >
                        <Form.Label className='text-mutted' size="sm"> Title *</Form.Label>
                            <Form.Control 
                                id='addExperience' 
                                as="textarea" rows={3} 
                                // value={this.state.about} 
                                // onChange={(e) => this.inputChange(e)}
                            />
                        </Form.Group>
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
            </Row>
        );
    }
}
 
export default Experience;