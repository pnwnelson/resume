import React, {Component} from 'react'
import WorkItem from './workitem';
import FontAwesome from 'react-fontawesome'

const Work  = props => {
	
	const getWorkHistory = () => {
		const workItems = []
		props.workData.forEach((val, index) => {
			workItems.push(<WorkItem key={index} workItemData={val} />)
		})
		return workItems
	}

	return (
		<section className='section-boxes'>
			<h3 className="text-uppercase"><FontAwesome className='icon-box' name='briefcase' /> Work History</h3>
			{getWorkHistory()}
		</section>
	)
}

export default Work;