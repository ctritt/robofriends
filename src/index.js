import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import './index.css';
// import App from './App';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(
  <Container>
    {robots.map((robot, index) => {
      return <Card id={robot.id} name={robot.name} email={robot.email} />;
    })}
  </Container>,
  document.getElementById('root')
);
registerServiceWorker();
