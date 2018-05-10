import React from "react";
//import { Grid, Row, Col, Clearfix } from 'react-bootstrap'

const PortfolioItem = props => {
	const getTools = props.portItemData.tools.map(function(item) {
		return (
			<li key={item}>
				<span className="label label-success">{item}</span>
			</li>
		);
	});

	return (
		<div>
			<hr className="hr-right-side" />
			<div className="row">
				<div className="col-lg-12">
					<a href={props.portItemData.website} target="bobdole">
						<img
							src={props.portItemData.icon}
							className="port-icon"
							alt="portfolio icon"
						/>
						<h4 className="port-title">{props.portItemData.name}</h4>
					</a>
					<p>{props.portItemData.summary}</p>
					<div>
						Tools: <ul className="list-inline port-tools-list">{getTools}</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioItem;
