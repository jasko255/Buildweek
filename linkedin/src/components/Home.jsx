import { Container, Card, Button, Row, Col, ListGroup, Modal } from "react-bootstrap";
// import NavBar from './NavBar'
// import ProfileSection from './ProfileSection'
// import People from "./People";
import { useEffect, useState } from "react";
import SideAd from "./side-ad";
import MiniProfileCard from "./profile-card";
import YouKnow from "./people-you-may-know";
import AlsoView from "./people-also-viewed";

const Home = () => {
  const [posts, setPosts] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    const getPosts = async () => {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MTEwNjI5MTkzMDAwMTU2MGFiOTQiLCJpYXQiOjE2MjM2NTg3NTksImV4cCI6MTYyNDg2ODM1OX0.wSLELEDQ8EvVaUT7VwhhllP7b8dSxFmkatWvybYtSvI",
          },
        }
      );
      let posts = await response.json();
      setPosts(posts);
    };
    getPosts();
  }, []);







  return (
    <>
      <Container>
        <Row>
          <Col md={2}>
            <SideAd />
          </Col>
          <Col md={7}>
            <Card>
              <Row className="mt-3">
                <Col md={1}>
                  <img
                    width="50"
                    src="https://media-exp1.licdn.com/dms/image/C4D35AQEHGgKSN6gBWg/profile-framedphoto-shrink_400_400/0/1620813541179?e=1623769200&amp;v=beta&amp;t=XXSCoiZQhn2znwW9T6YHYgKWvhxfyNgtS6X2J5n6lGE"
                    height="50"
                    alt="Janusz Kondziarz"
                    id="ember30"
                    className="global-nav__me-photo ember-view rounded-circle d-flex ml-2"
                  />
                </Col>

                <Col md={10}>
                  <Button
                    variant="outline-secondary"
                    className="badge-pill ml-2 mt-1 w-100 text-left"
                    style={{ height: "95%", border: "1px solid grey" }}
                    onClick={handleShow}
                  >
                    Start a post
                  </Button>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col sm>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                  </svg>
                </Col>
                <Col sm>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                  </svg>
                </Col>
                <Col sm>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                  </svg>
                </Col>
                <Col sm>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                  </svg>
                </Col>
              </Row>
            </Card>
            {posts?.slice(0, 10).map((el, i) => (
              <Card className="text-center">
                <Card.Header>
                  {" "}
                  <Row>
                    <Col md="auto">
                      <img
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                        }}
                        src={el.user.image}
                        alt="logo"
                      />
                    </Col>
                    <Col style={{ textAlign: "left" }} md="auto">
                      {el.user.name} {el.user.surname} <br />{" "}
                      <span className="title text-secondary">
                        {" "}
                        {el.user.title}{" "}
                      </span>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>{el.text}</Card.Text>
                  <img src={`https://picsum.photos/20${i}` } max-width='100px'/>
                </Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item style={{ textAlign: "left" }}>
                    <hr />
                    <button style={{border:'none', backgroundColor:'white'}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      class="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                    </svg>

                    <span
                      aria-hidden="true"
                      class="artdeco-button__text react-button__text "
                    >
                      Like
                    </span>
                    </button>
                    <button style={{border:'none', backgroundColor:'white'}}>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      class="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                      >
                      <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                    </svg>

                    <span class="artdeco-button__text">Comment</span>
                    </button>

                    <button style={{border:'none', backgroundColor:'white'}}> 
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      class="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                    </svg>

                    <span class="artdeco-button__text">Share</span>
                    </button>

                    <button style={{border:'none', backgroundColor:'white'}}>
                    <span
                      tabindex="-1"
                      id="ember340"
                      class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
                    >

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        class="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                      </svg>
                      <span class="artdeco-button__text">Send</span>
                    </span>
                    </button>
                    
  
                  </ListGroup.Item>
                </ListGroup>

                <Card.Footer className="text-muted" style={{ textAlign: "left" }}>
                  {" "}
                  {el.user.createdAt}
                </Card.Footer>
              </Card>
            ))}
          </Col>
          <Col md={3}>
            <MiniProfileCard />
            <YouKnow />

            <SideAd />
          </Col>
        </Row>
      </Container>

     
    

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}

    
  


export default Home;
