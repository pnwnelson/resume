import React from 'react';
import FontAwesome from 'react-fontawesome'

const Skills = props => {
    const getSkills = props.skillsData[0].keywords.map(function(item, index) {
      return (<li key={index}><span className="label label-success">{item}</span></li>)
    });

  	return (
  	  <section className='section-boxes'>
        <h3 className="text-uppercase"><FontAwesome className='icon-box' name='code' /> Skills</h3>
        <hr />
        <ul className="list-inline">{getSkills}</ul>
      </section>
  	)
};

export default Skills;