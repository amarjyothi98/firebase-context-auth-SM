import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import { Col, Container, Row } from 'react-bootstrap';


function App() {
  return (
    <>
    <Router>
    <Container>
      <Row>
        <Col>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        </Col>
      </Row>
    </Container>
    </Router>
    </>
  );
}

export default App;
