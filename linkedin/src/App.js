
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

import About from './components/About'
import Experience from './components/Experience';

import Home from './components/Home';


import EditBar from './components/edit-profie'

import SideAd from './components/side-ad'

import AlsoView from './components/people-also-viewed'

import YouKnow from './components/people-you-may-know'

import LearningCard from './components/learning'
import People from './components/People';
import ProfDet from './components/ProfDet';
import NavBar from './components/NavBar';

import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";

// FONT AWESOME
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { faQuestionCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faGoogle, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
// library.add(fab, faQuestionCircle, faSearch, faGoogle, faFacebook, faTwitter, faInstagram)



function App() {
  return (

    // <div className="App">
      <Router>
        <NavBar id="navlinked"/>
        <Home />
        <Container style={{ textAlign: 'left' }}>
          {/* <NavBar id="navlinked"/> */}
          <Row fluid="false" className="flex-row">
            <Col md={8} className="d-flex ms-auto">
              <Container fluid="true">
                <Route exact path="/" component={People} />
                <Route exact path="/profile/:userId/" component={ProfDet} />
                <Route exact path="/profile/:userId/" component={About} />
                <Route exact path="/profile/:userId/" component={Experience} />
              </Container>
            </Col>
            <Col fluid="true" md={4} lg={4} className="d-inline-flex me-auto">
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

      </Router>

    // </div>

  );
}

export default App;
