import React from "react";
import EducationItem from "./educationitem";
import FontAwesome from "react-fontawesome";

const Education = props => {
	const getEducationHistory = () => {
		const educationItems = [];
		props.educationData.forEach((val, index) => {
			educationItems.push(
				<EducationItem key={index} educationItemData={val} />
			);
		});
		return educationItems;
	};

	return (
		<section className="section-boxes">
			<h3 className="text-uppercase">
				<FontAwesome className="icon-box" name="graduation-cap" /> Education
			</h3>
			{getEducationHistory()}
		</section>
	);
};

export default Education;
