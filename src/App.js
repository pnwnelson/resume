import React, { PropTypes } from 'react';
import logo from './logo.svg';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Profile from './profile'
import Work from './work'
import Education from './education'
import Skills from './skills'

//import PortfolioList from './portfoliolist'



const App  = props => {

  const profileData = props.jsonObj.basics
  const aboutData = profileData.summary
  const workData = props.jsonObj.work
  const educationData = props.jsonObj.education
  const skillsData = props.jsonObj.skills

  return (
    <div>
      <Grid>
        <Row className='show-grid'>
          <Col lg={4}>
            <Profile profileData={profileData}/>
          </Col>
          <Col lg={8}>
            <Work workData={workData} />
            <Education educationData={educationData} />
            <Skills skillsData={skillsData} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

App.propTypes = {
  jsonObj: PropTypes.object.isRequired
}

export default App;
