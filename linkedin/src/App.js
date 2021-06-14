import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

import EditBar from './components/edit-profie'

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col fluid="true" md={8} lg={8} className="d-flex">
            <Container fluid="true">
              Some random content
            </Container>
          </Col>
          <Col fluid="true" md={4} lg={4} className="d-flex">
            <EditBar className="d-flex container-fluid"></EditBar>
          </Col>
        </Row>
      </Container>
      
        
      </div>
  );
}

export default App;
