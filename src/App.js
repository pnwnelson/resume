import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import resume from './resume.json';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Profile from './profile'
import WorkHistory from './workhistory'
import Education from './education'
import Skills from './skills'
import Portfolio from './portfolio'


class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className='show-grid'>
            <Col lg={4}>
              <Profile />
            </Col>
            <Col lg={8}>
              <Portfolio />
              <WorkHistory />
              <Education />
              <Skills />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
