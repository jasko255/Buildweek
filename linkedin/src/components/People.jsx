import { useState, useEffect } from "react";
import { Card, Container, Row, Col,  ListGroup } from "react-bootstrap";

import DefaultProfile from "../assets/default_profile.jpeg"

const People = (props) => {
  const [profile, setProfile] = useState(null);

  
  useEffect(() => {
    const getProfiles = async () => {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MTEwNjI5MTkzMDAwMTU2MGFiOTQiLCJpYXQiOjE2MjM2NTg3NTksImV4cCI6MTYyNDg2ODM1OX0.wSLELEDQ8EvVaUT7VwhhllP7b8dSxFmkatWvybYtSvI",
          },
        }
      );
      let profiles = await response.json();
      console.log("profiles", profiles);
      setProfile(profiles);
    };
    getProfiles();
  }, []);

  return (<>
        <Container fluid className="px-0">
    {
        profile?.slice(0,55).map((el, idx) =>  {
          let DefaultProfilePic

        el.image? DefaultProfilePic = el.image : DefaultProfilePic = DefaultProfile

           return (
            <Card id="idx" onClick={()=> props.history.push('/profile/' + el._id)}>            
        <ListGroup variant="flush">
        
          <ListGroup.Item style={{textAlign: 'left'}}>
              <Row>
                  <Col md="auto">
              <img style={{ width: "3em", height: "3em" }} src={DefaultProfilePic} onError={(e)=>{e.target.onerror = "null"; e.target.src=DefaultProfile}} alt='1' className="rounded-circle my-2"/> 
              </Col>
              <Col className='ml-auto mt-2'>
              {el.name} {el.surname} {el.title} 
              </Col>
              </Row>
              </ListGroup.Item>
        </ListGroup>
      </Card>     
     
        )} )
  } </Container></>
    );
  };
  



  export default People