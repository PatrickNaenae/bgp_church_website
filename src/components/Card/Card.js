import React from "react";
import "./card.css";

const Card = ({
	first_name,
	last_name,
	email,
	dob,
	phone,
	occupation,
	department,
	address,
	membership,
	gender,
	profile_img,
}) => {
	return (
		<>
			<div className='card'>
				<div className='flip-card'>
					<div className='flip-card__container'>
						<div className='card-front'>
							<div className='card-front__tp card-front__tp--city'>
								<h2 className='card-front__last-name'>
									{last_name}
								</h2>
								<p className='card-front__first-name'>
									{first_name}
								</p>
							</div>

							<div className='card-front__bt'>
								<p className='card-front__text-view card-front__text-view--city'>
									View me
								</p>
							</div>
						</div>
						<div className='card-back'>
							<img
								className='profile-picture__container'
								src={profile_img}
								alt='person'
							/>
						</div>
					</div>
				</div>

				<div className='inside-page'>
					<p className='inside-page__text'>Email: {email}</p>
					<p className='inside-page__text'>Phone Number: {phone}</p>
					<p className='inside-page__text'>Address: {address}</p>
					<p className='inside-page__text'>Date of Birth: {dob}</p>
					<p className='inside-page__text'>
						Department: {department}
					</p>
					<p className='inside-page__text'>
						Occupation: {occupation}
					</p>
					<p className='inside-page__text'>
						Membership: {membership}
					</p>
					<p className='inside-page__text'>Gender: {gender}</p>
				</div>
			</div>
		</>
	);
};

export default Card;
