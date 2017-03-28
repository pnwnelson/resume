import React, {Component} from 'react'
import moment from 'moment'

const WorkItem = props => {
    const getWorkDates = () => {
        const startdate = moment(props.workItemData.startDate).format('MMM, YYYY');
        let enddate = null;
        if (props.workItemData.endDate !== '') {
          enddate = moment(props.workItemData.endDate).format('MMM, YYYY');
        } else {
          enddate = 'Present';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }

    // const getHighlights = props.workItemData.highlights.map(function(item, index) {
    //     return (<li key={index}>{item}</li>)
    // });

    return (
        <div>
          <hr />
          <div className='work-title'>
            <h4>{props.workItemData.position} at <span className='entity-name'>{props.workItemData.company}</span></h4>
          </div>
          <div className='work-dates-summary'>
            <p className="dates">{getWorkDates()}</p>
            <p>{props.workItemData.summary}</p>
          </div>
        </div>
    )
};

export default WorkItem;