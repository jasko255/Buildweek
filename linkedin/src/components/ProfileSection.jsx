import { Container, Row, Col, Card, Button } from "react-bootstrap";


const ProfileSection = ({obj}) => {
  return (
          <Card>
            <Card.Img
              variant="top"
              id='backgroundimg'
              className="w-100 "
              src="https://picsum.photos/200/300"
            />
            {/* "https://media-exp1.licdn.com/dms/image/C4D35AQEHGgKSN6gBWg/profile-framedphoto-shrink_400_400/0/1620813541179?e=1623769200&amp;v=beta&amp;t=XXSCoiZQhn2znwW9T6YHYgKWvhxfyNgtS6X2J5n6lGE"  */}
            <img width="150" src={obj?.image}
            height="150" alt="Edit photo" 
            id="ember47" 
            className="profile-photo-edit__preview ember-view"/>
            <Card.Body>
                <Container className='mt-3'>
                    <Row>
                        <Col style={{textAlign: 'left'}}>
              <Card.Text>
                <div>
                  {" "}
                  <h3 className='h3'> {obj?.name} {obj?.surname} </h3>
                  <span className='junior'>{obj?.title}</span> <br />
                  <span className='area'>
                  {obj?.area}{" "}
                    <a href="/">Contact info</a>
                  </span>{" "}
                  <br />
                  <span>
                    <a className='connections' href="/">6 connections</a>
                  </span>
                </div>
              </Card.Text>
              <div className="d-block">
                <Button variant="primary" className="badge-pill m-1">
                  Open To
                </Button>
                <Button variant="outline-secondary" className="badge-pill m-1">
                  Add section
                </Button>
                <Button variant="outline-secondary" className="badge-pill m-1">
                  More
                </Button>
              </div>
              </Col>
              <Col style={{textAlign: 'right'}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>

  </svg> <br /> 
  
  Istituto Alberghiero e Turismo
              </Col>
              </Row>
              <Row>
                 
                  
                  
              </Row>
              </Container>
            </Card.Body>
          </Card>
    
  );
};

export default ProfileSection;
