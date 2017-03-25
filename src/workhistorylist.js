import React, {Component} from 'react'
import resume from './resume.json';
import WorkHistoryListItem from './workhistorylistitem';

class WorkHistory extends Component {

	render () {

		const { work } = this.props

		return (
			<div>
				<WorkHistoryListItem key={work.id} work={work} />
			</div>
		)
	}
}

export default WorkHistory;