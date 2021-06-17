import { Component } from 'react'
import { Card, Modal, Button, Form } from 'react-bootstrap'

class About extends Component {
    state = {
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloremque quas repudiandae excepturi beatae velit accusantium tempore aliquam libero blanditiis nihil illo, similique quia consequuntur optio obcaecati asperiores corrupti deserunt dolorem, possimus commodi! Inventore, possimus consequatur unde accusamus a culpa, quis, eligendi atque dolore libero est quae aliquid rem accusantium. Eos dolorem nesciunt beatae libero provident doloribus eum corporis, accusamus ad totam corrupti repellat neque ducimus, officiis iure facilis ullam maiores. Odit illo minima nisi ex eveniet pariatur, rem iusto ipsam minus porro fuga officiis nam voluptates sapiente nulla accusamus nihil! Nesciunt pariatur cum iusto vitae perspiciatis? Atque, voluptates error.',
        show: false,
        expand: false,
    }
    inputChange = (e) => {
        this.setState({
            ...this.state,
            about: e.target.value
        })
    }

    handleExpand = () => {
        console.log('expand')
        this.setState({
            ...this.state,
            expand: true
        })
    }
    // const [show, setShow] = useState(false);

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });


    render() {
        return (
            <>
                {/* <Row className='my-2'> */}
                {/* <Col md={8}> */}
                <Card >
                    <Card.Body className='pb-0'>
                        <div className='d-flex justify-content-between'>
                            <h4 className='font-weight-normal'>About</h4>
                            <div className="ml-auto" onClick={this.handleShow}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className='box'>
                            {this.state.expand
                                ? <p  >{this.state.about}</p>
                                : <>
                                    <p className='collapseAbout mb-0' >{this.state.about}</p>
                                    <span className='d-flex justify-content-end mb-2'>
                                        {/* <span className='ml-auto'>...</span> */}
                                        <Button className='text-muted ml-auto pt-0' variant="link" onClick={this.handleExpand}>... see more</Button></span>
                                </>
                            }
                        </div>
                    </Card.Body>
                    {/* <Button className='ml-auto' variant="link"><small>...see more</small></Button> */}
                </Card>
                {/* </Col> */}
                <Modal size="lg" show={this.state.show} onHide={this.ButtonhandleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit about</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group >
                            <Form.Label className='text-mutted' size="sm"> Summary</Form.Label>
                            <Form.Control id='about' as="textarea" rows={3} value={this.state.about} onChange={(e) => this.inputChange(e)} />
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
                {/* </Row> */}
            </>
        );
    }
}

export default About;