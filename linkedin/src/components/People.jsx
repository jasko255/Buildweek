import { useState, useEffect } from "react";
import { Card, Container, Row, Col,  ListGroup } from "react-bootstrap";

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
        <Container>
    {
        profile?.map(el =>  (
           
            <Card onClick={()=> props.history.push('/profile/' + el._id)}>            
        <ListGroup variant="flush">
        
          <ListGroup.Item style={{textAlign: 'left'}}>
              <Row>
                  <Col md="auto">
              <img style={{maxWidth: '50px', borderRadius:'50%'}} src={el.image} alt='1' /> 
              </Col>
              <Col className='ml-auto'>
              {el.name} {el.surname} {el.title} 
              </Col>
              </Row>
              </ListGroup.Item>
        </ListGroup>
      </Card>     
     
         ) )
  } </Container></>
    );
  };
  



  export default People