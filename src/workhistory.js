import React, {Component} from 'react'
import resume from './resume.json';
import WorkHistoryList from './workhistorylist';

class WorkHistory extends Component {

	render () {

		const workHistoryNode = resume.work.map((work)=> {
			return (
				<WorkHistoryList key={work.id} work={work} />
			)
		})

		return (
			<div>
				<h3>Work History</h3>
				{workHistoryNode}
			</div>
		)
	}
}

export default WorkHistory;