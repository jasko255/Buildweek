
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

// import About from './components/About'
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
import LinkLearn from './components/linked-learning';
import TopCourse from './components/top-courses';



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

    <Router>

      <NavBar id="navlinked" />
      <Container fluid style={{ textAlign: 'left', padding: 0 }}>
        <Container>
          <Row className="flex-row">
            <Col fluid="true" md={8} className="d-inline-flex ml-auto mr-0">
              <Container fluid className="px-0">
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={People} />
                <Route exact path="/profile/:userId/" component={ProfDet} />
                {/* <Route exact path="/profile/:userId/" component={About} /> */}
                <Route exact path="/profile/:userId/" component={Experience} />
              </Container>
            </Col>
            <Col fluid="true" md={4} className="d-inline-flex mr-auto ml-0 px-0">
              <Row>
                <Container fluid className="ps-0 pe-5">
                  <LinkLearn className="col-12"></LinkLearn>
                  <TopCourse className="col-12"></TopCourse>
                  <EditBar className="col-12"></EditBar>
                  <SideAd className="col-12"></SideAd>
                  <AlsoView className="col-12"></AlsoView>
                  <YouKnow className="col-12"></YouKnow>
                  <LearningCard className="col-12"></LearningCard>
                </Container>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>

    </Router>

  );
}

export default App;
