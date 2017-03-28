import React, {Component} from 'react'

class SkillsListItem extends Component {

	render () {

		const { skills } = this.props

		return (
			<div>
				<p>{skills.keywords}</p>
			</div>
		)
	}
}

export default SkillsListItem;