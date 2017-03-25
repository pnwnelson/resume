import React, {Component} from 'react'

class WorkHistoryListItem extends Component {

	render () {

		const { work } = this.props

		return (
			<div>
				<h5>{work.company}</h5>
			</div>
		)
	}
}

export default WorkHistoryListItem;