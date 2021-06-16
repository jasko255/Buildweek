import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";


const ProfileSection = ({obj}) => {
  console.log(obj)
  
  const [profile, setProfile] = useState({
    // "_id": "5d84937322b7b54d848eb41b", //server generated
      name: obj.name,
      surname: obj.surname,
      email: obj.email,
      bio: obj.bio,
      title: obj.title,
      area: obj.area,
    // image: obj.image ? obj.image : '', //server generated on upload
    // "username": "admin", //server generated from Auth
    // "createdAt": "2019-09-20T08:53:07.094Z", //server generated
    // "updatedAt": "2019-09-20T09:00:46.977Z", //server generated
    // "__v": 0 //server generated
  }
)
  // useEffect(() => {
  //   setProfile({
  //     name: obj.name,
  //     surname: obj.surname,
  //     email: obj.email,
  //     bio: obj.bio,
  //     title: obj.title,
  //     area: obj.area,
  //   })
  // },[])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const inputChange = (e) => {
    setProfile({
      ...profile,
      [e.target.id]: e.target.value
    })
  }

  const editProfile = async (e) => {
    e.preventDefault() 

    const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4OTcxNmMxOTMwNTAwMTU4NzE1NDYiLCJpYXQiOjE2MjM3NTg2MTQsImV4cCI6MTYyNDk2ODIxNH0.a8nHWd_m6aYBbyPS4CFTexm_WJ0_K-ZBPC_4QapdJ8c'
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
            method: 'PUT',
            body: JSON.stringify(profile),
            headers: {
                "Authorization": `Bearer ${apiToken}`,
                "Content-type": "application/json"
            }
        })
        if(response.ok) {
            const data = await response.json()
            console.log(data)

            // this.props.fetchExperiences()
            this.props.onHide()
        } else {
            console.log('we had a problem')
        }
        const data = await response.json()
        console.log(data)
       
    } catch (err) {
        console.log(err)
    }
  }

  return (
    <>
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
          className="profile-photo-edit__preview ember-view" />
        <Card.Body>
          <Container className='mt-3'>
            <Row>
              <Col style={{ textAlign: 'left' }}>
                <Card.Text>
                  <div>
                    {" "}
                    <h3 className='h3'> {profile.name} {profile.surname} </h3>
                    <span className='junior'>{profile.title}</span> <br />
                    <span className='area'>
                      {profile.area}{" "}
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
              <Col style={{ textAlign: 'right' }}>
                <svg onClick={handleShow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                  <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>

                </svg> <br />

                Istituto Alberghiero e Turismo
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Intro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={e => editProfile(e)}>
            <Form.Group >
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label className="text-muted">First Name</Form.Label>
                  <Form.Control id='name' type="text" value={profile.name} onChange={e => inputChange(e)} />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label className="text-muted">Last Name</Form.Label>
                  <Form.Control id='surname' type="text" value={profile.surname} onChange={e => inputChange(e)} />
                </Form.Group>
              </Form.Row>
              <Form.Label className="text-muted">Email address</Form.Label>
              <Form.Control id='email' type="email" value={profile.email} onChange={e => inputChange(e)}/>
            </Form.Group>
            <Form.Group >
              <Form.Label className='text-mutted'>Bio</Form.Label>
              <Form.Control id='bio' as="textarea" rows={3} value={profile.bio} onChange={e => inputChange(e)} />
            </Form.Group>
            <Form.Group >
              <Form.Label className="text-muted">Title</Form.Label>
              <Form.Control id='title' type="text" value={profile.title} onChange={e => inputChange(e)}/>
            </Form.Group>
            <Form.Group >
              <Form.Label className="text-muted">Country/Region</Form.Label>
              <Form.Control id='area' type="text" value={profile.area} onChange={e => inputChange(e)}/>
            </Form.Group>

            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileSection;
