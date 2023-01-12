import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Map from "./map/Map";
import {Container, Row, Col} from "reactstrap";
import Sidebar from "./sidebar/Sidebar";
import "./App.css"

function App() {
  return (
  <>
  <Header />
    <Container>
      <Row>
        <Col md="2">
          <Sidebar />
        </Col>
        <Col md ="10">
          <Map  />
        </Col>
      </Row> 
    </Container>    
  </>
  );
}
        

export default App;
