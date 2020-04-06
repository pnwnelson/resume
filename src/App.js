import React, { PropTypes } from "react";
//import logo from './logo.svg';
import { Grid, Row, Col } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Profile from "./profile";
import Portfolio from "./portfolio";
import Work from "./work";
import Education from "./education";
import Skills from "./skills";
import ReactGA from "react-ga";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const App = props => {
  ReactGA.initialize("UA-74423057-2"); // Google Analytics stuff
  ReactGA.pageview("/");

  // Bring in the data sections from the json file
  const profileData = props.jsonObj.basics;
  const portfolioData = props.jsonObj.portfolio;
  const workData = props.jsonObj.work;
  const educationData = props.jsonObj.education;
  const skillsData = props.jsonObj.skills;

  return (
    <div>
      <Grid>
        <Row className="show-grid">
          <Col lg={4}>
            <ReactCSSTransitionGroup
              transitionName="profile"
              transitionAppear={true}
              transitionAppearTimeout={300}
              transitionEnter={false}
              transitionLeave={false}
            >
              <Profile key={profileData} profileData={profileData} />
            </ReactCSSTransitionGroup>
          </Col>
          <Col lg={8}>
            <ReactCSSTransitionGroup
              transitionName="rightSide"
              transitionAppear={true}
              transitionAppearTimeout={300}
              transitionEnter={false}
              transitionLeave={false}
            >
              <Skills skillsData={skillsData} />
              <Work workData={workData} />
              <Portfolio portfolioData={portfolioData} />
              <Education educationData={educationData} />
            </ReactCSSTransitionGroup>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

App.propTypes = {
  jsonObj: PropTypes.object.isRequired
};

export default App;
