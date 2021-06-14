import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

import EditBar from './components/edit-profie'

import SideAd from './components/side-ad'

// FONT AWESOME
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { faQuestionCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faGoogle, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
// library.add(fab, faQuestionCircle, faSearch, faGoogle, faFacebook, faTwitter, faInstagram)



function App() {
  return (
    <div className="App" style={{textAlign: 'left'}}>
      <Container>
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
            </Row>
          </Col>
        </Row>
      </Container>
      
        
      </div>
  );
}

export default App;
