import { Component } from 'react'
import { ListGroup, Button, Col, Image } from 'react-bootstrap'
import ExperienceModal from './ExperienceModal';

class ExperienceList extends Component {
    state = {
        show: false,
        expand: false,
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
            <ListGroup id='ExperienceList'>
                <ListGroup.Item className='d-flex'>
                    <Col sm={2}>
                        <Image src={this.props.experience.image} thumbnail />
                    </Col>
                    <Col sm={10}>
                        <h5 className='m-0'>{this.props.experience.company}</h5>
                        <ListGroup>
                            <ListGroup.Item id='experienceItem' className='px-0'>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-block'>
                                        <h6 className='m-0'>{this.props.experience.role}</h6>
                                        <p>
                                            {this.props.experience.endDate
                                                ? <span className='text-muted'>
                                                From {this.props.experience.startDate.slice(0,10)} to {this.props.experience.endDate?.slice(0,10)} <br />
                                                {this.props.experience.area}
                                                </span>
                                                : <span className='text-muted'>
                                                From {this.props.experience.startDate.slice(0,10)} <br />
                                                {this.props.experience.area}
                                                </span>
                                            }
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
                                        ? <p  >{this.props.experience.description}</p>
                                        : <>
                                            <p className='collapseAbout mb-0' >
                                                {this.props.experience.description}
                                            </p>
                                            <span className='d-flex justify-content-end mb-2'>
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
            <ExperienceModal userId={this.props.userId} experience={this.props.experience} show={this.state.show} onHide={this.handleClose} fetchExperiences={this.props.fetchExperiences}/>
            </>
        );
    }
}

export default ExperienceList;