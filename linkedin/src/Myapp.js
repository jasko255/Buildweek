import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar';
import People from './components/People'
import ProfDet from "./components/ProfDet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ModalPic from './components/ModalPic';

function App() {
  return (
    <div className="App" >
      <Router>
      <NavBar />
      <Route exact path="/" component={ People } />  
      <Route exact path="/profile/:userId/" component={ProfDet} />
      <ModalPic />
      </Router>
    </div>
  );
}

export default App;
