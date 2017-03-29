import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'
import PortfolioItem from './portfolioitem'

const Portfolio = props => {
	
	const getPortfolio = () => {
		const portItems = []
		props.portfolioData.forEach((val, index) => {
			portItems.push(<PortfolioItem key={index} portItemData={val} />)
		})
		return portItems
	}

	return (
		<section className='section-boxes'>
			<h3 className="text-uppercase"><FontAwesome className='icon-box' name='paint-brush' /> Portfolio</h3>
			{getPortfolio()}
		</section>
	)
}

export default Portfolio;