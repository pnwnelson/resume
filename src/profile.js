import React from "react";
import FontAwesome from "react-fontawesome";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Profile = props => {
	const profileObj = props.profileData;
	return (
		<div>
			<section>
				<div className="text-center">
					<ReactCSSTransitionGroup
						transitionName="profileimg"
						transitionAppear={true}
						transitionAppearTimeout={500}
						transitionEnter={false}
						transitionLeave={false}
					>
						<img
							className="text-center profile-pic"
							alt="Kelly Nelson"
							key={profileObj.picture}
							src={profileObj.picture}
						/>
					</ReactCSSTransitionGroup>
					<h1>{profileObj.name}</h1>
					<h4>{profileObj.label}</h4>
				</div>
			</section>
			<section className="section-boxes-aside">
				<div>
					<p className="text-center">
						<a
							href="https://en.wikipedia.org/wiki/Tri-Cities,_Washington"
							target="bobdole"
						>
							{profileObj.location.city}, {profileObj.location.region}
						</a>
					</p>
					<hr />
					<p>{profileObj.summary}</p>
					<p>
						This site was built in{" "}
						<a href="https://facebook.github.io/react/" target="bobdole">
							ReactJS
						</a>, using{" "}
						<a
							href="https://github.com/facebookincubator/create-react-app"
							target="bobdole"
						>
							Creat-React-App
						</a>{" "}
						and{" "}
						<a href="https://jsonresume.org/" target="bobdole">
							JSON Resume Schema
						</a>.
					</p>
					<hr />
					<div className="text-center">
						<a href="mailto:nelson20@gmail.com">
							<FontAwesome
								className="email-icon contact-icons"
								size="2x"
								name="envelope"
							/>
						</a>
						<a href="https://www.linkedin.com/in/pnwnelson/" target="bobdole">
							<FontAwesome
								className="contact-icons linkedin-icon"
								name="linkedin"
								size="2x"
							/>
						</a>
						<a href="https://github.com/pnwnelson" target="bobdole">
							<FontAwesome
								className="contact-icons github-icon"
								name="github"
								size="2x"
							/>
						</a>
						<a href="https://twitter.com/pnwnelson/" target="bobdole">
							<FontAwesome
								className="contact-icons twitter-icon"
								name="twitter"
								size="2x"
							/>
						</a>
						<a href="https://instagram.com/pnwnelson/" target="bobdole">
							<FontAwesome
								className="contact-icons instagram-icon"
								name="instagram"
								size="2x"
							/>
						</a>
					</div>
					<hr />
				</div>
			</section>
		</div>
	);
};

export default Profile;
