
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import { Container } from 'react-bootstrap'
import About from './components/About'
import Experience from './components/Experience';


import { Container, Row, Col } from 'react-bootstrap';

import EditBar from './components/edit-profie'

import SideAd from './components/side-ad'

import AlsoView from './components/people-also-viewed'

import YouKnow from './components/people-you-may-know'

import LearningCard from './components/learning'

// FONT AWESOME
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { faQuestionCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faGoogle, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
// library.add(fab, faQuestionCircle, faSearch, faGoogle, faFacebook, faTwitter, faInstagram)



function App() {
  return (

    <div className="App">
      <Container style={{textAlign: 'left'}}>
        <Row>
          <Col fluid="true" md={8} lg={8} className="d-flex">
            <Container fluid="true">
              Some random content
            </Container>
          </Col>
          <Col fluid="true" md={4} lg={4} className="d-inline-flex">
            <Row>
              <EditBar className="col-12"></EditBar>
              <SideAd className="col-12"></SideAd>
              <AlsoView className="col-12"></AlsoView>
              <YouKnow className="col-12"></YouKnow>
              <LearningCard className="col-12"></LearningCard>
            </Row>
          </Col>
        </Row>
      </Container>
      
        
      </div>

  );
}

export default App;
