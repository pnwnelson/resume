import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'

const Profile = props => {
	const profileObj = props.profileData
	return (
		<div>
			<section>
				<div className='text-center'>
					<img className='text-center profile-pic' src={profileObj.picture} />
					<h1>{profileObj.name}</h1>
					<h4>{profileObj.label}</h4>
				</div>
			</section>
			<section className='section-boxes-aside'>
				<div>
					<p className='text-center'>{profileObj.location.city}, {profileObj.location.region}</p>
					<hr />
					<p>{profileObj.summary}</p>
					<hr />
					<div className='text-center'>
						<a href='mailto:nelson20@gmail.com'><FontAwesome className='contact-icons' size='2x' name='envelope' /></a>
						<a href='https://www.linkedin.com/in/pnwnelson/' target='bobdole'><FontAwesome className='contact-icons' name='linkedin' size='2x' /></a>
						<a href='https://github.com/pnwnelson' target='bobdole'><FontAwesome className='contact-icons' name='github' size='2x' /></a>
						<a href='https://twitter.com/pnwnelson/' target='bobdole'><FontAwesome className='contact-icons' name='twitter' size='2x' /></a>
						<a href='https://instagram.com/pnwnelson/' target='bobdole'><FontAwesome className='contact-icons' name='instagram' size='2x' /></a>

					</div>
					<hr />
				</div>
			</section>
		</div>
	)
}

export default Profile;