import React, {Component} from 'react'
import moment from 'moment'

const EducationItem = props => {
    const getEducationDates = () => {
        const startdate = moment(props.educationItemData.startDate).format('YYYY');
        let enddate = null;
        if (props.educationItemData.endDate !== '') {
          enddate = moment(props.educationItemData.endDate).format('YYYY');
        } else {
          enddate = 'Present';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }

    const getCourses = props.educationItemData.courses.map(function(item, index) {
        return (<li key={index}>{item}</li>)
    });

    return (
        <div className="workItem">
          <hr className='hr-right-side' />
          <h4>{props.educationItemData.area} at <span className='entity-name'>{props.educationItemData.institution}</span></h4>
          <p className="dates">{getEducationDates()}</p>
          <p>{getCourses}</p>
        </div>
    )
};

export default EducationItem;